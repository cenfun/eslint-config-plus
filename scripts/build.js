const os = require('os');
const fs = require('fs');
const path = require('path');
const EC = require('eight-colors');
const MG = require('markdown-grid');

const checkRules = (metadata, recommendedRules) => {
    const allRules = metadata.rules;
    const myEslint = require(path.resolve(__dirname, '../lib/index.js'));

    const myRules = myEslint.rules;

    const info = `Base on [eslint@${metadata.version}](https://github.com/eslint/eslint) (${metadata.date})  \n`;

    const definedInfo = {
        count: 0
    };

    const recommendedInfo = {
        icon: '✔',
        count: 0
    };

    const fixableInfo = {
        icon: '🔧',
        count: 0
    };

    const undefinedInfo = {
        icon: '❌',
        count: 0
    };

    const rows = Object.keys(allRules).map((key, i) => {

        const item = allRules[key];

        // console.log(item);
        const name = `[${key}](https://eslint.org/docs/rules/${key})`;

        let recommendedValue = '';
        if (item.recommended) {
            recommendedValue = `${recommendedInfo.icon} `;
            recommendedInfo.count += 1;
        }
        let fixableValue = '';
        if (item.fixable) {
            fixableValue = `${fixableInfo.icon} `;
            fixableInfo.count += 1;
        }

        let definedValue = myRules[key];
        if (definedValue) {
            definedValue = JSON.stringify(definedValue);
            definedInfo.count += 1;
            if (item.recommended) {
                EC.logYellow(`Overwriting recommended ${key}: ${definedValue}`);
            }
        } else if (item.recommended) {
            definedValue = recommendedRules[key];
            definedInfo.count += 1;
            if (definedValue) {
                definedValue = JSON.stringify(definedValue);
            }
        } else {
            definedValue = undefinedInfo.icon;
            undefinedInfo.count += 1;
            EC.logRed(`Undefined: ${undefinedInfo.count}: ${key} ${recommendedValue}${fixableValue}`);
        }

        return [i + 1, name, recommendedValue + fixableValue + definedValue];
    });

    EC.logRed(`Undefined in plus: ${undefinedInfo.count} ${undefinedInfo.icon}`);

    const legend = [
        `- All Eslint rules: ${rows.length}`,
        `- Defined in plus: ${definedInfo.count} (Based on Eslint defaults and many years of personal programming style, welcome to add)`,
        `  - Recommended: ${recommendedInfo.count} ${recommendedInfo.icon} (All Eslint official recommended rules)`,
        `  - Fixable: ${fixableInfo.count} ${fixableInfo.icon} (Good enough formatting tools that no extra tools like Prettier are needed)`,
        `- Undefined: ${undefinedInfo.count} ${undefinedInfo.icon}`
    ].join(os.EOL) + os.EOL;

    const title = `### Details  ${os.EOL}`;
    const rulesTable = MG({
        columns: [{
            name: '',
            align: 'right'
        }, {
            name: 'Rules',
            align: 'left'
        }, {
            name: 'In plus',
            align: 'left'
        }],
        rows
    });

    let readmeContent = fs.readFileSync(path.resolve(__dirname, 'README.md')).toString('utf-8');
    readmeContent = readmeContent.replace('{replace_holder_rules}', info + legend + title + rulesTable);
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
