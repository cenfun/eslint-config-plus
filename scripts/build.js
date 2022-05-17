const fs = require('fs');
const path = require('path');
const EC = require('eight-colors');
const PCR = require('puppeteer-chromium-resolver');

const loadRules = async () => {

    const option = {

    };
    const stats = await PCR(option);
    const browser = await stats.puppeteer.launch({
        headless: false,
        args: ['--no-sandbox'],
        executablePath: stats.executablePath
    }).catch(function(error) {
        console.log(error);
    });
    const page = await browser.newPage();

    await page.goto('https://eslint.org/docs/rules/').catch((e) => {
        EC.logRed(e);
    });

    const list = await page.evaluate(() => {
        const ls = [];

        //rules
        const tables = document.querySelectorAll('table.rule-list');
        Array.from(tables).forEach(table => {
            const trs = table.querySelectorAll('tr');
            Array.from(trs).forEach(tr => {
                const item = {};
                const tds = tr.querySelectorAll('td');
                Array.from(tds).forEach((td, i) => {
                    const v = (`${td.innerText}`).trim();
                    if (i === 0 && v) {
                        item.recommended = true;
                        return;
                    }
                    if (i === 1 && v) {
                        item.fixable = true;
                        return;
                    }
                    if (i === 3) {
                        item.name = v;
                    }
                });
                ls.push(item);
            });
        });

        //Deprecated
        const deprecated = document.querySelector('.deprecated-rules');
        const deprecatedTrs = deprecated.querySelectorAll('tr');
        Array.from(deprecatedTrs).forEach(tr => {
            const item = {
                deprecated: true
            };
            const tds = tr.querySelectorAll('td');
            let valid;
            Array.from(tds).forEach((td, i) => {
                const v = (`${td.innerText}`).trim();
                if (i === 0 && v) {
                    item.name = v;
                    valid = true;
                    return;
                }
                if (i === 1 && v && v !== '(no replacement)') {
                    item.replaced = v;
                }
            });
            if (valid) {
                ls.push(item);
            }
        });

        const removed = document.querySelector('.removed-rules');
        const removedTrs = removed.querySelectorAll('tr');
        Array.from(removedTrs).forEach(tr => {
            const item = {
                removed: true
            };
            const tds = tr.querySelectorAll('td');
            let valid;
            Array.from(tds).forEach((td, i) => {
                const v = (`${td.innerText}`).trim();
                if (i === 0 && v) {
                    item.name = v;
                    valid = true;
                    return;
                }
                if (i === 1 && v && v !== '(no replacement)') {
                    item.replaced = v;
                }
            });
            if (valid) {
                ls.push(item);
            }
        });

        return ls;
    });

    //console.log(list);

    await page.close();
    await browser.close();
    const rules = {};
    list.sort((a, b) => {
        const au = a.name.toUpperCase();
        const bu = b.name.toUpperCase();
        return au > bu ? 1 : -1;
    });

    list.forEach(item => {
        rules[item.name] = item;
    });
    return rules;
};

const checkRules = (metadata) => {
    const rules = metadata.rules;
    const eslintrc = require(path.resolve(__dirname, '../lib/index.js'));

    //check deprecated/removed/recommended
    const fixableList = [];
    const normalList = [];
    Object.keys(eslintrc.rules).forEach(name => {
        const rule = rules[name];
        if (!rule) {
            if (name.indexOf('/') === -1) {
                EC.logRed(`not found: ${name}`);
            }
            return;
        }
        if (rule.deprecated) {
            EC.logRed(`deprecated: ${name}`);
            return;
        }
        if (rule.removed) {
            EC.logRed(`removed: ${name}`);
            return;
        }
        if (rule.recommended) {
            EC.logRed(`recommended: ${name}`);
            return;
        }
        if (rule.fixable) {
            fixableList.push(name);
        } else {
            normalList.push(name);
        }
    });

    //check fixable
    const fixableMissingList = [];
    const normalMissingList = [];
    Object.keys(rules).forEach(name => {
        const rule = rules[name];
        if (rule.recommended || rule.deprecated || rule.removed) {
            return;
        }
        const item = eslintrc.rules[name];
        if (!item) {
            if (rule.fixable) {
                fixableMissingList.push(name);
            } else {
                normalMissingList.push(name);
            }
        }
    });

    
    fixableList.forEach((name, i) => {
        EC.logGreen(`fixable ${i + 1}: ${name}`);
    });
    fixableMissingList.forEach((name, i) => {
        EC.logRed(`fixable missing ${i + 1}: ${name}`);
    });

    normalList.forEach((name, i) => {
        EC.logGreen(`normal ${i + 1}: ${name}`);
    });
    normalMissingList.forEach((name, i) => {
        EC.logRed(`normal missing ${i + 1}: ${name}`);
    });

};

const start = async () => {

    const date = new Date().toLocaleDateString();
    
    const rulesPath = path.resolve(__dirname, '../lib/metadata.json');

    if (fs.existsSync(rulesPath)) {
        const json = require(rulesPath);
        if (json && json.date === date) {
            return checkRules(json);
        }
    }
    
    
    const rules = await loadRules();

    const metadata = {
        date,
        rules
    };

    fs.writeFileSync(rulesPath, JSON.stringify(metadata, null, 4));
    EC.logGreen(`eslint rules saved: ${rulesPath}`);
    
    return checkRules(metadata);
};


start();