// https://eslint.org/docs/rules/

const recommendedRules = require('./recommended-rules.js');
const fixableRules = require('./fixable-rules.js');
const normalRules = require('./normal-rules.js');

module.exports = {
    rules: {
        ... recommendedRules,
        ... fixableRules,
        ... normalRules
    }
};
