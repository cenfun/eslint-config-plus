// if the "extends": "eslint:recommended" property in a configuration file enables the rule
// recommended but need overwriting rules
module.exports = {
    'no-unused-vars': ['error', {
        'args': 'none',
        'vars': 'local'
    }]
};
