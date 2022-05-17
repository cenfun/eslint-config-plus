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
|   |Name                            |  |  |Plus      
|--:|--------------------------------|--|--|----------
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
| 12|[camelcase](https://eslint.org/docs/rules/camelcase)|  |  |          
| 13|[capitalized-comments](https://eslint.org/docs/rules/capitalized-comments)|  |🔧|          
| 14|[class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)|  |  |          
| 15|[comma-dangle](https://eslint.org/docs/rules/comma-dangle)|  |🔧|["error","never"]
| 16|[comma-spacing](https://eslint.org/docs/rules/comma-spacing)|  |🔧|["error",{"after":true,"before":false}]
| 17|[comma-style](https://eslint.org/docs/rules/comma-style)|  |🔧|["error","last"]
| 18|[complexity](https://eslint.org/docs/rules/complexity)|  |  |["error",8]
| 19|[computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)|  |🔧|["error","never"]
| 20|[consistent-return](https://eslint.org/docs/rules/consistent-return)|  |  |          
| 21|[consistent-this](https://eslint.org/docs/rules/consistent-this)|  |  |          
| 22|[constructor-super](https://eslint.org/docs/rules/constructor-super)|✓ |  |✓         
| 23|[curly](https://eslint.org/docs/rules/curly)|  |🔧|"error"   
| 24|[default-case](https://eslint.org/docs/rules/default-case)|  |  |"error"   
| 25|[default-case-last](https://eslint.org/docs/rules/default-case-last)|  |  |"error"   
| 26|[default-param-last](https://eslint.org/docs/rules/default-param-last)|  |  |"error"   
| 27|[dot-location](https://eslint.org/docs/rules/dot-location)|  |🔧|["error","property"]
| 28|[dot-notation](https://eslint.org/docs/rules/dot-notation)|  |🔧|"error"   
| 29|[eol-last](https://eslint.org/docs/rules/eol-last)|  |🔧|["error","always"]
| 30|[eqeqeq](https://eslint.org/docs/rules/eqeqeq)|  |🔧|["error","always"]
| 31|[for-direction](https://eslint.org/docs/rules/for-direction)|✓ |  |✓         
| 32|[func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)|  |🔧|["error","never"]
| 33|[func-name-matching](https://eslint.org/docs/rules/func-name-matching)|  |  |"error"   
| 34|[func-names](https://eslint.org/docs/rules/func-names)|  |  |          
| 35|[func-style](https://eslint.org/docs/rules/func-style)|  |  |          
| 36|[function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline)|  |🔧|["error","consistent"]
| 37|[function-paren-newline](https://eslint.org/docs/rules/function-paren-newline)|  |🔧|["error","consistent"]
| 38|[generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)|  |🔧|["error",{"after":false,"before":true}]
| 39|[getter-return](https://eslint.org/docs/rules/getter-return)|✓ |  |✓         
| 40|[grouped-accessor-pairs](https://eslint.org/docs/rules/grouped-accessor-pairs)|  |  |          
| 41|[guard-for-in](https://eslint.org/docs/rules/guard-for-in)|  |  |          
| 42|[id-denylist](https://eslint.org/docs/rules/id-denylist)|  |  |          
| 43|[id-length](https://eslint.org/docs/rules/id-length)|  |  |          
| 44|[id-match](https://eslint.org/docs/rules/id-match)|  |  |          
| 45|[implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak)|  |🔧|["error","beside"]
| 46|[indent](https://eslint.org/docs/rules/indent)|  |🔧|["error",4,{"ArrayExpression":"first","ObjectExpression":1,"SwitchCase":1}]
| 47|[init-declarations](https://eslint.org/docs/rules/init-declarations)|  |  |          
| 48|[jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)|  |🔧|["error","prefer-double"]
| 49|[key-spacing](https://eslint.org/docs/rules/key-spacing)|  |🔧|["error",{"afterColon":true,"mode":"strict"}]
| 50|[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)|  |🔧|["error",{"after":true,"before":true}]
| 51|[line-comment-position](https://eslint.org/docs/rules/line-comment-position)|  |  |["error",{"position":"above"}]
| 52|[linebreak-style](https://eslint.org/docs/rules/linebreak-style)|  |🔧|          
| 53|[lines-around-comment](https://eslint.org/docs/rules/lines-around-comment)|  |🔧|["error",{"beforeBlockComment":true}]
| 54|[lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)|  |🔧|["error","always",{"exceptAfterSingleLine":true}]
| 55|[max-classes-per-file](https://eslint.org/docs/rules/max-classes-per-file)|  |  |"error"   
| 56|[max-depth](https://eslint.org/docs/rules/max-depth)|  |  |["error",5]
| 57|[max-len](https://eslint.org/docs/rules/max-len)|  |  |["error",{"code":550,"ignoreStrings":true,"ignoreTrailingComments":true}]
| 58|[max-lines](https://eslint.org/docs/rules/max-lines)|  |  |["error",3000]
| 59|[max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)|  |  |["error",300]
| 60|[max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)|  |  |["error",5]
| 61|[max-params](https://eslint.org/docs/rules/max-params)|  |  |["error",8]
| 62|[max-statements](https://eslint.org/docs/rules/max-statements)|  |  |["error",50]
| 63|[max-statements-per-line](https://eslint.org/docs/rules/max-statements-per-line)|  |  |["error",{"max":3}]
| 64|[multiline-comment-style](https://eslint.org/docs/rules/multiline-comment-style)|  |🔧|          
| 65|[multiline-ternary](https://eslint.org/docs/rules/multiline-ternary)|  |🔧|["error","never"]
| 66|[new-cap](https://eslint.org/docs/rules/new-cap)|  |  |["error",{"capIsNew":false,"newIsCap":true,"properties":true}]
| 67|[new-parens](https://eslint.org/docs/rules/new-parens)|  |🔧|"error"   
| 68|[newline-per-chained-call](https://eslint.org/docs/rules/newline-per-chained-call)|  |🔧|          
| 69|[no-alert](https://eslint.org/docs/rules/no-alert)|  |  |"error"   
| 70|[no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)|  |  |"error"   
| 71|[no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)|✓ |  |✓         
| 72|[no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)|  |  |          
| 73|[no-bitwise](https://eslint.org/docs/rules/no-bitwise)|  |  |          
| 74|[no-caller](https://eslint.org/docs/rules/no-caller)|  |  |"error"   
| 75|[no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)|✓ |  |✓         
| 76|[no-class-assign](https://eslint.org/docs/rules/no-class-assign)|✓ |  |✓         
| 77|[no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)|✓ |  |✓         
| 78|[no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)|✓ |  |✓         
| 79|[no-confusing-arrow](https://eslint.org/docs/rules/no-confusing-arrow)|  |🔧|"error"   
| 80|[no-console](https://eslint.org/docs/rules/no-console)|  |  |"off"     
| 81|[no-const-assign](https://eslint.org/docs/rules/no-const-assign)|✓ |  |✓         
| 82|[no-constant-binary-expression](https://eslint.org/docs/rules/no-constant-binary-expression)|  |  |          
| 83|[no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)|✓ |  |✓         
| 84|[no-constructor-return](https://eslint.org/docs/rules/no-constructor-return)|  |  |"error"   
| 85|[no-continue](https://eslint.org/docs/rules/no-continue)|  |  |          
| 86|[no-control-regex](https://eslint.org/docs/rules/no-control-regex)|✓ |  |✓         
| 87|[no-debugger](https://eslint.org/docs/rules/no-debugger)|✓ |  |✓         
| 88|[no-delete-var](https://eslint.org/docs/rules/no-delete-var)|✓ |  |✓         
| 89|[no-div-regex](https://eslint.org/docs/rules/no-div-regex)|  |🔧|"error"   
| 90|[no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)|✓ |  |✓         
| 91|[no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)|✓ |  |✓         
| 92|[no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)|✓ |  |✓         
| 93|[no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)|✓ |  |✓         
| 94|[no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)|✓ |  |✓         
| 95|[no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)|  |  |"error"   
| 96|[no-else-return](https://eslint.org/docs/rules/no-else-return)|  |🔧|"error"   
| 97|[no-empty](https://eslint.org/docs/rules/no-empty)|✓ |  |✓         
| 98|[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)|✓ |  |✓         
| 99|[no-empty-function](https://eslint.org/docs/rules/no-empty-function)|  |  |          
|100|[no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)|✓ |  |✓         
|101|[no-eq-null](https://eslint.org/docs/rules/no-eq-null)|  |  |"error"   
|102|[no-eval](https://eslint.org/docs/rules/no-eval)|  |  |"error"   
|103|[no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)|✓ |  |✓         
|104|[no-extend-native](https://eslint.org/docs/rules/no-extend-native)|  |  |"error"   
|105|[no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)|  |🔧|"error"   
|106|[no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)|✓ |🔧|✓         
|107|[no-extra-label](https://eslint.org/docs/rules/no-extra-label)|  |🔧|"error"   
|108|[no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)|  |🔧|"error"   
|109|[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)|✓ |🔧|✓         
|110|[no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)|✓ |  |✓         
|111|[no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)|  |🔧|"error"   
|112|[no-func-assign](https://eslint.org/docs/rules/no-func-assign)|✓ |  |✓         
|113|[no-global-assign](https://eslint.org/docs/rules/no-global-assign)|✓ |  |✓         
|114|[no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)|  |🔧|"error"   
|115|[no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)|  |  |          
|116|[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)|  |  |"error"   
|117|[no-import-assign](https://eslint.org/docs/rules/no-import-assign)|✓ |  |✓         
|118|[no-inline-comments](https://eslint.org/docs/rules/no-inline-comments)|  |  |"error"   
|119|[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)|✓ |  |✓         
|120|[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)|✓ |  |✓         
|121|[no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)|  |  |          
|122|[no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)|✓ |  |✓         
|123|[no-iterator](https://eslint.org/docs/rules/no-iterator)|  |  |"error"   
|124|[no-label-var](https://eslint.org/docs/rules/no-label-var)|  |  |"error"   
|125|[no-labels](https://eslint.org/docs/rules/no-labels)|  |  |"error"   
|126|[no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)|  |  |"error"   
|127|[no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)|  |🔧|"error"   
|128|[no-loop-func](https://eslint.org/docs/rules/no-loop-func)|  |  |"error"   
|129|[no-loss-of-precision](https://eslint.org/docs/rules/no-loss-of-precision)|✓ |  |✓         
|130|[no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)|  |  |          
|131|[no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)|✓ |  |✓         
|132|[no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)|  |  |["error",{"groups":[["&&","||"]]}]
|133|[no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)|✓ |  |✓         
|134|[no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)|  |  |"error"   
|135|[no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)|  |🔧|"error"   
|136|[no-multi-str](https://eslint.org/docs/rules/no-multi-str)|  |  |"error"   
|137|[no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)|  |🔧|["error",{"max":2,"maxBOF":1,"maxEOF":1}]
|138|[no-negated-condition](https://eslint.org/docs/rules/no-negated-condition)|  |  |"error"   
|139|[no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)|  |  |"warn"    
|140|[no-new](https://eslint.org/docs/rules/no-new)|  |  |          
|141|[no-new-func](https://eslint.org/docs/rules/no-new-func)|  |  |          
|142|[no-new-object](https://eslint.org/docs/rules/no-new-object)|  |  |"error"   
|143|[no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)|✓ |  |✓         
|144|[no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)|  |  |"error"   
|145|[no-nonoctal-decimal-escape](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)|✓ |  |✓         
|146|[no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)|✓ |  |✓         
|147|[no-octal](https://eslint.org/docs/rules/no-octal)|✓ |  |✓         
|148|[no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)|  |  |"error"   
|149|[no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)|  |  |"off"     
|150|[no-plusplus](https://eslint.org/docs/rules/no-plusplus)|  |  |          
|151|[no-promise-executor-return](https://eslint.org/docs/rules/no-promise-executor-return)|  |  |"error"   
|152|[no-proto](https://eslint.org/docs/rules/no-proto)|  |  |"error"   
|153|[no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)|✓ |  |✓         
|154|[no-redeclare](https://eslint.org/docs/rules/no-redeclare)|✓ |  |✓         
|155|[no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)|✓ |🔧|✓         
|156|[no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)|  |  |          
|157|[no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)|  |  |["error","event","fdescribe","self"]
|158|[no-restricted-imports](https://eslint.org/docs/rules/no-restricted-imports)|  |  |          
|159|[no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)|  |  |          
|160|[no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)|  |  |          
|161|[no-return-assign](https://eslint.org/docs/rules/no-return-assign)|  |  |"error"   
|162|[no-return-await](https://eslint.org/docs/rules/no-return-await)|  |  |"error"   
|163|[no-script-url](https://eslint.org/docs/rules/no-script-url)|  |  |          
|164|[no-self-assign](https://eslint.org/docs/rules/no-self-assign)|✓ |  |✓         
|165|[no-self-compare](https://eslint.org/docs/rules/no-self-compare)|  |  |"error"   
|166|[no-sequences](https://eslint.org/docs/rules/no-sequences)|  |  |"error"   
|167|[no-setter-return](https://eslint.org/docs/rules/no-setter-return)|✓ |  |✓         
|168|[no-shadow](https://eslint.org/docs/rules/no-shadow)|  |  |"error"   
|169|[no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)|✓ |  |✓         
|170|[no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)|✓ |  |✓         
|171|[no-tabs](https://eslint.org/docs/rules/no-tabs)|  |  |"error"   
|172|[no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)|  |  |"error"   
|173|[no-ternary](https://eslint.org/docs/rules/no-ternary)|  |  |          
|174|[no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)|✓ |  |✓         
|175|[no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)|  |  |"error"   
|176|[no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)|  |🔧|["error",{"ignoreComments":true,"skipBlankLines":true}]
|177|[no-undef](https://eslint.org/docs/rules/no-undef)|✓ |  |✓         
|178|[no-undef-init](https://eslint.org/docs/rules/no-undef-init)|  |🔧|"error"   
|179|[no-undefined](https://eslint.org/docs/rules/no-undefined)|  |  |"error"   
|180|[no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)|  |  |          
|181|[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)|✓ |  |✓         
|182|[no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)|  |  |"error"   
|183|[no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)|  |🔧|"error"   
|184|[no-unreachable](https://eslint.org/docs/rules/no-unreachable)|✓ |  |✓         
|185|[no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)|  |  |"error"   
|186|[no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)|✓ |  |✓         
|187|[no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)|✓ |  |✓         
|188|[no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)|✓ |  |✓         
|189|[no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)|  |  |"error"   
|190|[no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)|✓ |🔧|✓         
|191|[no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)|  |  |"error"   
|192|[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)|✓ |  |✓         
|193|[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)|  |  |          
|194|[no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)|✓ |  |✓         
|195|[no-useless-call](https://eslint.org/docs/rules/no-useless-call)|  |  |          
|196|[no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)|✓ |  |✓         
|197|[no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)|  |🔧|"error"   
|198|[no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)|  |  |"error"   
|199|[no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)|  |  |"error"   
|200|[no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)|✓ |  |✓         
|201|[no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)|  |🔧|"error"   
|202|[no-useless-return](https://eslint.org/docs/rules/no-useless-return)|  |🔧|"error"   
|203|[no-var](https://eslint.org/docs/rules/no-var)|  |🔧|["warn"]  
|204|[no-void](https://eslint.org/docs/rules/no-void)|  |  |          
|205|[no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)|  |  |          
|206|[no-whitespace-before-property](https://eslint.org/docs/rules/no-whitespace-before-property)|  |🔧|"error"   
|207|[no-with](https://eslint.org/docs/rules/no-with)|✓ |  |✓         
|208|[nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)|  |🔧|          
|209|[object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)|  |🔧|["error",{"ExportDeclaration":{"minProperties":3,"multiline":true},"ImportDeclaration":{"minProperties":3,"multiline":true},"ObjectExpression":{"consistent":true,"minProperties":1,"multiline":true},"ObjectPattern":{"minProperties":3,"multiline":true}}]
|210|[object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)|  |🔧|["error","always"]
|211|[object-property-newline](https://eslint.org/docs/rules/object-property-newline)|  |🔧|["error",{"allowAllPropertiesOnSameLine":true}]
|212|[object-shorthand](https://eslint.org/docs/rules/object-shorthand)|  |🔧|          
|213|[one-var](https://eslint.org/docs/rules/one-var)|  |🔧|["error","never"]
|214|[one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)|  |🔧|["error","always"]
|215|[operator-assignment](https://eslint.org/docs/rules/operator-assignment)|  |🔧|["error","always"]
|216|[operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)|  |🔧|["error","before"]
|217|[padded-blocks](https://eslint.org/docs/rules/padded-blocks)|  |🔧|          
|218|[padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)|  |🔧|["error",{"blankLine":"always","next":"*","prev":"directive"},{"blankLine":"any","next":"directive","prev":"directive"},{"blankLine":"always","next":"function","prev":"*"},{"blankLine":"always","next":"block","prev":"*"}]
|219|[prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)|  |🔧|          
|220|[prefer-const](https://eslint.org/docs/rules/prefer-const)|  |🔧|"error"   
|221|[prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)|  |🔧|          
|222|[prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)|  |🔧|          
|223|[prefer-named-capture-group](https://eslint.org/docs/rules/prefer-named-capture-group)|  |  |          
|224|[prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)|  |🔧|"error"   
|225|[prefer-object-has-own](https://eslint.org/docs/rules/prefer-object-has-own)|  |🔧|          
|226|[prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)|  |🔧|"error"   
|227|[prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)|  |  |          
|228|[prefer-regex-literals](https://eslint.org/docs/rules/prefer-regex-literals)|  |  |"error"   
|229|[prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)|  |  |          
|230|[prefer-spread](https://eslint.org/docs/rules/prefer-spread)|  |  |          
|231|[prefer-template](https://eslint.org/docs/rules/prefer-template)|  |🔧|"error"   
|232|[quote-props](https://eslint.org/docs/rules/quote-props)|  |🔧|          
|233|[quotes](https://eslint.org/docs/rules/quotes)|  |🔧|["error","single",{"avoidEscape":true}]
|234|[radix](https://eslint.org/docs/rules/radix)|  |  |          
|235|[require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)|  |  |"off"     
|236|[require-await](https://eslint.org/docs/rules/require-await)|  |  |"error"   
|237|[require-unicode-regexp](https://eslint.org/docs/rules/require-unicode-regexp)|  |  |          
|238|[require-yield](https://eslint.org/docs/rules/require-yield)|✓ |  |✓         
|239|[rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)|  |🔧|["error","always"]
|240|[semi](https://eslint.org/docs/rules/semi)|  |🔧|["error","always"]
|241|[semi-spacing](https://eslint.org/docs/rules/semi-spacing)|  |🔧|["error",{"after":true,"before":false}]
|242|[semi-style](https://eslint.org/docs/rules/semi-style)|  |🔧|["error","last"]
|243|[sort-imports](https://eslint.org/docs/rules/sort-imports)|  |🔧|          
|244|[sort-keys](https://eslint.org/docs/rules/sort-keys)|  |  |          
|245|[sort-vars](https://eslint.org/docs/rules/sort-vars)|  |🔧|          
|246|[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)|  |🔧|["error","always"]
|247|[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|  |🔧|["error",{"anonymous":"never","asyncArrow":"always","named":"never"}]
|248|[space-in-parens](https://eslint.org/docs/rules/space-in-parens)|  |🔧|"error"   
|249|[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)|  |🔧|["error",{"int32Hint":false}]
|250|[space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)|  |🔧|"error"   
|251|[spaced-comment](https://eslint.org/docs/rules/spaced-comment)|  |🔧|["error","always"]
|252|[strict](https://eslint.org/docs/rules/strict)|  |🔧|          
|253|[switch-colon-spacing](https://eslint.org/docs/rules/switch-colon-spacing)|  |🔧|"error"   
|254|[symbol-description](https://eslint.org/docs/rules/symbol-description)|  |  |"error"   
|255|[template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)|  |🔧|"error"   
|256|[template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)|  |🔧|"error"   
|257|[unicode-bom](https://eslint.org/docs/rules/unicode-bom)|  |🔧|"error"   
|258|[use-isnan](https://eslint.org/docs/rules/use-isnan)|✓ |  |✓         
|259|[valid-typeof](https://eslint.org/docs/rules/valid-typeof)|✓ |  |✓         
|260|[vars-on-top](https://eslint.org/docs/rules/vars-on-top)|  |  |          
|261|[wrap-iife](https://eslint.org/docs/rules/wrap-iife)|  |🔧|["error","inside"]
|262|[wrap-regex](https://eslint.org/docs/rules/wrap-regex)|  |🔧|"error"   
|263|[yield-star-spacing](https://eslint.org/docs/rules/yield-star-spacing)|  |🔧|          
|264|[yoda](https://eslint.org/docs/rules/yoda)|  |🔧|          