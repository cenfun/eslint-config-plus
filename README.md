# eslint-config-plus
Eslint config plus base on official recommended rules + most fixable and normal rules.  
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

## Rules (2022/5/17)
Recommended: ✓  Fixable: 🔧  
|   |Name                             |  |  |Plus      
|--:|---------------------------------|--|--|----------
|  1|[accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)|  |  |          
|  2|[array-bracket-newline](https://eslint.org/docs/rules/array-bracket-newline)|  |🔧|["error","consistent"]
|  3|[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)|  |🔧|["error","never"]
|  4|[array-callback-return](https://eslint.org/docs/rules/array-callback-return)|  |  |          
|  5|[array-element-newline](https://eslint.org/docs/rules/array-element-newline)|  |🔧|["error","consistent"]
|  6|[arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)|  |🔧|          
|  7|[arrow-parens](https://eslint.org/docs/rules/arrow-parens)|  |🔧|["error","always"]
|  8|[arrow-spacing](https://eslint.org/docs/rules/arrow-spacing)|  |🔧|"error"   
|  9|[block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)|  |  |          
| 10|[block-spacing](https://eslint.org/docs/rules/block-spacing)|  |🔧|"error"   
| 11|[brace-style](https://eslint.org/docs/rules/brace-style)|  |🔧|"error"   
| 12|[callback-return](https://eslint.org/docs/rules/callback-return)|  |  |          
| 13|[camelcase](https://eslint.org/docs/rules/camelcase)|  |  |          
| 14|[capitalized-comments](https://eslint.org/docs/rules/capitalized-comments)|  |🔧|          
| 15|[class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)|  |  |          
| 16|[comma-dangle](https://eslint.org/docs/rules/comma-dangle)|  |🔧|["error","never"]
| 17|[comma-spacing](https://eslint.org/docs/rules/comma-spacing)|  |🔧|["error",{"after":true,"before":false}]
| 18|[comma-style](https://eslint.org/docs/rules/comma-style)|  |🔧|["error","last"]
| 19|[complexity](https://eslint.org/docs/rules/complexity)|  |  |["error",8]
| 20|[computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)|  |🔧|["error","never"]
| 21|[consistent-return](https://eslint.org/docs/rules/consistent-return)|  |  |          
| 22|[consistent-this](https://eslint.org/docs/rules/consistent-this)|  |  |          
| 23|[constructor-super](https://eslint.org/docs/rules/constructor-super)|✓ |  |✓         
| 24|[curly](https://eslint.org/docs/rules/curly)|  |🔧|"error"   
| 25|[default-case](https://eslint.org/docs/rules/default-case)|  |  |"error"   
| 26|[default-case-last](https://eslint.org/docs/rules/default-case-last)|  |  |"error"   
| 27|[default-param-last](https://eslint.org/docs/rules/default-param-last)|  |  |"error"   
| 28|[dot-location](https://eslint.org/docs/rules/dot-location)|  |🔧|["error","property"]
| 29|[dot-notation](https://eslint.org/docs/rules/dot-notation)|  |🔧|"error"   
| 30|[eol-last](https://eslint.org/docs/rules/eol-last)|  |🔧|["error","always"]
| 31|[eqeqeq](https://eslint.org/docs/rules/eqeqeq)|  |🔧|["error","always"]
| 32|[for-direction](https://eslint.org/docs/rules/for-direction)|✓ |  |✓         
| 33|[func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)|  |🔧|["error","never"]
| 34|[func-name-matching](https://eslint.org/docs/rules/func-name-matching)|  |  |"error"   
| 35|[func-names](https://eslint.org/docs/rules/func-names)|  |  |          
| 36|[func-style](https://eslint.org/docs/rules/func-style)|  |  |          
| 37|[function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline)|  |🔧|["error","consistent"]
| 38|[function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)|  |🔧|["error","consistent"]
| 39|[generator-star](https://eslint.org/docs/rules/generator-star)|  |  |          
| 40|[generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)|  |🔧|["error",{"after":false,"before":true}]
| 41|[getter-return](https://eslint.org/docs/rules/getter-return)|✓ |  |✓         
| 42|[global-require](https://eslint.org/docs/rules/global-require)|  |  |          
| 43|[global-strict](https://eslint.org/docs/rules/global-strict)|  |  |          
| 44|[grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)|  |  |          
| 45|[guard-for-in](https://eslint.org/docs/rules/guard-for-in)|  |  |          
| 46|[handle-callback-err](https://eslint.org/docs/rules/handle-callback-err)|  |  |          
| 47|[id-blacklist](https://eslint.org/docs/rules/id-blacklist)|  |  |          
| 48|[id-denylist](https://eslint.org/docs/rules/id-denylist)|  |  |          
| 49|[id-length](https://eslint.org/docs/rules/id-length)|  |  |          
| 50|[id-match](https://eslint.org/docs/rules/id-match)|  |  |          
| 51|[implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak)|  |🔧|["error","beside"]
| 52|[indent](https://eslint.org/docs/rules/indent)|  |🔧|["error",4,{"ArrayExpression":"first","ObjectExpression":1,"SwitchCase":1}]
| 53|[indent-legacy](https://eslint.org/docs/rules/indent-legacy)|  |  |          
| 54|[init-declarations](https://eslint.org/docs/rules/init-declarations)|  |  |          
| 55|[jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)|  |🔧|["error","prefer-double"]
| 56|[key-spacing](https://eslint.org/docs/rules/key-spacing)|  |🔧|["error",{"afterColon":true,"mode":"strict"}]
| 57|[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)|  |🔧|["error",{"after":true,"before":true}]
| 58|[line-comment-position](https://eslint.org/docs/rules/line-comment-position)|  |  |["error",{"position":"above"}]
| 59|[linebreak-style](https://eslint.org/docs/rules/linebreak-style)|  |🔧|          
| 60|[lines-around-comment](https://eslint.org/docs/rules/lines-around-comment)|  |🔧|["error",{"beforeBlockComment":true}]
| 61|[lines-around-directive](https://eslint.org/docs/rules/lines-around-directive)|  |  |          
| 62|[lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)|  |🔧|["error","always",{"exceptAfterSingleLine":true}]
| 63|[max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)|  |  |"error"   
| 64|[max-depth](https://eslint.org/docs/rules/max-depth)|  |  |["error",5]
| 65|[max-len](https://eslint.org/docs/rules/max-len)|  |  |["error",{"code":550,"ignoreStrings":true,"ignoreTrailingComments":true}]
| 66|[max-lines](https://eslint.org/docs/rules/max-lines)|  |  |["error",3000]
| 67|[max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)|  |  |["error",300]
| 68|[max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)|  |  |["error",5]
| 69|[max-params](https://eslint.org/docs/rules/max-params)|  |  |["error",8]
| 70|[max-statements](https://eslint.org/docs/rules/max-statements)|  |  |["error",50]
| 71|[max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line)|  |  |["error",{"max":3}]
| 72|[multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style)|  |🔧|          
| 73|[multiline-ternary](https://eslint.org/docs/rules/multiline-ternary)|  |🔧|["error","never"]
| 74|[new-cap](https://eslint.org/docs/rules/new-cap)|  |  |["error",{"capIsNew":false,"newIsCap":true,"properties":true}]
| 75|[new-parens](https://eslint.org/docs/rules/new-parens)|  |🔧|"error"   
| 76|[newline-after-var](https://eslint.org/docs/rules/newline-after-var)|  |  |          
| 77|[newline-before-return](https://eslint.org/docs/rules/newline-before-return)|  |  |          
| 78|[newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call)|  |🔧|          
| 79|[no-alert](https://eslint.org/docs/rules/no-alert)|  |  |"error"   
| 80|[no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)|  |  |"error"   
| 81|[no-arrow-condition](https://eslint.org/docs/rules/no-arrow-condition)|  |  |          
| 82|[no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)|✓ |  |✓         
| 83|[no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)|  |  |          
| 84|[no-bitwise](https://eslint.org/docs/rules/no-bitwise)|  |  |          
| 85|[no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)|  |  |          
| 86|[no-caller](https://eslint.org/docs/rules/no-caller)|  |  |"error"   
| 87|[no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)|✓ |  |✓         
| 88|[no-catch-shadow](https://eslint.org/docs/rules/no-catch-shadow)|  |  |          
| 89|[no-class-assign](https://eslint.org/docs/rules/no-class-assign)|✓ |  |✓         
| 90|[no-comma-dangle](https://eslint.org/docs/rules/no-comma-dangle)|  |  |          
| 91|[no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)|✓ |  |✓         
| 92|[no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)|✓ |  |✓         
| 93|[no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)|  |🔧|"error"   
| 94|[no-console](https://eslint.org/docs/rules/no-console)|  |  |"off"     
| 95|[no-const-assign](https://eslint.org/docs/rules/no-const-assign)|✓ |  |✓         
| 96|[no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)|  |  |          
| 97|[no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)|✓ |  |✓         
| 98|[no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)|  |  |"error"   
| 99|[no-continue](https://eslint.org/docs/rules/no-continue)|  |  |          
|100|[no-control-regex](https://eslint.org/docs/rules/no-control-regex)|✓ |  |✓         
|101|[no-debugger](https://eslint.org/docs/rules/no-debugger)|✓ |  |✓         
|102|[no-delete-var](https://eslint.org/docs/rules/no-delete-var)|✓ |  |✓         
|103|[no-div-regex](https://eslint.org/docs/rules/no-div-regex)|  |🔧|"error"   
|104|[no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)|✓ |  |✓         
|105|[no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)|✓ |  |✓         
|106|[no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)|✓ |  |✓         
|107|[no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)|✓ |  |✓         
|108|[no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)|✓ |  |✓         
|109|[no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)|  |  |"error"   
|110|[no-else-return](https://eslint.org/docs/rules/no-else-return)|  |🔧|"error"   
|111|[no-empty](https://eslint.org/docs/rules/no-empty)|✓ |  |✓         
|112|[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)|✓ |  |✓         
|113|[no-empty-class](https://eslint.org/docs/rules/no-empty-class)|  |  |          
|114|[no-empty-function](https://eslint.org/docs/rules/no-empty-function)|  |  |          
|115|[no-empty-label](https://eslint.org/docs/rules/no-empty-label)|  |  |          
|116|[no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)|✓ |  |✓         
|117|[no-eq-null](https://eslint.org/docs/rules/no-eq-null)|  |  |"error"   
|118|[no-eval](https://eslint.org/docs/rules/no-eval)|  |  |"error"   
|119|[no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)|✓ |  |✓         
|120|[no-extend-native](https://eslint.org/docs/rules/no-extend-native)|  |  |"error"   
|121|[no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)|  |🔧|"error"   
|122|[no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)|✓ |🔧|✓         
|123|[no-extra-label](https://eslint.org/docs/rules/no-extra-label)|  |🔧|"error"   
|124|[no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)|  |🔧|"error"   
|125|[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)|✓ |🔧|✓         
|126|[no-extra-strict](https://eslint.org/docs/rules/no-extra-strict)|  |  |          
|127|[no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)|✓ |  |✓         
|128|[no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)|  |🔧|"error"   
|129|[no-func-assign](https://eslint.org/docs/rules/no-func-assign)|✓ |  |✓         
|130|[no-global-assign](https://eslint.org/docs/rules/no-global-assign)|✓ |  |✓         
|131|[no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)|  |🔧|"error"   
|132|[no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)|  |  |          
|133|[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)|  |  |"error"   
|134|[no-import-assign](https://eslint.org/docs/rules/no-import-assign)|✓ |  |✓         
|135|[no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)|  |  |"error"   
|136|[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)|✓ |  |✓         
|137|[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)|✓ |  |✓         
|138|[no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)|  |  |          
|139|[no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)|✓ |  |✓         
|140|[no-iterator](https://eslint.org/docs/rules/no-iterator)|  |  |"error"   
|141|[no-label-var](https://eslint.org/docs/rules/no-label-var)|  |  |"error"   
|142|[no-labels](https://eslint.org/docs/rules/no-labels)|  |  |"error"   
|143|[no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)|  |  |"error"   
|144|[no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)|  |🔧|"error"   
|145|[no-loop-func](https://eslint.org/docs/rules/no-loop-func)|  |  |"error"   
|146|[no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)|✓ |  |✓         
|147|[no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)|  |  |          
|148|[no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)|✓ |  |✓         
|149|[no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)|  |  |["error",{"groups":[["&&","||"]]}]
|150|[no-mixed-requires](https://eslint.org/docs/rules/no-mixed-requires)|  |  |          
|151|[no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|✓ |  |✓         
|152|[no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)|  |  |"error"   
|153|[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)|  |🔧|"error"   
|154|[no-multi-str](https://eslint.org/docs/rules/no-multi-str)|  |  |"error"   
|155|[no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)|  |🔧|["error",{"max":2,"maxBOF":1,"maxEOF":1}]
|156|[no-native-reassign](https://eslint.org/docs/rules/no-native-reassign)|  |  |          
|157|[no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)|  |  |"error"   
|158|[no-negated-in-lhs](https://eslint.org/docs/rules/no-negated-in-lhs)|  |  |          
|159|[no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)|  |  |"warn"    
|160|[no-new](https://eslint.org/docs/rules/no-new)|  |  |          
|161|[no-new-func](https://eslint.org/docs/rules/no-new-func)|  |  |          
|162|[no-new-object](https://eslint.org/docs/rules/no-new-object)|  |  |"error"   
|163|[no-new-require](https://eslint.org/docs/rules/no-new-require)|  |  |          
|164|[no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)|✓ |  |✓         
|165|[no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)|  |  |"error"   
|166|[no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)|✓ |  |✓         
|167|[no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)|✓ |  |✓         
|168|[no-octal](https://eslint.org/docs/rules/no-octal)|✓ |  |✓         
|169|[no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)|  |  |"error"   
|170|[no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)|  |  |"off"     
|171|[no-path-concat](https://eslint.org/docs/rules/no-path-concat)|  |  |          
|172|[no-plusplus](https://eslint.org/docs/rules/no-plusplus)|  |  |          
|173|[no-process-env](https://eslint.org/docs/rules/no-process-env)|  |  |          
|174|[no-process-exit](https://eslint.org/docs/rules/no-process-exit)|  |  |          
|175|[no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)|  |  |"error"   
|176|[no-proto](https://eslint.org/docs/rules/no-proto)|  |  |"error"   
|177|[no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)|✓ |  |✓         
|178|[no-redeclare](https://eslint.org/docs/rules/no-redeclare)|✓ |  |✓         
|179|[no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)|✓ |🔧|✓         
|180|[no-reserved-keys](https://eslint.org/docs/rules/no-reserved-keys)|  |  |          
|181|[no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)|  |  |          
|182|[no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)|  |  |["error","event","fdescribe","self"]
|183|[no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)|  |  |          
|184|[no-restricted-modules](https://eslint.org/docs/rules/no-restricted-modules)|  |  |          
|185|[no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)|  |  |          
|186|[no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)|  |  |          
|187|[no-return-assign](https://eslint.org/docs/rules/no-return-assign)|  |  |"error"   
|188|[no-return-await](https://eslint.org/docs/rules/no-return-await)|  |  |"error"   
|189|[no-script-url](https://eslint.org/docs/rules/no-script-url)|  |  |          
|190|[no-self-assign](https://eslint.org/docs/rules/no-self-assign)|✓ |  |✓         
|191|[no-self-compare](https://eslint.org/docs/rules/no-self-compare)|  |  |"error"   
|192|[no-sequences](https://eslint.org/docs/rules/no-sequences)|  |  |"error"   
|193|[no-setter-return](https://eslint.org/docs/rules/no-setter-return)|✓ |  |✓         
|194|[no-shadow](https://eslint.org/docs/rules/no-shadow)|  |  |"error"   
|195|[no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)|✓ |  |✓         
|196|[no-space-before-semi](https://eslint.org/docs/rules/no-space-before-semi)|  |  |          
|197|[no-spaced-func](https://eslint.org/docs/rules/no-spaced-func)|  |  |          
|198|[no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)|✓ |  |✓         
|199|[no-sync](https://eslint.org/docs/rules/no-sync)|  |  |          
|200|[no-tabs](https://eslint.org/docs/rules/no-tabs)|  |  |"error"   
|201|[no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)|  |  |"error"   
|202|[no-ternary](https://eslint.org/docs/rules/no-ternary)|  |  |          
|203|[no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)|✓ |  |✓         
|204|[no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)|  |  |"error"   
|205|[no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)|  |🔧|["error",{"ignoreComments":true,"skipBlankLines":true}]
|206|[no-undef](https://eslint.org/docs/rules/no-undef)|✓ |  |✓         
|207|[no-undef-init](https://eslint.org/docs/rules/no-undef-init)|  |🔧|"error"   
|208|[no-undefined](https://eslint.org/docs/rules/no-undefined)|  |  |"error"   
|209|[no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)|  |  |          
|210|[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)|✓ |  |✓         
|211|[no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)|  |  |"error"   
|212|[no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)|  |🔧|"error"   
|213|[no-unreachable](https://eslint.org/docs/rules/no-unreachable)|✓ |  |✓         
|214|[no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)|  |  |"error"   
|215|[no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)|✓ |  |✓         
|216|[no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)|✓ |  |✓         
|217|[no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)|✓ |  |✓         
|218|[no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)|  |  |"error"   
|219|[no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)|✓ |🔧|✓         
|220|[no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)|  |  |"error"   
|221|[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)|✓ |  |✓         
|222|[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)|  |  |          
|223|[no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)|✓ |  |✓         
|224|[no-useless-call](https://eslint.org/docs/rules/no-useless-call)|  |  |          
|225|[no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)|✓ |  |✓         
|226|[no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)|  |🔧|"error"   
|227|[no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)|  |  |"error"   
|228|[no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)|  |  |"error"   
|229|[no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)|✓ |  |✓         
|230|[no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)|  |🔧|"error"   
|231|[no-useless-return](https://eslint.org/docs/rules/no-useless-return)|  |🔧|"error"   
|232|[no-var](https://eslint.org/docs/rules/no-var)|  |🔧|["warn"]  
|233|[no-void](https://eslint.org/docs/rules/no-void)|  |  |          
|234|[no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)|  |  |          
|235|[no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)|  |🔧|"error"   
|236|[no-with](https://eslint.org/docs/rules/no-with)|✓ |  |✓         
|237|[no-wrap-func](https://eslint.org/docs/rules/no-wrap-func)|  |  |          
|238|[nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)|  |🔧|          
|239|[object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)|  |🔧|["error",{"ExportDeclaration":{"minProperties":3,"multiline":true},"ImportDeclaration":{"minProperties":3,"multiline":true},"ObjectExpression":{"consistent":true,"minProperties":1,"multiline":true},"ObjectPattern":{"minProperties":3,"multiline":true}}]
|240|[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)|  |🔧|["error","always"]
|241|[object-property-newline](https://eslint.org/docs/rules/object-property-newline)|  |🔧|["error",{"allowAllPropertiesOnSameLine":true}]
|242|[object-shorthand](https://eslint.org/docs/rules/object-shorthand)|  |🔧|          
|243|[one-var](https://eslint.org/docs/rules/one-var)|  |🔧|["error","never"]
|244|[one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)|  |🔧|["error","always"]
|245|[operator-assignment](https://eslint.org/docs/rules/operator-assignment)|  |🔧|["error","always"]
|246|[operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)|  |🔧|["error","before"]
|247|[padded-blocks](https://eslint.org/docs/rules/padded-blocks)|  |🔧|          
|248|[padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)|  |🔧|["error",{"blankLine":"always","next":"*","prev":"directive"},{"blankLine":"any","next":"directive","prev":"directive"},{"blankLine":"always","next":"function","prev":"*"},{"blankLine":"always","next":"block","prev":"*"}]
|249|[prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)|  |🔧|          
|250|[prefer-const](https://eslint.org/docs/rules/prefer-const)|  |🔧|"error"   
|251|[prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)|  |🔧|          
|252|[prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)|  |🔧|          
|253|[prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group)|  |  |          
|254|[prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)|  |🔧|"error"   
|255|[prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)|  |🔧|          
|256|[prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)|  |🔧|"error"   
|257|[prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)|  |  |          
|258|[prefer-reflect](https://eslint.org/docs/rules/prefer-reflect)|  |  |          
|259|[prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)|  |  |"error"   
|260|[prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)|  |  |          
|261|[prefer-spread](https://eslint.org/docs/rules/prefer-spread)|  |  |          
|262|[prefer-template](https://eslint.org/docs/rules/prefer-template)|  |🔧|"error"   
|263|[quote-props](https://eslint.org/docs/rules/quote-props)|  |🔧|          
|264|[quotes](https://eslint.org/docs/rules/quotes)|  |🔧|["error","single",{"avoidEscape":true}]
|265|[radix](https://eslint.org/docs/rules/radix)|  |  |          
|266|[require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)|  |  |"off"     
|267|[require-await](https://eslint.org/docs/rules/require-await)|  |  |"error"   
|268|[require-jsdoc](https://eslint.org/docs/rules/require-jsdoc)|  |  |          
|269|[require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)|  |  |          
|270|[require-yield](https://eslint.org/docs/rules/require-yield)|✓ |  |✓         
|271|[rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)|  |🔧|["error","always"]
|272|[semi](https://eslint.org/docs/rules/semi)|  |🔧|["error","always"]
|273|[semi-spacing](https://eslint.org/docs/rules/semi-spacing)|  |🔧|["error",{"after":true,"before":false}]
|274|[semi-style](https://eslint.org/docs/rules/semi-style)|  |🔧|["error","last"]
|275|[sort-imports](https://eslint.org/docs/rules/sort-imports)|  |🔧|          
|276|[sort-keys](https://eslint.org/docs/rules/sort-keys)|  |  |          
|277|[sort-vars](https://eslint.org/docs/rules/sort-vars)|  |🔧|          
|278|[space-after-function-name](https://eslint.org/docs/rules/space-after-function-name)|  |  |          
|279|[space-after-keywords](https://eslint.org/docs/rules/space-after-keywords)|  |  |          
|280|[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)|  |🔧|["error","always"]
|281|[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|  |🔧|["error",{"anonymous":"never","asyncArrow":"always","named":"never"}]
|282|[space-before-function-parentheses](https://eslint.org/docs/rules/space-before-function-parentheses)|  |  |          
|283|[space-before-keywords](https://eslint.org/docs/rules/space-before-keywords)|  |  |          
|284|[space-in-brackets](https://eslint.org/docs/rules/space-in-brackets)|  |  |          
|285|[space-in-parens](https://eslint.org/docs/rules/space-in-parens)|  |🔧|"error"   
|286|[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)|  |🔧|["error",{"int32Hint":false}]
|287|[space-return-throw-case](https://eslint.org/docs/rules/space-return-throw-case)|  |  |          
|288|[space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)|  |🔧|"error"   
|289|[space-unary-word-ops](https://eslint.org/docs/rules/space-unary-word-ops)|  |  |          
|290|[spaced-comment](https://eslint.org/docs/rules/spaced-comment)|  |🔧|["error","always"]
|291|[spaced-line-comment](https://eslint.org/docs/rules/spaced-line-comment)|  |  |          
|292|[strict](https://eslint.org/docs/rules/strict)|  |🔧|          
|293|[switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)|  |🔧|"error"   
|294|[symbol-description](https://eslint.org/docs/rules/symbol-description)|  |  |"error"   
|295|[template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)|  |🔧|"error"   
|296|[template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)|  |🔧|"error"   
|297|[unicode-bom](https://eslint.org/docs/rules/unicode-bom)|  |🔧|"error"   
|298|[use-isnan](https://eslint.org/docs/rules/use-isnan)|✓ |  |✓         
|299|[valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)|  |  |          
|300|[valid-typeof](https://eslint.org/docs/rules/valid-typeof)|✓ |  |✓         
|301|[vars-on-top](https://eslint.org/docs/rules/vars-on-top)|  |  |          
|302|[wrap-iife](https://eslint.org/docs/rules/wrap-iife)|  |🔧|["error","inside"]
|303|[wrap-regex](https://eslint.org/docs/rules/wrap-regex)|  |🔧|"error"   
|304|[yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)|  |🔧|          
|305|[yoda](https://eslint.org/docs/rules/yoda)|  |🔧|          