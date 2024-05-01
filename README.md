# eslint-config-plus
Eslint config plus = Eslint official recommended rules + most fixable and normal rules.  
[https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)

# Installation
```sh
npm install eslint-config-plus -D
```
# Usage
```js
// eslint.config.js
const plus = require('eslint-config-plus');
module.exports = [
    {
        rules: {
            ... plus.rules
        }
    }
];
```

# Rules
Base on [eslint@9.1.1](https://github.com/eslint/eslint) (2024/5/1)  
|   |Rules|Count|   |
|:-:|-----|----:|--:|
|   |All Eslint rules|  290|   |
|✔️|Defined in plus|  204|70.3%|
| ❌|Undefined|   86|29.7%|
| ✅|Recommended|   61|21.0%|
|🔧|Fixable|  105|36.2%|
|⚠️|Deprecated|   91|31.4%|

### Details  
|   |Rules|Type|Enabled|Value|
|--:|:----|:---|:------|:----|
|  1|[accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)|    |❌     |     |
|  2|[array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline)|🔧⚠️|✔️   |`["error","consistent"]`|
|  3|[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)|🔧⚠️|✔️   |`["error","never"]`|
|  4|[array-callback-return](https://eslint.org/docs/rules/array-callback-return)|    |❌     |     |
|  5|[array-element-newline](https://eslint.org/docs/rules/array-element-newline)|🔧⚠️|✔️   |`["error","consistent"]`|
|  6|[arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)|🔧|❌     |     |
|  7|[arrow-parens](https://eslint.org/docs/rules/arrow-parens)|🔧⚠️|✔️   |`["error","always"]`|
|  8|[arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)|🔧⚠️|✔️   |`"error"`|
|  9|[block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)|    |❌     |     |
| 10|[block-spacing](https://eslint.org/docs/rules/block-spacing)|🔧⚠️|✔️   |`"error"`|
| 11|[brace-style](https://eslint.org/docs/rules/brace-style)|🔧⚠️|✔️   |`"error"`|
| 12|[callback-return](https://eslint.org/docs/rules/callback-return)|⚠️|❌     |     |
| 13|[camelcase](https://eslint.org/docs/rules/camelcase)|    |❌     |     |
| 14|[capitalized-comments](https://eslint.org/docs/rules/capitalized-comments)|🔧|❌     |     |
| 15|[class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)|    |❌     |     |
| 16|[comma-dangle](https://eslint.org/docs/rules/comma-dangle)|🔧⚠️|✔️   |`["error","never"]`|
| 17|[comma-spacing](https://eslint.org/docs/rules/comma-spacing)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"after":true,"before":false}]`</details>|
| 18|[comma-style](https://eslint.org/docs/rules/comma-style)|🔧⚠️|✔️   |`["error","last"]`|
| 19|[complexity](https://eslint.org/docs/rules/complexity)|    |✔️   |`["error",8]`|
| 20|[computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)|🔧⚠️|✔️   |`["error","never"]`|
| 21|[consistent-return](https://eslint.org/docs/rules/consistent-return)|    |❌     |     |
| 22|[consistent-this](https://eslint.org/docs/rules/consistent-this)|    |❌     |     |
| 23|[constructor-super](https://eslint.org/docs/rules/constructor-super)|✅  |✔️   |`"error"`|
| 24|[curly](https://eslint.org/docs/rules/curly)|🔧|✔️   |`"error"`|
| 25|[default-case](https://eslint.org/docs/rules/default-case)|    |✔️   |`"error"`|
| 26|[default-case-last](https://eslint.org/docs/rules/default-case-last)|    |✔️   |`"error"`|
| 27|[default-param-last](https://eslint.org/docs/rules/default-param-last)|    |✔️   |`"error"`|
| 28|[dot-location](https://eslint.org/docs/rules/dot-location)|🔧⚠️|✔️   |`["error","property"]`|
| 29|[dot-notation](https://eslint.org/docs/rules/dot-notation)|🔧|✔️   |`"error"`|
| 30|[eol-last](https://eslint.org/docs/rules/eol-last)|🔧⚠️|✔️   |`["error","always"]`|
| 31|[eqeqeq](https://eslint.org/docs/rules/eqeqeq)|🔧|✔️   |`["error","always"]`|
| 32|[for-direction](https://eslint.org/docs/rules/for-direction)|✅  |✔️   |`"error"`|
| 33|[func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)|🔧⚠️|✔️   |`["error","never"]`|
| 34|[func-name-matching](https://eslint.org/docs/rules/func-name-matching)|    |✔️   |`"error"`|
| 35|[func-names](https://eslint.org/docs/rules/func-names)|    |❌     |     |
| 36|[func-style](https://eslint.org/docs/rules/func-style)|    |❌     |     |
| 37|[function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline)|🔧⚠️|✔️   |`["error","consistent"]`|
| 38|[function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)|🔧⚠️|✔️   |`["error","consistent"]`|
| 39|[generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"after":false,"before":true}]`</details>|
| 40|[getter-return](https://eslint.org/docs/rules/getter-return)|✅  |✔️   |`"error"`|
| 41|[global-require](https://eslint.org/docs/rules/global-require)|⚠️|❌     |     |
| 42|[grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)|    |❌     |     |
| 43|[guard-for-in](https://eslint.org/docs/rules/guard-for-in)|    |❌     |     |
| 44|[handle-callback-err](https://eslint.org/docs/rules/handle-callback-err)|⚠️|❌     |     |
| 45|[id-blacklist](https://eslint.org/docs/rules/id-blacklist)|⚠️|❌     |     |
| 46|[id-denylist](https://eslint.org/docs/rules/id-denylist)|    |❌     |     |
| 47|[id-length](https://eslint.org/docs/rules/id-length)|    |❌     |     |
| 48|[id-match](https://eslint.org/docs/rules/id-match)|    |❌     |     |
| 49|[implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak)|🔧⚠️|✔️   |`["error","beside"]`|
| 50|[indent](https://eslint.org/docs/rules/indent)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",4,{"ArrayExpression":"first","ObjectExpression":1,"SwitchCase":1}]`</details>|
| 51|[indent-legacy](https://eslint.org/docs/rules/indent-legacy)|🔧⚠️|❌     |     |
| 52|[init-declarations](https://eslint.org/docs/rules/init-declarations)|    |❌     |     |
| 53|[jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)|🔧⚠️|✔️   |`["error","prefer-double"]`|
| 54|[key-spacing](https://eslint.org/docs/rules/key-spacing)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"afterColon":true,"mode":"strict"}]`</details>|
| 55|[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"after":true,"before":true}]`</details>|
| 56|[line-comment-position](https://eslint.org/docs/rules/line-comment-position)|    |✔️   |`["error",{"position":"above"}]`|
| 57|[linebreak-style](https://eslint.org/docs/rules/linebreak-style)|🔧⚠️|❌     |     |
| 58|[lines-around-comment](https://eslint.org/docs/rules/lines-around-comment)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"beforeBlockComment":true}]`</details>|
| 59|[lines-around-directive](https://eslint.org/docs/rules/lines-around-directive)|🔧⚠️|❌     |     |
| 60|[lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error","always",{"exceptAfterSingleLine":true}]`</details>|
| 61|[logical-assignment-operators](https://eslint.org/docs/rules/logical-assignment-operators)|🔧|❌     |     |
| 62|[max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)|    |✔️   |`"error"`|
| 63|[max-depth](https://eslint.org/docs/rules/max-depth)|    |✔️   |`["error",5]`|
| 64|[max-len](https://eslint.org/docs/rules/max-len)|⚠️|✔️   |<details><summary>Details</summary>`["error",{"code":550,"ignoreStrings":true,"ignoreTrailingComments":true}]`</details>|
| 65|[max-lines](https://eslint.org/docs/rules/max-lines)|    |✔️   |`["error",3000]`|
| 66|[max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)|    |✔️   |`["error",300]`|
| 67|[max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)|    |✔️   |`["error",5]`|
| 68|[max-params](https://eslint.org/docs/rules/max-params)|    |✔️   |`["error",8]`|
| 69|[max-statements](https://eslint.org/docs/rules/max-statements)|    |✔️   |`["error",50]`|
| 70|[max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line)|⚠️|✔️   |`["error",{"max":3}]`|
| 71|[multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style)|🔧|❌     |     |
| 72|[multiline-ternary](https://eslint.org/docs/rules/multiline-ternary)|🔧⚠️|✔️   |`["error","never"]`|
| 73|[new-cap](https://eslint.org/docs/rules/new-cap)|    |✔️   |<details><summary>Details</summary>`["error",{"capIsNew":false,"newIsCap":true,"properties":true}]`</details>|
| 74|[new-parens](https://eslint.org/docs/rules/new-parens)|🔧⚠️|✔️   |`"error"`|
| 75|[newline-after-var](https://eslint.org/docs/rules/newline-after-var)|🔧⚠️|❌     |     |
| 76|[newline-before-return](https://eslint.org/docs/rules/newline-before-return)|🔧⚠️|❌     |     |
| 77|[newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call)|🔧⚠️|❌     |     |
| 78|[no-alert](https://eslint.org/docs/rules/no-alert)|    |✔️   |`"error"`|
| 79|[no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)|    |✔️   |`"error"`|
| 80|[no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)|✅  |✔️   |`"error"`|
| 81|[no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)|    |❌     |     |
| 82|[no-bitwise](https://eslint.org/docs/rules/no-bitwise)|    |❌     |     |
| 83|[no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)|⚠️|❌     |     |
| 84|[no-caller](https://eslint.org/docs/rules/no-caller)|    |✔️   |`"error"`|
| 85|[no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)|✅  |✔️   |`"error"`|
| 86|[no-catch-shadow](https://eslint.org/docs/rules/no-catch-shadow)|⚠️|❌     |     |
| 87|[no-class-assign](https://eslint.org/docs/rules/no-class-assign)|✅  |✔️   |`"error"`|
| 88|[no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)|✅  |✔️   |`"error"`|
| 89|[no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)|✅  |✔️   |`"error"`|
| 90|[no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)|🔧⚠️|✔️   |`"error"`|
| 91|[no-console](https://eslint.org/docs/rules/no-console)|    |✔️   |`"off"`|
| 92|[no-const-assign](https://eslint.org/docs/rules/no-const-assign)|✅  |✔️   |`"error"`|
| 93|[no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)|✅  |✔️   |`"error"`|
| 94|[no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)|✅  |✔️   |`"error"`|
| 95|[no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)|    |✔️   |`"error"`|
| 96|[no-continue](https://eslint.org/docs/rules/no-continue)|    |❌     |     |
| 97|[no-control-regex](https://eslint.org/docs/rules/no-control-regex)|✅  |✔️   |`"error"`|
| 98|[no-debugger](https://eslint.org/docs/rules/no-debugger)|✅  |✔️   |`"warn"`|
| 99|[no-delete-var](https://eslint.org/docs/rules/no-delete-var)|✅  |✔️   |`"error"`|
|100|[no-div-regex](https://eslint.org/docs/rules/no-div-regex)|🔧|✔️   |`"error"`|
|101|[no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)|✅  |✔️   |`"error"`|
|102|[no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)|✅  |✔️   |`"error"`|
|103|[no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)|✅  |✔️   |`"error"`|
|104|[no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)|✅  |✔️   |`"error"`|
|105|[no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)|✅  |✔️   |`"error"`|
|106|[no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)|    |✔️   |`"error"`|
|107|[no-else-return](https://eslint.org/docs/rules/no-else-return)|🔧|✔️   |`"error"`|
|108|[no-empty](https://eslint.org/docs/rules/no-empty)|✅  |✔️   |`"error"`|
|109|[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)|✅  |✔️   |`"error"`|
|110|[no-empty-function](https://eslint.org/docs/rules/no-empty-function)|    |❌     |     |
|111|[no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)|✅  |✔️   |`"error"`|
|112|[no-empty-static-block](https://eslint.org/docs/rules/no-empty-static-block)|✅  |✔️   |`"error"`|
|113|[no-eq-null](https://eslint.org/docs/rules/no-eq-null)|    |✔️   |`"error"`|
|114|[no-eval](https://eslint.org/docs/rules/no-eval)|    |✔️   |`"error"`|
|115|[no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)|✅  |✔️   |`"error"`|
|116|[no-extend-native](https://eslint.org/docs/rules/no-extend-native)|    |✔️   |`"error"`|
|117|[no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)|🔧|✔️   |`"error"`|
|118|[no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)|✅🔧|✔️   |`"error"`|
|119|[no-extra-label](https://eslint.org/docs/rules/no-extra-label)|🔧|✔️   |`"error"`|
|120|[no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)|🔧⚠️|❌     |     |
|121|[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)|🔧⚠️|✔️   |`"error"`|
|122|[no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)|✅  |✔️   |`"error"`|
|123|[no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)|🔧⚠️|✔️   |`"error"`|
|124|[no-func-assign](https://eslint.org/docs/rules/no-func-assign)|✅  |✔️   |`"error"`|
|125|[no-global-assign](https://eslint.org/docs/rules/no-global-assign)|✅  |✔️   |`"error"`|
|126|[no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)|🔧|✔️   |`"error"`|
|127|[no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)|    |❌     |     |
|128|[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)|    |✔️   |`"error"`|
|129|[no-import-assign](https://eslint.org/docs/rules/no-import-assign)|✅  |✔️   |`"error"`|
|130|[no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)|    |✔️   |`"error"`|
|131|[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)|    |✔️   |`"error"`|
|132|[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)|✅  |✔️   |`"error"`|
|133|[no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)|    |❌     |     |
|134|[no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)|✅  |✔️   |`"error"`|
|135|[no-iterator](https://eslint.org/docs/rules/no-iterator)|    |✔️   |`"error"`|
|136|[no-label-var](https://eslint.org/docs/rules/no-label-var)|    |✔️   |`"error"`|
|137|[no-labels](https://eslint.org/docs/rules/no-labels)|    |✔️   |`"error"`|
|138|[no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)|    |✔️   |`"error"`|
|139|[no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)|🔧|❌     |     |
|140|[no-loop-func](https://eslint.org/docs/rules/no-loop-func)|    |✔️   |`"error"`|
|141|[no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)|✅  |✔️   |`"error"`|
|142|[no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)|    |❌     |     |
|143|[no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)|✅  |✔️   |`"error"`|
|144|[no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)|⚠️|✔️   |`["error",{"groups":[["&&","\|\|"]]}]`|
|145|[no-mixed-requires](https://eslint.org/docs/rules/no-mixed-requires)|⚠️|❌     |     |
|146|[no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|⚠️|✔️   |`"error"`|
|147|[no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)|    |✔️   |`"error"`|
|148|[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)|🔧⚠️|✔️   |`"error"`|
|149|[no-multi-str](https://eslint.org/docs/rules/no-multi-str)|    |✔️   |`"error"`|
|150|[no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"max":2,"maxBOF":1,"maxEOF":1}]`</details>|
|151|[no-native-reassign](https://eslint.org/docs/rules/no-native-reassign)|⚠️|❌     |     |
|152|[no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)|    |✔️   |`"error"`|
|153|[no-negated-in-lhs](https://eslint.org/docs/rules/no-negated-in-lhs)|⚠️|❌     |     |
|154|[no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)|    |✔️   |`"warn"`|
|155|[no-new](https://eslint.org/docs/rules/no-new)|    |❌     |     |
|156|[no-new-func](https://eslint.org/docs/rules/no-new-func)|    |❌     |     |
|157|[no-new-native-nonconstructor](https://eslint.org/docs/rules/no-new-native-nonconstructor)|✅  |✔️   |`"error"`|
|158|[no-new-object](https://eslint.org/docs/rules/no-new-object)|⚠️|✔️   |`"error"`|
|159|[no-new-require](https://eslint.org/docs/rules/no-new-require)|⚠️|❌     |     |
|160|[no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)|⚠️|✔️   |`"error"`|
|161|[no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)|    |✔️   |`"error"`|
|162|[no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)|✅  |✔️   |`"error"`|
|163|[no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)|✅  |✔️   |`"error"`|
|164|[no-object-constructor](https://eslint.org/docs/rules/no-object-constructor)|    |❌     |     |
|165|[no-octal](https://eslint.org/docs/rules/no-octal)|✅  |✔️   |`"error"`|
|166|[no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)|    |✔️   |`"error"`|
|167|[no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)|    |✔️   |`"off"`|
|168|[no-path-concat](https://eslint.org/docs/rules/no-path-concat)|⚠️|❌     |     |
|169|[no-plusplus](https://eslint.org/docs/rules/no-plusplus)|    |❌     |     |
|170|[no-process-env](https://eslint.org/docs/rules/no-process-env)|⚠️|❌     |     |
|171|[no-process-exit](https://eslint.org/docs/rules/no-process-exit)|⚠️|❌     |     |
|172|[no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)|    |✔️   |`"error"`|
|173|[no-proto](https://eslint.org/docs/rules/no-proto)|    |✔️   |`"error"`|
|174|[no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)|✅  |✔️   |`"error"`|
|175|[no-redeclare](https://eslint.org/docs/rules/no-redeclare)|✅  |✔️   |`"error"`|
|176|[no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)|✅🔧|✔️   |`"error"`|
|177|[no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)|    |❌     |     |
|178|[no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)|    |✔️   |<details><summary>Details</summary>`["error","event","fdescribe","self"]`</details>|
|179|[no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)|    |❌     |     |
|180|[no-restricted-modules](https://eslint.org/docs/rules/no-restricted-modules)|⚠️|❌     |     |
|181|[no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)|    |❌     |     |
|182|[no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)|    |❌     |     |
|183|[no-return-assign](https://eslint.org/docs/rules/no-return-assign)|    |✔️   |`"error"`|
|184|[no-return-await](https://eslint.org/docs/rules/no-return-await)|⚠️|✔️   |`"error"`|
|185|[no-script-url](https://eslint.org/docs/rules/no-script-url)|    |❌     |     |
|186|[no-self-assign](https://eslint.org/docs/rules/no-self-assign)|✅  |✔️   |`"error"`|
|187|[no-self-compare](https://eslint.org/docs/rules/no-self-compare)|    |✔️   |`"error"`|
|188|[no-sequences](https://eslint.org/docs/rules/no-sequences)|    |✔️   |`"error"`|
|189|[no-setter-return](https://eslint.org/docs/rules/no-setter-return)|✅  |✔️   |`"error"`|
|190|[no-shadow](https://eslint.org/docs/rules/no-shadow)|    |✔️   |`"error"`|
|191|[no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)|✅  |✔️   |`"error"`|
|192|[no-spaced-func](https://eslint.org/docs/rules/no-spaced-func)|🔧⚠️|❌     |     |
|193|[no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)|✅  |✔️   |`"error"`|
|194|[no-sync](https://eslint.org/docs/rules/no-sync)|⚠️|❌     |     |
|195|[no-tabs](https://eslint.org/docs/rules/no-tabs)|⚠️|✔️   |`"error"`|
|196|[no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)|    |✔️   |`"error"`|
|197|[no-ternary](https://eslint.org/docs/rules/no-ternary)|    |❌     |     |
|198|[no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)|✅  |✔️   |`"error"`|
|199|[no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)|    |✔️   |`"error"`|
|200|[no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)|🔧⚠️|✔️   |`["error"]`|
|201|[no-undef](https://eslint.org/docs/rules/no-undef)|✅  |✔️   |`"error"`|
|202|[no-undef-init](https://eslint.org/docs/rules/no-undef-init)|🔧|✔️   |`"error"`|
|203|[no-undefined](https://eslint.org/docs/rules/no-undefined)|    |✔️   |`"error"`|
|204|[no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)|    |❌     |     |
|205|[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)|✅  |✔️   |`"error"`|
|206|[no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)|    |✔️   |`"error"`|
|207|[no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)|🔧|✔️   |`"error"`|
|208|[no-unreachable](https://eslint.org/docs/rules/no-unreachable)|✅  |✔️   |`"error"`|
|209|[no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)|    |✔️   |`"error"`|
|210|[no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)|✅  |✔️   |`"error"`|
|211|[no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)|✅  |✔️   |`"error"`|
|212|[no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)|✅  |✔️   |`"error"`|
|213|[no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)|    |✔️   |`"error"`|
|214|[no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)|✅🔧|✔️   |`"error"`|
|215|[no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)|✅  |✔️   |`"error"`|
|216|[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)|✅  |✔️   |<details><summary>Details</summary>`["error",{"args":"none","vars":"local"}]`</details>|
|217|[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)|    |❌     |     |
|218|[no-useless-assignment](https://eslint.org/docs/rules/no-useless-assignment)|    |❌     |     |
|219|[no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)|✅  |✔️   |`"error"`|
|220|[no-useless-call](https://eslint.org/docs/rules/no-useless-call)|    |❌     |     |
|221|[no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)|✅  |✔️   |`"error"`|
|222|[no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)|🔧|✔️   |`"error"`|
|223|[no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)|    |✔️   |`"error"`|
|224|[no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)|    |✔️   |`"error"`|
|225|[no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)|✅  |✔️   |`"error"`|
|226|[no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)|🔧|✔️   |`"error"`|
|227|[no-useless-return](https://eslint.org/docs/rules/no-useless-return)|🔧|✔️   |`"error"`|
|228|[no-var](https://eslint.org/docs/rules/no-var)|🔧|✔️   |`["warn"]`|
|229|[no-void](https://eslint.org/docs/rules/no-void)|    |❌     |     |
|230|[no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)|    |❌     |     |
|231|[no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)|🔧⚠️|✔️   |`"error"`|
|232|[no-with](https://eslint.org/docs/rules/no-with)|✅  |✔️   |`"error"`|
|233|[nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)|🔧⚠️|❌     |     |
|234|[object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"ExportDeclaration":{"minProperties":3,"multiline":true},"ImportDeclaration":{"minProperties":3,"multiline":true},"ObjectExpression":{"consistent":true,"minProperties":1,"multiline":true},"ObjectPattern":{"minProperties":3,"multiline":true}}]`</details>|
|235|[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)|🔧⚠️|✔️   |`["error","always"]`|
|236|[object-property-newline](https://eslint.org/docs/rules/object-property-newline)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"allowAllPropertiesOnSameLine":true}]`</details>|
|237|[object-shorthand](https://eslint.org/docs/rules/object-shorthand)|🔧|❌     |     |
|238|[one-var](https://eslint.org/docs/rules/one-var)|🔧|✔️   |`["error","never"]`|
|239|[one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)|🔧⚠️|✔️   |`["error","always"]`|
|240|[operator-assignment](https://eslint.org/docs/rules/operator-assignment)|🔧|✔️   |`["error","always"]`|
|241|[operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)|🔧⚠️|✔️   |`["error","before"]`|
|242|[padded-blocks](https://eslint.org/docs/rules/padded-blocks)|🔧⚠️|❌     |     |
|243|[padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"blankLine":"always","next":"*","prev":"directive"},{"blankLine":"any","next":"directive","prev":"directive"},{"blankLine":"always","next":"function","prev":"*"},{"blankLine":"always","next":"block","prev":"*"}]`</details>|
|244|[prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)|🔧|❌     |     |
|245|[prefer-const](https://eslint.org/docs/rules/prefer-const)|🔧|✔️   |`"error"`|
|246|[prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)|🔧|❌     |     |
|247|[prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)|🔧|❌     |     |
|248|[prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group)|    |❌     |     |
|249|[prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)|🔧|✔️   |`"error"`|
|250|[prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)|🔧|❌     |     |
|251|[prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)|🔧|✔️   |`"error"`|
|252|[prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)|    |❌     |     |
|253|[prefer-reflect](https://eslint.org/docs/rules/prefer-reflect)|⚠️|❌     |     |
|254|[prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)|    |✔️   |`"error"`|
|255|[prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)|    |❌     |     |
|256|[prefer-spread](https://eslint.org/docs/rules/prefer-spread)|    |❌     |     |
|257|[prefer-template](https://eslint.org/docs/rules/prefer-template)|🔧|✔️   |`"error"`|
|258|[quote-props](https://eslint.org/docs/rules/quote-props)|🔧⚠️|❌     |     |
|259|[quotes](https://eslint.org/docs/rules/quotes)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error","single",{"avoidEscape":true}]`</details>|
|260|[radix](https://eslint.org/docs/rules/radix)|    |❌     |     |
|261|[require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)|    |✔️   |`"off"`|
|262|[require-await](https://eslint.org/docs/rules/require-await)|    |✔️   |`"error"`|
|263|[require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)|    |❌     |     |
|264|[require-yield](https://eslint.org/docs/rules/require-yield)|✅  |✔️   |`"error"`|
|265|[rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)|🔧⚠️|✔️   |`["error","always"]`|
|266|[semi](https://eslint.org/docs/rules/semi)|🔧⚠️|✔️   |`["error","always"]`|
|267|[semi-spacing](https://eslint.org/docs/rules/semi-spacing)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"after":true,"before":false}]`</details>|
|268|[semi-style](https://eslint.org/docs/rules/semi-style)|🔧⚠️|✔️   |`["error","last"]`|
|269|[sort-imports](https://eslint.org/docs/rules/sort-imports)|🔧|❌     |     |
|270|[sort-keys](https://eslint.org/docs/rules/sort-keys)|    |❌     |     |
|271|[sort-vars](https://eslint.org/docs/rules/sort-vars)|🔧|❌     |     |
|272|[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)|🔧⚠️|✔️   |`["error","always"]`|
|273|[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|🔧⚠️|✔️   |<details><summary>Details</summary>`["error",{"anonymous":"never","asyncArrow":"always","named":"never"}]`</details>|
|274|[space-in-parens](https://eslint.org/docs/rules/space-in-parens)|🔧⚠️|✔️   |`"error"`|
|275|[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)|🔧⚠️|✔️   |`["error",{"int32Hint":false}]`|
|276|[space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)|🔧⚠️|✔️   |`"error"`|
|277|[spaced-comment](https://eslint.org/docs/rules/spaced-comment)|🔧⚠️|✔️   |`"error"`|
|278|[strict](https://eslint.org/docs/rules/strict)|🔧|❌     |     |
|279|[switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)|🔧⚠️|✔️   |`"error"`|
|280|[symbol-description](https://eslint.org/docs/rules/symbol-description)|    |✔️   |`"error"`|
|281|[template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)|🔧⚠️|✔️   |`"error"`|
|282|[template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)|🔧⚠️|✔️   |`"error"`|
|283|[unicode-bom](https://eslint.org/docs/rules/unicode-bom)|🔧|✔️   |`"error"`|
|284|[use-isnan](https://eslint.org/docs/rules/use-isnan)|✅  |✔️   |`"error"`|
|285|[valid-typeof](https://eslint.org/docs/rules/valid-typeof)|✅  |✔️   |`"error"`|
|286|[vars-on-top](https://eslint.org/docs/rules/vars-on-top)|    |❌     |     |
|287|[wrap-iife](https://eslint.org/docs/rules/wrap-iife)|🔧⚠️|✔️   |`["error","inside"]`|
|288|[wrap-regex](https://eslint.org/docs/rules/wrap-regex)|🔧⚠️|✔️   |`"error"`|
|289|[yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)|🔧⚠️|✔️   |`"error"`|
|290|[yoda](https://eslint.org/docs/rules/yoda)|🔧|✔️   |`"error"`|

# Changelog
[CHANGELOG.md](CHANGELOG.md)