module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'import/no-unresolved': 0,
        'space-before-function-paren': ['error', 'always'],
        // allow debugger during development
        'arrow-parens': ['error', 'as-needed'],
        'no-underscore-dangle': 'off',
        'no-confusing-arrow': 'off',
        'no-return-assign': 'off',
        'no-console': 'off',
        'no-multi-assign': 'off',
        'no-param-reassign': 'off',
        'global-require': 'off',
        'promise/avoid-new': 'off',
        'import/no-dynamic-require': 'off',
        'global-require': 'off',
        'promise/avoid-new': 'off'
    }
};