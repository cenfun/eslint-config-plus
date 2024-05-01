const os = require('os');
const fs = require('fs');
const path = require('path');
const EC = require('eight-colors');
const MG = require('markdown-grid');

const hasOwn = function(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};

const checkRules = (metadata, recommendedRules) => {
    const allRules = metadata.rules;
    const myEslint = require(path.resolve(__dirname, '../lib/index.js'));

    const myRules = myEslint.rules;

    const info = `Base on [eslint@${metadata.version}](https://github.com/eslint/eslint) (${metadata.date})  \n`;

    const definedInfo = {
        label: 'Defined in plus',
        icon: '✔️',
        count: 0
    };

    const undefinedInfo = {
        label: 'Undefined',
        icon: '❌',
        count: 0
    };

    const recommendedInfo = {
        label: 'Recommended',
        icon: '✅',
        count: 0
    };

    const fixableInfo = {
        label: 'Fixable',
        icon: '🔧',
        count: 0
    };

    const deprecatedInfo = {
        label: 'Deprecated',
        icon: '⚠️',
        count: 0
    };

    const getRuleType = (item) => {
        const list = [];

        if (item.recommended) {
            recommendedInfo.count += 1;
            list.push(recommendedInfo.icon);
        }

        if (item.fixable) {
            fixableInfo.count += 1;
            list.push(fixableInfo.icon);
        }

        if (item.deprecated) {
            deprecatedInfo.count += 1;
            list.push(deprecatedInfo.icon);
        }

        return list.join('');
    };

    const rows = Object.keys(allRules).map((key, i) => {

        const item = allRules[key];

        // console.log(item);
        const name = `[${key}](https://eslint.org/docs/rules/${key})`;

        const enable = hasOwn(myRules, key);

        const type = getRuleType(item);

        let icon = '';
        let value = '';
        if (enable) {
            definedInfo.count += 1;
            icon = definedInfo.icon;
            value = JSON.stringify(myRules[key]);
        } else {
            undefinedInfo.count += 1;
            icon = undefinedInfo.icon;
            EC.logRed(`[${undefinedInfo.icon} undefined] ${undefinedInfo.count}: ${key} ${type}`);
        }

        return [i + 1, name, type, icon, value];
    });

    // override rules
    const myOverrideRules = require(path.resolve(__dirname, '../lib/rules-override.js'));
    Object.keys(myOverrideRules).forEach((key) => {
        EC.logYellow(`[override] ${key}: ${recommendedRules[key] || myRules[key]} -> ${JSON.stringify(myOverrideRules[key])}`);
    });


    const totalCount = rows.length;
    const legendTable = MG({
        columns: [{
            name: '',
            align: 'center'
        }, {
            name: 'Rules'
        }, {
            name: 'Count',
            align: 'right'
        }, {
            name: '',
            align: 'right'
        }],
        rows: [
            {
                icon: '',
                label: 'All Eslint rules',
                count: totalCount
            },
            definedInfo,
            undefinedInfo,
            recommendedInfo,
            fixableInfo,
            deprecatedInfo
        ].map((it) => [it.icon, it.label, it.count, it.count === totalCount ? '' : `${(it.count / totalCount * 100).toFixed(1)}%`])
    });

    const title = `${os.EOL}${os.EOL}### Details  ${os.EOL}`;
    const rulesTable = MG({
        columns: [{
            name: '',
            align: 'right'
        }, {
            name: 'Rules',
            align: 'left'
        }, {
            name: 'Type',
            align: 'left'
        }, {
            name: 'Enabled',
            align: 'left'
        }, {
            name: 'Value',
            align: 'left'
        }],
        rows
    });

    let readmeContent = fs.readFileSync(path.resolve(__dirname, 'README.md')).toString('utf-8');
    readmeContent = readmeContent.replace('{replace_holder_rules}', info + legendTable + title + rulesTable);
    const readmePath = path.resolve(__dirname, '../README.md');
    fs.writeFileSync(readmePath, readmeContent);
    EC.logGreen('generated README.md');

};

const start = () => {

    const date = new Date().toLocaleDateString();

    // =====================================================================================
    // save recommended rules
    const recommendedRules = require('../node_modules/@eslint/js/src/configs/eslint-recommended.js').rules;

    let recommendedJsonStr = JSON.stringify(recommendedRules, null, 4);
    recommendedJsonStr = recommendedJsonStr.replace(/"/g, "'");
    const recommendedContent = `module.exports = ${recommendedJsonStr};\n`;
    fs.writeFileSync(path.resolve(__dirname, '../lib/rules-recommended.js'), recommendedContent);

    // =====================================================================================
    // save globals
    const globals = require('globals');
    const myGlobals = {
        ... globals.browser,
        ... globals.node,
        ... globals.worker,
        ... globals.commonjs,
        ... globals.es2021,
        ... globals.mocha,
        ... globals.jest
    };

    let globalsJsonStr = JSON.stringify(myGlobals, null, 4);
    globalsJsonStr = globalsJsonStr.replace(/"/g, "'");
    const globalsContent = `module.exports = ${globalsJsonStr};\n`;
    fs.writeFileSync(path.resolve(__dirname, '../lib/globals.js'), globalsContent);

    // =====================================================================================
    // all build-in rules
    const rules = {};
    const builtInRules = require('../node_modules/eslint/lib/rules');
    builtInRules.forEach(function(rule, ruleId) {
        const meta = rule.meta;
        const info = {};
        if (meta.deprecated) {
            info.deprecated = true;
        }
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


    // =====================================================================================
    checkRules(metadata, recommendedRules);

};


start();
