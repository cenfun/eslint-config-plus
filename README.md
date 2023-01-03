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
Base on [eslint@8.31.0](https://github.com/eslint/eslint) (2023/1/3)  
- All Eslint rules: 267
- Defined in plus: 201 (Based on Eslint defaults and many years of personal programming style, welcome to add)
  - Recommended: 61 ✅ (All Eslint official recommended rules)
  - Fixable: 100 🔧 (Good enough formatting that no extra tools like [Prettier](https://github.com/prettier/prettier) are needed. [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier))
- Undefined: 66 ❌
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
| 22|[constructor-super](https://eslint.org/docs/rules/constructor-super)|✅ "error"|
| 23|[curly](https://eslint.org/docs/rules/curly)|🔧 "error"|
| 24|[default-case](https://eslint.org/docs/rules/default-case)|"error"|
| 25|[default-case-last](https://eslint.org/docs/rules/default-case-last)|"error"|
| 26|[default-param-last](https://eslint.org/docs/rules/default-param-last)|"error"|
| 27|[dot-location](https://eslint.org/docs/rules/dot-location)|🔧 ["error","property"]|
| 28|[dot-notation](https://eslint.org/docs/rules/dot-notation)|🔧 "error"|
| 29|[eol-last](https://eslint.org/docs/rules/eol-last)|🔧 ["error","always"]|
| 30|[eqeqeq](https://eslint.org/docs/rules/eqeqeq)|🔧 ["error","always"]|
| 31|[for-direction](https://eslint.org/docs/rules/for-direction)|✅ "error"|
| 32|[func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)|🔧 ["error","never"]|
| 33|[func-name-matching](https://eslint.org/docs/rules/func-name-matching)|"error"|
| 34|[func-names](https://eslint.org/docs/rules/func-names)|❌     |
| 35|[func-style](https://eslint.org/docs/rules/func-style)|❌     |
| 36|[function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline)|🔧 ["error","consistent"]|
| 37|[function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)|🔧 ["error","consistent"]|
| 38|[generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)|🔧 ["error",{"after":false,"before":true}]|
| 39|[getter-return](https://eslint.org/docs/rules/getter-return)|✅ "error"|
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
| 55|[logical-assignment-operators](https://eslint.org/docs/rules/logical-assignment-operators)|🔧 ❌|
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
| 72|[no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)|✅ "error"|
| 73|[no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)|❌     |
| 74|[no-bitwise](https://eslint.org/docs/rules/no-bitwise)|❌     |
| 75|[no-caller](https://eslint.org/docs/rules/no-caller)|"error"|
| 76|[no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)|✅ "error"|
| 77|[no-class-assign](https://eslint.org/docs/rules/no-class-assign)|✅ "error"|
| 78|[no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)|✅ "error"|
| 79|[no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)|✅ "error"|
| 80|[no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)|🔧 "error"|
| 81|[no-console](https://eslint.org/docs/rules/no-console)|"off"  |
| 82|[no-const-assign](https://eslint.org/docs/rules/no-const-assign)|✅ "error"|
| 83|[no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)|❌     |
| 84|[no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)|✅ "error"|
| 85|[no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)|"error"|
| 86|[no-continue](https://eslint.org/docs/rules/no-continue)|❌     |
| 87|[no-control-regex](https://eslint.org/docs/rules/no-control-regex)|✅ "error"|
| 88|[no-debugger](https://eslint.org/docs/rules/no-debugger)|✅ "error"|
| 89|[no-delete-var](https://eslint.org/docs/rules/no-delete-var)|✅ "error"|
| 90|[no-div-regex](https://eslint.org/docs/rules/no-div-regex)|🔧 "error"|
| 91|[no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)|✅ "error"|
| 92|[no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)|✅ "error"|
| 93|[no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)|✅ "error"|
| 94|[no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)|✅ "error"|
| 95|[no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)|✅ "error"|
| 96|[no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)|"error"|
| 97|[no-else-return](https://eslint.org/docs/rules/no-else-return)|🔧 "error"|
| 98|[no-empty](https://eslint.org/docs/rules/no-empty)|✅ "error"|
| 99|[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)|✅ "error"|
|100|[no-empty-function](https://eslint.org/docs/rules/no-empty-function)|❌     |
|101|[no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)|✅ "error"|
|102|[no-empty-static-block](https://eslint.org/docs/rules/no-empty-static-block)|❌     |
|103|[no-eq-null](https://eslint.org/docs/rules/no-eq-null)|"error"|
|104|[no-eval](https://eslint.org/docs/rules/no-eval)|"error"|
|105|[no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)|✅ "error"|
|106|[no-extend-native](https://eslint.org/docs/rules/no-extend-native)|"error"|
|107|[no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)|🔧 "error"|
|108|[no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)|✅ 🔧 "error"|
|109|[no-extra-label](https://eslint.org/docs/rules/no-extra-label)|🔧 "error"|
|110|[no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)|🔧 ❌|
|111|[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)|✅ 🔧 "error"|
|112|[no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)|✅ "error"|
|113|[no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)|🔧 "error"|
|114|[no-func-assign](https://eslint.org/docs/rules/no-func-assign)|✅ "error"|
|115|[no-global-assign](https://eslint.org/docs/rules/no-global-assign)|✅ "error"|
|116|[no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)|🔧 "error"|
|117|[no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)|❌     |
|118|[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)|"error"|
|119|[no-import-assign](https://eslint.org/docs/rules/no-import-assign)|✅ "error"|
|120|[no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)|"error"|
|121|[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)|✅ "error"|
|122|[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)|✅ "error"|
|123|[no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)|❌     |
|124|[no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)|✅ "error"|
|125|[no-iterator](https://eslint.org/docs/rules/no-iterator)|"error"|
|126|[no-label-var](https://eslint.org/docs/rules/no-label-var)|"error"|
|127|[no-labels](https://eslint.org/docs/rules/no-labels)|"error"|
|128|[no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)|"error"|
|129|[no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)|🔧 ❌|
|130|[no-loop-func](https://eslint.org/docs/rules/no-loop-func)|"error"|
|131|[no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)|✅ "error"|
|132|[no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)|❌     |
|133|[no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)|✅ "error"|
|134|[no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)|["error",{"groups":[["&&","\|\|"]]}]|
|135|[no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|✅ "error"|
|136|[no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)|"error"|
|137|[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)|🔧 "error"|
|138|[no-multi-str](https://eslint.org/docs/rules/no-multi-str)|"error"|
|139|[no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)|🔧 ["error",{"max":2,"maxBOF":1,"maxEOF":1}]|
|140|[no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)|"error"|
|141|[no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)|"warn" |
|142|[no-new](https://eslint.org/docs/rules/no-new)|❌     |
|143|[no-new-func](https://eslint.org/docs/rules/no-new-func)|❌     |
|144|[no-new-native-nonconstructor](https://eslint.org/docs/rules/no-new-native-nonconstructor)|❌     |
|145|[no-new-object](https://eslint.org/docs/rules/no-new-object)|"error"|
|146|[no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)|✅ "error"|
|147|[no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)|"error"|
|148|[no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)|✅ "error"|
|149|[no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)|✅ "error"|
|150|[no-octal](https://eslint.org/docs/rules/no-octal)|✅ "error"|
|151|[no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)|"error"|
|152|[no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)|"off"  |
|153|[no-plusplus](https://eslint.org/docs/rules/no-plusplus)|❌     |
|154|[no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)|"error"|
|155|[no-proto](https://eslint.org/docs/rules/no-proto)|"error"|
|156|[no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)|✅ "error"|
|157|[no-redeclare](https://eslint.org/docs/rules/no-redeclare)|✅ "error"|
|158|[no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)|✅ 🔧 "error"|
|159|[no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)|❌     |
|160|[no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)|["error","event","fdescribe","self"]|
|161|[no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)|❌     |
|162|[no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)|❌     |
|163|[no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)|❌     |
|164|[no-return-assign](https://eslint.org/docs/rules/no-return-assign)|"error"|
|165|[no-return-await](https://eslint.org/docs/rules/no-return-await)|"error"|
|166|[no-script-url](https://eslint.org/docs/rules/no-script-url)|❌     |
|167|[no-self-assign](https://eslint.org/docs/rules/no-self-assign)|✅ "error"|
|168|[no-self-compare](https://eslint.org/docs/rules/no-self-compare)|"error"|
|169|[no-sequences](https://eslint.org/docs/rules/no-sequences)|"error"|
|170|[no-setter-return](https://eslint.org/docs/rules/no-setter-return)|✅ "error"|
|171|[no-shadow](https://eslint.org/docs/rules/no-shadow)|"error"|
|172|[no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)|✅ "error"|
|173|[no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)|✅ "error"|
|174|[no-tabs](https://eslint.org/docs/rules/no-tabs)|"error"|
|175|[no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)|"error"|
|176|[no-ternary](https://eslint.org/docs/rules/no-ternary)|❌     |
|177|[no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)|✅ "error"|
|178|[no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)|"error"|
|179|[no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)|🔧 ["error"]|
|180|[no-undef](https://eslint.org/docs/rules/no-undef)|✅ "error"|
|181|[no-undef-init](https://eslint.org/docs/rules/no-undef-init)|🔧 "error"|
|182|[no-undefined](https://eslint.org/docs/rules/no-undefined)|"error"|
|183|[no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)|❌     |
|184|[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)|✅ "error"|
|185|[no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)|"error"|
|186|[no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)|🔧 "error"|
|187|[no-unreachable](https://eslint.org/docs/rules/no-unreachable)|✅ "error"|
|188|[no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)|"error"|
|189|[no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)|✅ "error"|
|190|[no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)|✅ "error"|
|191|[no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)|✅ "error"|
|192|[no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)|"error"|
|193|[no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)|✅ 🔧 "error"|
|194|[no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)|"error"|
|195|[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)|✅ ["error",{"args":"none","vars":"local"}]|
|196|[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)|❌     |
|197|[no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)|✅ "error"|
|198|[no-useless-call](https://eslint.org/docs/rules/no-useless-call)|❌     |
|199|[no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)|✅ "error"|
|200|[no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)|🔧 "error"|
|201|[no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)|"error"|
|202|[no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)|"error"|
|203|[no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)|✅ "error"|
|204|[no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)|🔧 "error"|
|205|[no-useless-return](https://eslint.org/docs/rules/no-useless-return)|🔧 "error"|
|206|[no-var](https://eslint.org/docs/rules/no-var)|🔧 ["warn"]|
|207|[no-void](https://eslint.org/docs/rules/no-void)|❌     |
|208|[no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)|❌     |
|209|[no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)|🔧 "error"|
|210|[no-with](https://eslint.org/docs/rules/no-with)|✅ "error"|
|211|[nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)|🔧 ❌|
|212|[object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)|🔧 ["error",{"ExportDeclaration":{"minProperties":3,"multiline":true},"ImportDeclaration":{"minProperties":3,"multiline":true},"ObjectExpression":{"consistent":true,"minProperties":1,"multiline":true},"ObjectPattern":{"minProperties":3,"multiline":true}}]|
|213|[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)|🔧 ["error","always"]|
|214|[object-property-newline](https://eslint.org/docs/rules/object-property-newline)|🔧 ["error",{"allowAllPropertiesOnSameLine":true}]|
|215|[object-shorthand](https://eslint.org/docs/rules/object-shorthand)|🔧 ❌|
|216|[one-var](https://eslint.org/docs/rules/one-var)|🔧 ["error","never"]|
|217|[one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)|🔧 ["error","always"]|
|218|[operator-assignment](https://eslint.org/docs/rules/operator-assignment)|🔧 ["error","always"]|
|219|[operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)|🔧 ["error","before"]|
|220|[padded-blocks](https://eslint.org/docs/rules/padded-blocks)|🔧 ❌|
|221|[padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)|🔧 ["error",{"blankLine":"always","next":"*","prev":"directive"},{"blankLine":"any","next":"directive","prev":"directive"},{"blankLine":"always","next":"function","prev":"*"},{"blankLine":"always","next":"block","prev":"*"}]|
|222|[prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)|🔧 ❌|
|223|[prefer-const](https://eslint.org/docs/rules/prefer-const)|🔧 "error"|
|224|[prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)|🔧 ❌|
|225|[prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)|🔧 ❌|
|226|[prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group)|❌     |
|227|[prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)|🔧 "error"|
|228|[prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)|🔧 ❌|
|229|[prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)|🔧 "error"|
|230|[prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)|❌     |
|231|[prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)|"error"|
|232|[prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)|❌     |
|233|[prefer-spread](https://eslint.org/docs/rules/prefer-spread)|❌     |
|234|[prefer-template](https://eslint.org/docs/rules/prefer-template)|🔧 "error"|
|235|[quote-props](https://eslint.org/docs/rules/quote-props)|🔧 ❌|
|236|[quotes](https://eslint.org/docs/rules/quotes)|🔧 ["error","single",{"avoidEscape":true}]|
|237|[radix](https://eslint.org/docs/rules/radix)|❌     |
|238|[require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)|"off"  |
|239|[require-await](https://eslint.org/docs/rules/require-await)|"error"|
|240|[require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)|❌     |
|241|[require-yield](https://eslint.org/docs/rules/require-yield)|✅ "error"|
|242|[rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)|🔧 ["error","always"]|
|243|[semi](https://eslint.org/docs/rules/semi)|🔧 ["error","always"]|
|244|[semi-spacing](https://eslint.org/docs/rules/semi-spacing)|🔧 ["error",{"after":true,"before":false}]|
|245|[semi-style](https://eslint.org/docs/rules/semi-style)|🔧 ["error","last"]|
|246|[sort-imports](https://eslint.org/docs/rules/sort-imports)|🔧 ❌|
|247|[sort-keys](https://eslint.org/docs/rules/sort-keys)|❌     |
|248|[sort-vars](https://eslint.org/docs/rules/sort-vars)|🔧 ❌|
|249|[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)|🔧 ["error","always"]|
|250|[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|🔧 ["error",{"anonymous":"never","asyncArrow":"always","named":"never"}]|
|251|[space-in-parens](https://eslint.org/docs/rules/space-in-parens)|🔧 "error"|
|252|[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)|🔧 ["error",{"int32Hint":false}]|
|253|[space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)|🔧 "error"|
|254|[spaced-comment](https://eslint.org/docs/rules/spaced-comment)|🔧 "error"|
|255|[strict](https://eslint.org/docs/rules/strict)|🔧 ❌|
|256|[switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)|🔧 "error"|
|257|[symbol-description](https://eslint.org/docs/rules/symbol-description)|"error"|
|258|[template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)|🔧 "error"|
|259|[template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)|🔧 "error"|
|260|[unicode-bom](https://eslint.org/docs/rules/unicode-bom)|🔧 "error"|
|261|[use-isnan](https://eslint.org/docs/rules/use-isnan)|✅ "error"|
|262|[valid-typeof](https://eslint.org/docs/rules/valid-typeof)|✅ "error"|
|263|[vars-on-top](https://eslint.org/docs/rules/vars-on-top)|❌     |
|264|[wrap-iife](https://eslint.org/docs/rules/wrap-iife)|🔧 ["error","inside"]|
|265|[wrap-regex](https://eslint.org/docs/rules/wrap-regex)|🔧 "error"|
|266|[yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)|🔧 "error"|
|267|[yoda](https://eslint.org/docs/rules/yoda)|🔧 "error"|

# Changelog
[CHANGELOG.md](CHANGELOG.md)