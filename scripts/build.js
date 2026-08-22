import os from 'node:os';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import eslintJs from '@eslint/js';
import eslintPackage from 'eslint/package.json' with { type: 'json' };
import { buildSync } from 'esbuild';
import EC from 'eight-colors';
import globals from 'globals';
import MG from 'markdown-grid';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootPath = path.resolve(__dirname, '..');
const srcPath = path.join(rootPath, 'src');
const distPath = path.join(rootPath, 'dist');
const eslintPath = path.dirname(fileURLToPath(import.meta.resolve('eslint/package.json')));
const builtInRulesUrl = pathToFileURL(path.join(eslintPath, 'lib/rules/index.js'));
const { default: builtInRules } = await import(builtInRulesUrl);

const hasOwn = function(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
};

const checkRules = (metadata, recommendedRules, myEslint, myOverrideRules) => {
    const allRules = metadata.rules;
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

        let icon;
        let value = '';
        if (enable) {
            definedInfo.count += 1;
            icon = definedInfo.icon;
            value = `\`${JSON.stringify(myRules[key])}\``;
            if (value.length > 36) {
                value = `<details><summary>Details</summary>${value}</details>`;
            }
        } else {
            undefinedInfo.count += 1;
            icon = undefinedInfo.icon;
            EC.logRed(`[${undefinedInfo.icon} undefined] ${undefinedInfo.count}: ${key} ${type}`);
        }

        return [i + 1, name, type, icon, value];
    });

    // override rules
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
        ].map((it) => {
            const per = it.count === totalCount ? '' : `${(it.count / totalCount * 100).toFixed(1)}%`;
            return [it.icon, it.label, it.count, per];
        })
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
            align: 'center'
        }, {
            name: 'Value',
            align: 'left'
        }],
        rows
    });

    let readmeContent = fs.readFileSync(path.resolve(__dirname, 'README.md')).toString('utf-8');
    readmeContent = readmeContent.replace('{replace_holder_rules}', info + legendTable + title + rulesTable);
    const readmePath = path.join(rootPath, 'README.md');
    fs.writeFileSync(readmePath, readmeContent);
    EC.logGreen('generated README.md');

};

const start = async () => {

    const date = new Date().toLocaleDateString();

    // =====================================================================================
    // save recommended rules
    const recommendedRules = eslintJs.configs.recommended.rules;

    let recommendedJsonStr = JSON.stringify(recommendedRules, null, 4);
    recommendedJsonStr = recommendedJsonStr.replace(/"/g, "'");
    const recommendedContent = `export default ${recommendedJsonStr};\n`;
    fs.writeFileSync(path.join(srcPath, 'rules-recommended.js'), recommendedContent);

    // =====================================================================================
    // save globals
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
    const globalsContent = `export default ${globalsJsonStr};\n`;
    fs.writeFileSync(path.join(srcPath, 'globals.js'), globalsContent);

    // =====================================================================================
    // all build-in rules
    const rules = {};
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

    const version = eslintPackage.version;
    const metadata = {
        version,
        date,
        rules
    };

    const rulesPath = path.join(srcPath, 'metadata.json');
    fs.writeFileSync(rulesPath, JSON.stringify(metadata, null, 4));
    EC.logGreen(`generated metadata: ${rulesPath}`);


    // =====================================================================================
    const [{ default: myEslint }, { default: myOverrideRules }] = await Promise.all([
        import(pathToFileURL(path.join(srcPath, 'index.js'))),
        import(pathToFileURL(path.join(srcPath, 'rules-override.js')))
    ]);
    checkRules(metadata, recommendedRules, myEslint, myOverrideRules);

    // =====================================================================================
    // bundle ESM and CommonJS entries
    fs.rmSync(distPath, {
        recursive: true,
        force: true
    });
    fs.mkdirSync(distPath, {
        recursive: true
    });

    const entryPath = path.join(srcPath, 'index.js');
    const buildOptions = {
        entryPoints: [entryPath],
        bundle: true,
        platform: 'node',
        target: 'node20',
        logLevel: 'silent'
    };

    buildSync({
        ... buildOptions,
        outfile: path.join(distPath, 'index.js'),
        format: 'esm'
    });

    buildSync({
        ... buildOptions,
        outfile: path.join(distPath, 'index.cjs'),
        format: 'cjs',
        footer: {
            js: 'module.exports = module.exports.default;'
        }
    });
    EC.logGreen(`generated bundles: ${distPath}`);

};


await start();
