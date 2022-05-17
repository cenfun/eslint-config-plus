// https://eslint.org/docs/rules/

const normalRules = require('./normal-rules.js');
const fixableRules = require('./fixable-rules.js');

module.exports = {

    'extends': [
        'eslint:recommended'
    ],

    'rules': {
        ... normalRules,
        ... fixableRules
    }
};
