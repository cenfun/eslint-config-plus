# eslint-config-plus
Eslint config plus = Eslint official recommended rules + most fixable and normal rules.  
[https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)

# Installation
```sh
npm install eslint-config-plus -D
```
# Usage
```js
//.eslintrc.js
module.exports = {
   
    'extends': [
        'plus'
    ]

};
```

# Rules
Base on [eslint@8.25.0](https://github.com/eslint/eslint) (2022/10/19)  
- All Eslint rules: 265
- Defined in plus: 202 (Based on Eslint defaults and many years of personal programming style, welcome to add)
  - Recommended: 61 ✔ (All Eslint official recommended rules)
  - Fixable: 100 🔧 (Good enough formatting tools that no extra tools like Prettier are needed)
- Undefined: 63 ❌
### Details  
|   |Rules|In plus|
|--:|:----|:------|
|  1|[accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)|❌     |
|  2|[array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline)|🔧 ["error","consistent"]|
|  3|[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)|🔧 ["error","never"]|
|  4|[array-callback-return](https://eslint.org/docs/rules/array-callback-return)|❌     |
|  5|[array-element-newline](https://eslint.org/docs/rules/array-element-newline)|🔧 ["error","consistent"]|
|  6|[arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)|🔧 ❌|
|  7|[arrow-parens](https://eslint.org/docs/rules/arrow-parens)|🔧 ["error","always"]|
|  8|[arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)|🔧 "error"|
|  9|[block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)|❌     |
| 10|[block-spacing](https://eslint.org/docs/rules/block-spacing)|🔧 "error"|
| 11|[brace-style](https://eslint.org/docs/rules/brace-style)|🔧 "error"|
| 12|[camelcase](https://eslint.org/docs/rules/camelcase)|❌     |
| 13|[capitalized-comments](https://eslint.org/docs/rules/capitalized-comments)|🔧 ❌|
| 14|[class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)|❌     |
| 15|[comma-dangle](https://eslint.org/docs/rules/comma-dangle)|🔧 ["error","never"]|
| 16|[comma-spacing](https://eslint.org/docs/rules/comma-spacing)|🔧 ["error",{"after":true,"before":false}]|
| 17|[comma-style](https://eslint.org/docs/rules/comma-style)|🔧 ["error","last"]|
| 18|[complexity](https://eslint.org/docs/rules/complexity)|["error",8]|
| 19|[computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)|🔧 ["error","never"]|
| 20|[consistent-return](https://eslint.org/docs/rules/consistent-return)|❌     |
| 21|[consistent-this](https://eslint.org/docs/rules/consistent-this)|❌     |
| 22|[constructor-super](https://eslint.org/docs/rules/constructor-super)|✔ "error"|
| 23|[curly](https://eslint.org/docs/rules/curly)|🔧 "error"|
| 24|[default-case](https://eslint.org/docs/rules/default-case)|"error"|
| 25|[default-case-last](https://eslint.org/docs/rules/default-case-last)|"error"|
| 26|[default-param-last](https://eslint.org/docs/rules/default-param-last)|"error"|
| 27|[dot-location](https://eslint.org/docs/rules/dot-location)|🔧 ["error","property"]|
| 28|[dot-notation](https://eslint.org/docs/rules/dot-notation)|🔧 "error"|
| 29|[eol-last](https://eslint.org/docs/rules/eol-last)|🔧 ["error","always"]|
| 30|[eqeqeq](https://eslint.org/docs/rules/eqeqeq)|🔧 ["error","always"]|
| 31|[for-direction](https://eslint.org/docs/rules/for-direction)|✔ "error"|
| 32|[func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)|🔧 ["error","never"]|
| 33|[func-name-matching](https://eslint.org/docs/rules/func-name-matching)|"error"|
| 34|[func-names](https://eslint.org/docs/rules/func-names)|❌     |
| 35|[func-style](https://eslint.org/docs/rules/func-style)|❌     |
| 36|[function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline)|🔧 ["error","consistent"]|
| 37|[function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)|🔧 ["error","consistent"]|
| 38|[generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)|🔧 ["error",{"after":false,"before":true}]|
| 39|[getter-return](https://eslint.org/docs/rules/getter-return)|✔ "error"|
| 40|[grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)|❌     |
| 41|[guard-for-in](https://eslint.org/docs/rules/guard-for-in)|❌     |
| 42|[id-denylist](https://eslint.org/docs/rules/id-denylist)|❌     |
| 43|[id-length](https://eslint.org/docs/rules/id-length)|❌     |
| 44|[id-match](https://eslint.org/docs/rules/id-match)|❌     |
| 45|[implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak)|🔧 ["error","beside"]|
| 46|[indent](https://eslint.org/docs/rules/indent)|🔧 ["error",4,{"ArrayExpression":"first","ObjectExpression":1,"SwitchCase":1}]|
| 47|[init-declarations](https://eslint.org/docs/rules/init-declarations)|❌     |
| 48|[jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)|🔧 ["error","prefer-double"]|
| 49|[key-spacing](https://eslint.org/docs/rules/key-spacing)|🔧 ["error",{"afterColon":true,"mode":"strict"}]|
| 50|[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)|🔧 ["error",{"after":true,"before":true}]|
| 51|[line-comment-position](https://eslint.org/docs/rules/line-comment-position)|["error",{"position":"above"}]|
| 52|[linebreak-style](https://eslint.org/docs/rules/linebreak-style)|🔧 ❌|
| 53|[lines-around-comment](https://eslint.org/docs/rules/lines-around-comment)|🔧 ["error",{"beforeBlockComment":true}]|
| 54|[lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)|🔧 ["error","always",{"exceptAfterSingleLine":true}]|
| 55|[logical-assignment-operators](https://eslint.org/docs/rules/logical-assignment-operators)|🔧 "error"|
| 56|[max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)|"error"|
| 57|[max-depth](https://eslint.org/docs/rules/max-depth)|["error",5]|
| 58|[max-len](https://eslint.org/docs/rules/max-len)|["error",{"code":550,"ignoreStrings":true,"ignoreTrailingComments":true}]|
| 59|[max-lines](https://eslint.org/docs/rules/max-lines)|["error",3000]|
| 60|[max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)|["error",300]|
| 61|[max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)|["error",5]|
| 62|[max-params](https://eslint.org/docs/rules/max-params)|["error",8]|
| 63|[max-statements](https://eslint.org/docs/rules/max-statements)|["error",50]|
| 64|[max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line)|["error",{"max":3}]|
| 65|[multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style)|🔧 ❌|
| 66|[multiline-ternary](https://eslint.org/docs/rules/multiline-ternary)|🔧 ["error","never"]|
| 67|[new-cap](https://eslint.org/docs/rules/new-cap)|["error",{"capIsNew":false,"newIsCap":true,"properties":true}]|
| 68|[new-parens](https://eslint.org/docs/rules/new-parens)|🔧 "error"|
| 69|[newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call)|🔧 ❌|
| 70|[no-alert](https://eslint.org/docs/rules/no-alert)|"error"|
| 71|[no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)|"error"|
| 72|[no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)|✔ "error"|
| 73|[no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)|❌     |
| 74|[no-bitwise](https://eslint.org/docs/rules/no-bitwise)|❌     |
| 75|[no-caller](https://eslint.org/docs/rules/no-caller)|"error"|
| 76|[no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)|✔ "error"|
| 77|[no-class-assign](https://eslint.org/docs/rules/no-class-assign)|✔ "error"|
| 78|[no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)|✔ "error"|
| 79|[no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)|✔ "error"|
| 80|[no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)|🔧 "error"|
| 81|[no-console](https://eslint.org/docs/rules/no-console)|"off"  |
| 82|[no-const-assign](https://eslint.org/docs/rules/no-const-assign)|✔ "error"|
| 83|[no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)|❌     |
| 84|[no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)|✔ "error"|
| 85|[no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)|"error"|
| 86|[no-continue](https://eslint.org/docs/rules/no-continue)|❌     |
| 87|[no-control-regex](https://eslint.org/docs/rules/no-control-regex)|✔ "error"|
| 88|[no-debugger](https://eslint.org/docs/rules/no-debugger)|✔ "error"|
| 89|[no-delete-var](https://eslint.org/docs/rules/no-delete-var)|✔ "error"|
| 90|[no-div-regex](https://eslint.org/docs/rules/no-div-regex)|🔧 "error"|
| 91|[no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)|✔ "error"|
| 92|[no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)|✔ "error"|
| 93|[no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)|✔ "error"|
| 94|[no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)|✔ "error"|
| 95|[no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)|✔ "error"|
| 96|[no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)|"error"|
| 97|[no-else-return](https://eslint.org/docs/rules/no-else-return)|🔧 "error"|
| 98|[no-empty](https://eslint.org/docs/rules/no-empty)|✔ "error"|
| 99|[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)|✔ "error"|
|100|[no-empty-function](https://eslint.org/docs/rules/no-empty-function)|❌     |
|101|[no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)|✔ "error"|
|102|[no-eq-null](https://eslint.org/docs/rules/no-eq-null)|"error"|
|103|[no-eval](https://eslint.org/docs/rules/no-eval)|"error"|
|104|[no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)|✔ "error"|
|105|[no-extend-native](https://eslint.org/docs/rules/no-extend-native)|"error"|
|106|[no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)|🔧 "error"|
|107|[no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)|✔ 🔧 "error"|
|108|[no-extra-label](https://eslint.org/docs/rules/no-extra-label)|🔧 "error"|
|109|[no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)|🔧 ❌|
|110|[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)|✔ 🔧 "error"|
|111|[no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)|✔ "error"|
|112|[no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)|🔧 "error"|
|113|[no-func-assign](https://eslint.org/docs/rules/no-func-assign)|✔ "error"|
|114|[no-global-assign](https://eslint.org/docs/rules/no-global-assign)|✔ "error"|
|115|[no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)|🔧 "error"|
|116|[no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)|❌     |
|117|[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)|"error"|
|118|[no-import-assign](https://eslint.org/docs/rules/no-import-assign)|✔ "error"|
|119|[no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)|"error"|
|120|[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)|✔ "error"|
|121|[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)|✔ "error"|
|122|[no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)|❌     |
|123|[no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)|✔ "error"|
|124|[no-iterator](https://eslint.org/docs/rules/no-iterator)|"error"|
|125|[no-label-var](https://eslint.org/docs/rules/no-label-var)|"error"|
|126|[no-labels](https://eslint.org/docs/rules/no-labels)|"error"|
|127|[no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)|"error"|
|128|[no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)|🔧 ❌|
|129|[no-loop-func](https://eslint.org/docs/rules/no-loop-func)|"error"|
|130|[no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)|✔ "error"|
|131|[no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)|❌     |
|132|[no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)|✔ "error"|
|133|[no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)|["error",{"groups":[["&&","\|\|"]]}]|
|134|[no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|✔ "error"|
|135|[no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)|"error"|
|136|[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)|🔧 "error"|
|137|[no-multi-str](https://eslint.org/docs/rules/no-multi-str)|"error"|
|138|[no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)|🔧 ["error",{"max":2,"maxBOF":1,"maxEOF":1}]|
|139|[no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)|"error"|
|140|[no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)|"warn" |
|141|[no-new](https://eslint.org/docs/rules/no-new)|❌     |
|142|[no-new-func](https://eslint.org/docs/rules/no-new-func)|❌     |
|143|[no-new-object](https://eslint.org/docs/rules/no-new-object)|"error"|
|144|[no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)|✔ "error"|
|145|[no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)|"error"|
|146|[no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)|✔ "error"|
|147|[no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)|✔ "error"|
|148|[no-octal](https://eslint.org/docs/rules/no-octal)|✔ "error"|
|149|[no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)|"error"|
|150|[no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)|"off"  |
|151|[no-plusplus](https://eslint.org/docs/rules/no-plusplus)|❌     |
|152|[no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)|"error"|
|153|[no-proto](https://eslint.org/docs/rules/no-proto)|"error"|
|154|[no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)|✔ "error"|
|155|[no-redeclare](https://eslint.org/docs/rules/no-redeclare)|✔ "error"|
|156|[no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)|✔ 🔧 "error"|
|157|[no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)|❌     |
|158|[no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)|["error","event","fdescribe","self"]|
|159|[no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)|❌     |
|160|[no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)|❌     |
|161|[no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)|❌     |
|162|[no-return-assign](https://eslint.org/docs/rules/no-return-assign)|"error"|
|163|[no-return-await](https://eslint.org/docs/rules/no-return-await)|"error"|
|164|[no-script-url](https://eslint.org/docs/rules/no-script-url)|❌     |
|165|[no-self-assign](https://eslint.org/docs/rules/no-self-assign)|✔ "error"|
|166|[no-self-compare](https://eslint.org/docs/rules/no-self-compare)|"error"|
|167|[no-sequences](https://eslint.org/docs/rules/no-sequences)|"error"|
|168|[no-setter-return](https://eslint.org/docs/rules/no-setter-return)|✔ "error"|
|169|[no-shadow](https://eslint.org/docs/rules/no-shadow)|"error"|
|170|[no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)|✔ "error"|
|171|[no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)|✔ "error"|
|172|[no-tabs](https://eslint.org/docs/rules/no-tabs)|"error"|
|173|[no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)|"error"|
|174|[no-ternary](https://eslint.org/docs/rules/no-ternary)|❌     |
|175|[no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)|✔ "error"|
|176|[no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)|"error"|
|177|[no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)|🔧 ["error"]|
|178|[no-undef](https://eslint.org/docs/rules/no-undef)|✔ "error"|
|179|[no-undef-init](https://eslint.org/docs/rules/no-undef-init)|🔧 "error"|
|180|[no-undefined](https://eslint.org/docs/rules/no-undefined)|"error"|
|181|[no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)|❌     |
|182|[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)|✔ "error"|
|183|[no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)|"error"|
|184|[no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)|🔧 "error"|
|185|[no-unreachable](https://eslint.org/docs/rules/no-unreachable)|✔ "error"|
|186|[no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)|"error"|
|187|[no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)|✔ "error"|
|188|[no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)|✔ "error"|
|189|[no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)|✔ "error"|
|190|[no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)|"error"|
|191|[no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)|✔ 🔧 "error"|
|192|[no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)|"error"|
|193|[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)|✔ ["error",{"args":"none","vars":"local"}]|
|194|[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)|❌     |
|195|[no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)|✔ "error"|
|196|[no-useless-call](https://eslint.org/docs/rules/no-useless-call)|❌     |
|197|[no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)|✔ "error"|
|198|[no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)|🔧 "error"|
|199|[no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)|"error"|
|200|[no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)|"error"|
|201|[no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)|✔ "error"|
|202|[no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)|🔧 "error"|
|203|[no-useless-return](https://eslint.org/docs/rules/no-useless-return)|🔧 "error"|
|204|[no-var](https://eslint.org/docs/rules/no-var)|🔧 ["warn"]|
|205|[no-void](https://eslint.org/docs/rules/no-void)|❌     |
|206|[no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)|❌     |
|207|[no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)|🔧 "error"|
|208|[no-with](https://eslint.org/docs/rules/no-with)|✔ "error"|
|209|[nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)|🔧 ❌|
|210|[object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)|🔧 ["error",{"ExportDeclaration":{"minProperties":3,"multiline":true},"ImportDeclaration":{"minProperties":3,"multiline":true},"ObjectExpression":{"consistent":true,"minProperties":1,"multiline":true},"ObjectPattern":{"minProperties":3,"multiline":true}}]|
|211|[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)|🔧 ["error","always"]|
|212|[object-property-newline](https://eslint.org/docs/rules/object-property-newline)|🔧 ["error",{"allowAllPropertiesOnSameLine":true}]|
|213|[object-shorthand](https://eslint.org/docs/rules/object-shorthand)|🔧 ❌|
|214|[one-var](https://eslint.org/docs/rules/one-var)|🔧 ["error","never"]|
|215|[one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)|🔧 ["error","always"]|
|216|[operator-assignment](https://eslint.org/docs/rules/operator-assignment)|🔧 ["error","always"]|
|217|[operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)|🔧 ["error","before"]|
|218|[padded-blocks](https://eslint.org/docs/rules/padded-blocks)|🔧 ❌|
|219|[padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)|🔧 ["error",{"blankLine":"always","next":"*","prev":"directive"},{"blankLine":"any","next":"directive","prev":"directive"},{"blankLine":"always","next":"function","prev":"*"},{"blankLine":"always","next":"block","prev":"*"}]|
|220|[prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)|🔧 ❌|
|221|[prefer-const](https://eslint.org/docs/rules/prefer-const)|🔧 "error"|
|222|[prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)|🔧 ❌|
|223|[prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)|🔧 ❌|
|224|[prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group)|❌     |
|225|[prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)|🔧 "error"|
|226|[prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)|🔧 ❌|
|227|[prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)|🔧 "error"|
|228|[prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)|❌     |
|229|[prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)|"error"|
|230|[prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)|❌     |
|231|[prefer-spread](https://eslint.org/docs/rules/prefer-spread)|❌     |
|232|[prefer-template](https://eslint.org/docs/rules/prefer-template)|🔧 "error"|
|233|[quote-props](https://eslint.org/docs/rules/quote-props)|🔧 ❌|
|234|[quotes](https://eslint.org/docs/rules/quotes)|🔧 ["error","single",{"avoidEscape":true}]|
|235|[radix](https://eslint.org/docs/rules/radix)|❌     |
|236|[require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)|"off"  |
|237|[require-await](https://eslint.org/docs/rules/require-await)|"error"|
|238|[require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)|❌     |
|239|[require-yield](https://eslint.org/docs/rules/require-yield)|✔ "error"|
|240|[rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)|🔧 ["error","always"]|
|241|[semi](https://eslint.org/docs/rules/semi)|🔧 ["error","always"]|
|242|[semi-spacing](https://eslint.org/docs/rules/semi-spacing)|🔧 ["error",{"after":true,"before":false}]|
|243|[semi-style](https://eslint.org/docs/rules/semi-style)|🔧 ["error","last"]|
|244|[sort-imports](https://eslint.org/docs/rules/sort-imports)|🔧 ❌|
|245|[sort-keys](https://eslint.org/docs/rules/sort-keys)|❌     |
|246|[sort-vars](https://eslint.org/docs/rules/sort-vars)|🔧 ❌|
|247|[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)|🔧 ["error","always"]|
|248|[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|🔧 ["error",{"anonymous":"never","asyncArrow":"always","named":"never"}]|
|249|[space-in-parens](https://eslint.org/docs/rules/space-in-parens)|🔧 "error"|
|250|[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)|🔧 ["error",{"int32Hint":false}]|
|251|[space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)|🔧 "error"|
|252|[spaced-comment](https://eslint.org/docs/rules/spaced-comment)|🔧 "error"|
|253|[strict](https://eslint.org/docs/rules/strict)|🔧 ❌|
|254|[switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)|🔧 "error"|
|255|[symbol-description](https://eslint.org/docs/rules/symbol-description)|"error"|
|256|[template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)|🔧 "error"|
|257|[template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)|🔧 "error"|
|258|[unicode-bom](https://eslint.org/docs/rules/unicode-bom)|🔧 "error"|
|259|[use-isnan](https://eslint.org/docs/rules/use-isnan)|✔ "error"|
|260|[valid-typeof](https://eslint.org/docs/rules/valid-typeof)|✔ "error"|
|261|[vars-on-top](https://eslint.org/docs/rules/vars-on-top)|❌     |
|262|[wrap-iife](https://eslint.org/docs/rules/wrap-iife)|🔧 ["error","inside"]|
|263|[wrap-regex](https://eslint.org/docs/rules/wrap-regex)|🔧 "error"|
|264|[yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)|🔧 "error"|
|265|[yoda](https://eslint.org/docs/rules/yoda)|🔧 "error"|

# Changelog
[CHANGELOG.md](CHANGELOG.md)