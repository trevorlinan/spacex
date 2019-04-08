module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [
            'error',
            4,
        ],
        'max-len': [
            'error',
            {
                code: 150,
            },
        ],
        'template-curly-spacing': [
            'error',
            'always',
        ],
        'space-before-function-paren': [
            'error',
            'always',
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
