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
        const dash = ''.padEnd(c.width, '-');
        if (c.align === 'center') {
            line.push(`:${dash}:`);
        } else if (c.align === 'right') {
            line.push(`${dash}:`);
        } else {
            line.push(`:${dash}`);
        }
        
    });
    lines.push(line.join('|'));

    d.rows.forEach((r) => {
        const row = [''];
        d.columns.forEach((c, i) => {
            const s = `${r[i]}`.split('|').join('&#124;');
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


const checkRules = (metadata, recommendedRules) => {
    const allRules = metadata.rules;
    const myEslint = require(path.resolve(__dirname, '../lib/index.js'));

    const myRules = myEslint.rules;

    const info = `Base on [eslint@${metadata.version}](https://github.com/eslint/eslint) (${metadata.date})  \n`;

    const recommendedIcon = '✔';
    const fixableIcon = '🔧';
    const undefinedIcon = '❌';

    let d = 0;
    let u = 0;
    let w = 0;

    const rows = Object.keys(allRules).map((key, i) => {

        const item = allRules[key];

        w = Math.max(w, key.length);

        // console.log(item);
        const name = `[${key}](https://eslint.org/docs/rules/${key})`;
        const recommended = item.recommended ? recommendedIcon : '';
        const fixable = item.fixable ? fixableIcon : '';

        let v = myRules[key];
        if (v) {
            v = JSON.stringify(v);
            d += 1;
            if (item.recommended) {
                EC.logYellow(`Overwriting recommended ${key}: ${v}`);
            }
        } else if (item.recommended) {
            v = recommendedRules[key];
            if (v) {
                d += 1;
                v = JSON.stringify(v);
            }
        } else {
            v = undefinedIcon;
            u += 1;
            EC.logRed(`Undefined: ${u}: ${key} ${recommended}${fixable}`);
        }

        return [i + 1, name, recommended, fixable, v];
    });

    const legend = `Recommended: ${recommendedIcon}  Fixable: ${fixableIcon}  \n`;

    EC.logRed(`Undefined in plus: ${u} ${undefinedIcon}`);

    const rulesTable = getMarkDownTable({
        columns: [{
            name: '',
            width: 3,
            align: 'right'
        }, {
            name: `Rules (Total: ${rows.length})`,
            width: w
        }, {
            name: '',
            width: 2,
            align: 'center'
        }, {
            name: '',
            width: 2,
            align: 'center'
        }, {
            name: `Defined in plus ${d} (Undefined: ${u} ${undefinedIcon})`,
            width: 10
        }],
        rows
    });

    let readmeContent = fs.readFileSync(path.resolve(__dirname, 'README.md')).toString('utf-8');
    readmeContent = readmeContent.replace('{replace_holder_rules}', info + legend + rulesTable);
    const readmePath = path.resolve(__dirname, '../README.md');
    fs.writeFileSync(readmePath, readmeContent);
    EC.logGreen('generated README.md');

};

const start = () => {

    const date = new Date().toLocaleDateString();
    
    const rules = {};

    const builtInRules = require('../node_modules/eslint/lib/rules');

    const recommendedRules = require('../node_modules/eslint/conf/eslint-recommended.js').rules;

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
    
    checkRules(metadata, recommendedRules);
    
};


start();
