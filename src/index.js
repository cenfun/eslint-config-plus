// https://eslint.org/docs/rules/

import rulesRecommended from './rules-recommended.js';
import rulesFixable from './rules-fixable.js';
import rulesNormal from './rules-normal.js';

import rulesOverride from './rules-override.js';

import globals from './globals.js';

// https://eslint.org/docs/latest/use/configure/configuration-files
export default {

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
