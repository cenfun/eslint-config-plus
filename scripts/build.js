const fs = require('fs');
const path = require('path');
const EC = require('eight-colors');
const PCR = require('puppeteer-chromium-resolver');

const getMarkDownTable = function(d) {
    //console.log(d);
    const lines = [];

    const header = [''];
    d.columns.forEach((c) => {
        const cn = c.name || '';
        header.push(cn.padEnd(c.width, ' '));
    });
    lines.push(header.join('|'));

    const line = [''];
    d.columns.forEach(c => {
        if (c.align === 'right') {
            line.push(`${''.padEnd(c.width - 1, '-')}:`);
        } else {
            line.push(''.padEnd(c.width, '-'));
        }
        
    });
    lines.push(line.join('|'));

    d.rows.forEach((r) => {
        const row = [''];
        d.columns.forEach((c, i) => {
            const s = `${r[i]}`;
            if (c.align === 'right') {
                row.push(s.padStart(c.width, ' '));
            } else {
                row.push(s.padEnd(c.width, ' '));
            }
        });
        lines.push(row.join('|'));
    });

    return lines.join('\r\n');
};

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
    const allRules = metadata.rules;
    const myEslint = require(path.resolve(__dirname, '../lib/index.js'));

    const myRules = myEslint.rules;

    //check deprecated/removed/recommended
    const fixableList = [];
    const normalList = [];
    Object.keys(myRules).forEach(name => {
        const rule = allRules[name];
        if (!rule) {
            //no plugin rules
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

    const allList = [];
    //check fixable
    const fixableMissingList = [];
    const normalMissingList = [];
    Object.keys(allRules).forEach(name => {
        const rule = allRules[name];
        allList.push(rule);
        if (rule.recommended || rule.deprecated || rule.removed) {
            return;
        }
        const item = myRules[name];
        if (!item) {
            if (rule.fixable) {
                fixableMissingList.push(name);
            } else {
                normalMissingList.push(name);
            }
        }
    });

    
    // fixableList.forEach((name, i) => {
    //     EC.logGreen(`fixable ${i + 1}: ${name}`);
    // });
    fixableMissingList.forEach((name, i) => {
        EC.logRed(`fixable missing ${i + 1}: ${name}`);
    });

    // normalList.forEach((name, i) => {
    //     EC.logGreen(`normal ${i + 1}: ${name}`);
    // });
    normalMissingList.forEach((name, i) => {
        EC.logRed(`normal missing ${i + 1}: ${name}`);
    });

    const rows = allList.map((item, i) => {

        //console.log(item);
        const name = `[${item.name}](https://eslint.org/docs/rules/${item.name})`;
        const recommended = item.recommended ? '✓' : '';
        const fixable = item.fixable ? '🔧' : '';

        let v = myRules[item.name];
        if (v) {
            v = JSON.stringify(v);
        }

        const plus = v || recommended || '';

        return [i + 1, name, recommended, fixable, plus];
    });

    const readmeTable = getMarkDownTable({
        columns: [{
            name: '',
            width: 3,
            align: 'right'
        }, {
            name: 'Name',
            width: 20
        }, {
            name: 'Recommended',
            width: 3
        }, {
            name: 'Fixable',
            width: 3
        }, {
            name: 'Plus',
            width: 30
        }],
        rows
    });

    let readmeContent = fs.readFileSync(path.resolve(__dirname, 'README.md')).toString('utf-8');
    readmeContent = readmeContent.replace('{replace_holder_date}', metadata.date);
    readmeContent = readmeContent.replace('{replace_holder_rules}', readmeTable);
    const readmePath = path.resolve(__dirname, '../README.md');
    fs.writeFileSync(readmePath, readmeContent);
    EC.logGreen('generated README.md');

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