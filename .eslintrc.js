module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: ["error", 4],
        "eol-last": ["error", "never"],
        "linebreak-style": 0
    },
       
};