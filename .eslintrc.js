module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true
    },
    extends: [
        "airbnb-base"
    ],
    parserOptions: {
        ecmaVersion: 11
    },
    globals: {
        _: true,
        _db: true,
        md: true
    },
    rules: {
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4],
        "no-console": "off",
        "no-underscore-dangle": "off",
        "no-use-before-define": "off",
        "quote-props": "off",
        "quotes": ["error", "double"],
        "space-unary-ops": [1, { "nonwords": true }]
    }
};
