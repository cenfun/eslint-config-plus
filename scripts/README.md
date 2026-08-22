# eslint-config-plus
Eslint config plus = Eslint official recommended rules + most fixable and normal rules.  
[https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)

# Installation
```sh
npm install eslint-config-plus -D
```
# Usage
## ESM
```js
// eslint.config.js
import plus from 'eslint-config-plus';

export default [
    {
        rules: {
            ... plus.rules
        }
    }
];
```

## CommonJS
```js
// eslint.config.cjs
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
{replace_holder_rules}

# Changelog
[CHANGELOG.md](CHANGELOG.md)