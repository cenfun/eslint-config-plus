const eslintRecommendedRules = require('./eslint-recommended-rules.js');
module.exports = {
    ... eslintRecommendedRules,

    // recommended but need overwriting rules
    'no-unused-vars': ['error', {
        'args': 'none',
        'vars': 'local'
    }]

};
