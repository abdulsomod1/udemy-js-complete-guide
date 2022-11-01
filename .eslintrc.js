module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-shadow': 0,
    'no-param-reassign': ['error', { props: false }],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': ['error', 120],
  },
};
