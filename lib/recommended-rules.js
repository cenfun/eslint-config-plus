// if the "extends": "eslint:recommended" property in a configuration file enables the rule
// recommended but special rules 
module.exports = {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-prototype-builtins': 'off',
    'no-unused-vars': ['error', {
        'args': 'none',
        'vars': 'local'
    }]
};