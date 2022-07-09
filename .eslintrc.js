module.exports = {
    plugins: ['@typescript-eslint'],
    extends: ['standard', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        camelcase: 'off',
    },
}
