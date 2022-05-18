const fs = require('fs');
const path = require('path');
const EC = require('eight-colors');

const getMarkDownTable = function(d) {
    // console.log(d);
    const lines = [];

    const header = [''];
    d.columns.forEach((c) => {
        const cn = c.name || '';
        header.push(cn.padEnd(c.width, ' '));
    });
    lines.push(header.join('|'));

    const line = [''];
    d.columns.forEach((c) => {
        const dash = ''.padEnd(c.width - 1, '-');
        if (c.align === 'left') {
            line.push(`:${dash}`);
        } else if (c.align === 'right') {
            line.push(`${dash}:`);
        } else {
            line.push(`${dash}-`);
        }
        
    });
    lines.push(line.join('|'));

    d.rows.forEach((r) => {
        const row = [''];
        d.columns.forEach((c, i) => {
            const s = `${r[i]}`.split('|').join('\\|');
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


const checkRules = (metadata) => {
    const allRules = metadata.rules;
    const myEslint = require(path.resolve(__dirname, '../lib/index.js'));

    const myRules = myEslint.rules;

    const allList = [];
    // check fixable
    const fixableList = [];
    const normalList = [];
    Object.keys(allRules).forEach((key) => {
        const rule = allRules[key];
        rule.name = key;

        allList.push(rule);

        if (rule.recommended) {
            return;
        }

        const item = myRules[key];
        if (!item) {
            if (rule.fixable) {
                fixableList.push(key);
            } else {
                normalList.push(key);
            }
        }
    });

    fixableList.forEach((name, i) => {
        EC.logRed(`undefined fixable: ${i + 1}: ${name}`);
    });
    console.log('');
    normalList.forEach((name, i) => {
        EC.logRed(`undefined normal: ${i + 1}: ${name}`);
    });
    console.log('');

    const info = `Base on eslint@${metadata.version} (${metadata.date})  \n`;

    const recommendedIcon = '✔';
    const fixableIcon = '🔧';

    const legend = `Recommended: ${recommendedIcon}  Fixable: ${fixableIcon}  \n`;

    let unset = 0;
    let w = 0;

    const rows = allList.map((item, i) => {

        w = Math.max(w, item.name.length);

        // console.log(item);
        const name = `[${item.name}](https://eslint.org/docs/rules/${item.name})`;
        const recommended = item.recommended ? recommendedIcon : '';
        const fixable = item.fixable ? fixableIcon : '';

        let v = myRules[item.name];
        if (v) {
            v = JSON.stringify(v);
        }

        // $\\color{red}{×}$
        const plus = v || recommended || '';

        if (!plus) {
            unset += 1;
        }

        return [i + 1, name, recommended, fixable, plus];
    });

    const total = `Undefined in plus: ${unset}  \n`;
    EC.logRed(total);

    const readmeTable = getMarkDownTable({
        columns: [{
            name: '',
            width: 3,
            align: 'right'
        }, {
            name: 'rule',
            width: w,
            align: 'left'
        }, {
            name: '',
            width: 2
        }, {
            name: '',
            width: 2
        }, {
            name: 'defined in plus',
            width: 10,
            align: 'left'
        }],
        rows
    });

    let readmeContent = fs.readFileSync(path.resolve(__dirname, 'README.md')).toString('utf-8');
    readmeContent = readmeContent.replace('{replace_holder_rules}', info + legend + total + readmeTable);
    const readmePath = path.resolve(__dirname, '../README.md');
    fs.writeFileSync(readmePath, readmeContent);
    EC.logGreen('generated README.md');

};

const start = () => {

    const date = new Date().toLocaleDateString();
    
    const rules = {};

    const builtInRules = require('../node_modules/eslint/lib/rules');

    builtInRules.forEach(function(rule, ruleId) {
        const meta = rule.meta;
        if (meta.deprecated) {
            return;
        }
        const info = {};
        if (meta.docs.recommended) {
            info.recommended = true;
        }
        if (meta.fixable) {
            info.fixable = true;
        }
        rules[ruleId] = info;
    });

    // console.log(rules);

    const version = require('../node_modules/eslint/package.json').version;
    
    const metadata = {
        version,
        date,
        rules
    };

    const rulesPath = path.resolve(__dirname, '../lib/metadata.json');
    fs.writeFileSync(rulesPath, JSON.stringify(metadata, null, 4));
    EC.logGreen(`generated metadata: ${rulesPath}`);
    
    checkRules(metadata);
    
};


start();
