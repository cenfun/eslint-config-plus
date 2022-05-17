module.exports = {

    'root': true,

    'env': {
        'node': true,
        'browser': true,
        'amd': true,
        'commonjs': true,
        'es6': true,
        'mocha': true
    },

    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },

    'extends': [
        './lib/index.js'
    ]
};
