// eslint-disable-next-line no-undef
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // want to fix more error with eslint then enable airbnb
    'airbnb',
    // want to fix more error with prettier then enable prettier
    'prettier',
  ],
  rules: {
    // semi: 0,
    // quotes: [0, 'single'],
    'react/prop-types': 0,
    'react/jsx-max-props-per-line': 0,
    'linebreak-style': 0,
    'comma-dangle': 0,
    'eol-last': 0,
    'object-curly-newline': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 0,
    'no-undef': 0,
    'class-methods-use-this': 0,
    // 'no-console': { allow: ['warn', 'error'] },
    'react/require-default-props': 1,
    'no-undersocre-dangle': 0,
    'no-unused-vars': 0,
    // 'no-case-declarations': 0,
    // 'arrow-body-style': 0,
    // for prettier to display error about some rule
    'prettier/prettier': ['error'],
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
// 0/"off": off
// 1/"warm": warm
// 2/"error": error
