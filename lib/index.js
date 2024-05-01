// https://eslint.org/docs/rules/

const rulesRecommended = require('./rules-recommended.js');
const rulesFixable = require('./rules-fixable.js');
const rulesNormal = require('./rules-normal.js');

const rulesOverride = require('./rules-override.js');

const globals = require('./globals.js');

// https://eslint.org/docs/latest/use/configure/configuration-files
module.exports = {

    name: 'eslint-config-plus',

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
