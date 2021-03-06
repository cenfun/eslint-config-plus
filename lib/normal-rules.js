module.exports = {
    'complexity': ['error', 8],
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'func-name-matching': 'error',
    'line-comment-position': ['error', {
        'position': 'above'
    }],
    'max-classes-per-file': 'error',
    'max-depth': ['error', 5],
    'max-len': ['error', {
        'code': 550,
        'ignoreStrings': true,
        'ignoreTrailingComments': true
    }],
    'max-lines': ['error', 3000],
    'max-lines-per-function': ['error', 300],
    'max-nested-callbacks': ['error', 5],
    'max-params': ['error', 8],
    'max-statements': ['error', 50],
    'max-statements-per-line': ['error', {
        'max': 3
    }],
    'new-cap': ['error', {
        'capIsNew': false,
        'newIsCap': true,
        'properties': true
    }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-console': 'off',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': ['error', {
        'groups': [['&&', '||']]
    }],
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'warn',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-restricted-globals': ['error', 'event', 'fdescribe', 'self'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undefined': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-expressions': 'error',
    'no-unused-private-class-members': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'prefer-regex-literals': 'error',
    'require-atomic-updates': 'off',
    'require-await': 'error',
    'symbol-description': 'error'
};
