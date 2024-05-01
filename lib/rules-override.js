module.exports = {

    // recommended rules
    'no-unused-vars': ['error', {
        'args': 'none',
        'vars': 'local'
    }],

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'

};
