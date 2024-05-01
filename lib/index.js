// https://eslint.org/docs/rules/

const rulesRecommended = require('./rules-recommended.js');
const rulesFixable = require('./rules-fixable.js');
const rulesNormal = require('./rules-normal.js');

const rulesOverride = require('./rules-override.js');

const globals = require('./globals.js');

module.exports = {

    languageOptions: {
        globals
    },

    rules: {
        ... rulesRecommended,
        ... rulesFixable,
        ... rulesNormal,

        ... rulesOverride
    }
};
