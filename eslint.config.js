// https://eslint.org/docs/rules/

const plus = require('./lib/index.js');

module.exports = [
    {

        files: [
            '**/*.js'
        ],

        ignores: [
            '**/dist/**'
        ],

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: plus.languageOptions.globals
        },

        rules: {
            ... plus.rules,
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
        }
    }
];
