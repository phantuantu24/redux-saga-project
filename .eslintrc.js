// eslint-disable-next-line no-undef
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // want to fix more error with eslint then enable airbnb
    // "airbnb"
  ],
  rules: {
    semi: 0,
    quotes: [0, 'single'],
    'react/prop-types': 0,
    'react/jsx-max-props-per-line': 0,
    'linebreak-style': 0,
    'comma-dangle': 0,
    'eol-last': 0,
    'object-curly-newline': 0
  }
};
// 0/"off": off
// 1/"warm": warm
// 2/"error": error