// https://eslint.org/docs/rules/

const recommendedRules = require('./recommended-rules.js');
const normalRules = require('./normal-rules.js');
const fixableRules = require('./fixable-rules.js');

module.exports = {

    'extends': [
        'eslint:recommended'
    ],

    'rules': {
        ... recommendedRules,
        ... normalRules,
        ... fixableRules
    }
};
