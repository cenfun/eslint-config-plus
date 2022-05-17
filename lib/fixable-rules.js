// if some problems reported by the rule are automatically fixable by the --fix command line option
// formatters 

module.exports = {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
        'after': true,
        'before': false
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'curly': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', {
        'after': false,
        'before': true
    }],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 4, {
        'ArrayExpression': 'first',
        'ObjectExpression': 1,
        'SwitchCase': 1
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
        'afterColon': true,
        'mode': 'strict'
    }],
    'keyword-spacing': ['error', {
        'after': true,
        'before': true
    }],
    'lines-around-comment': ['error', {
        'beforeBlockComment': true
    }],
    'lines-between-class-members': ['error', 'always', {
        'exceptAfterSingleLine': true
    }],
    'multiline-ternary': ['error', 'never'],
    'new-parens': 'error',
    'no-confusing-arrow': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-lonely-if': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', {
        'max': 2,
        'maxBOF': 1,
        'maxEOF': 1
    }],
    'no-trailing-spaces': ['error', {
        'ignoreComments': true,
        'skipBlankLines': true
    }],
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': ['warn'],
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', {
        'ExportDeclaration': {
            'minProperties': 3,
            'multiline': true
        },
        'ImportDeclaration': {
            'minProperties': 3,
            'multiline': true
        },
        'ObjectExpression': {
            'consistent': true,
            'minProperties': 1,
            'multiline': true
        },
        'ObjectPattern': {
            'minProperties': 3,
            'multiline': true
        }
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
        'allowAllPropertiesOnSameLine': true
    }],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'padding-line-between-statements': ['error', {
        'blankLine': 'always',
        'next': '*',
        'prev': 'directive'
    }, {
        'blankLine': 'any',
        'next': 'directive',
        'prev': 'directive'
    }, {
        'blankLine': 'always',
        'next': 'function',
        'prev': '*'
    }, {
        'blankLine': 'always',
        'next': 'block',
        'prev': '*'
    }],
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', {
        'avoidEscape': true
    }],
    'rest-spread-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {
        'after': true,
        'before': false
    }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
        'anonymous': 'never',
        'asyncArrow': 'always',
        'named': 'never'
    }],
    'space-in-parens': 'error',
    'space-infix-ops': ['error', {
        'int32Hint': false
    }],
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-iife': ['error', 'inside'],
    'wrap-regex': 'error'
};
