module.exports = {
    "env": {
        // "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        // "Atomics": "readonly",
        // "SharedArrayBuffer": "readonly"
    },
  "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }]
    }
};
