'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  rules: {
    // this rule depends on package.json's node.engines field, but the code is
    // not running directly by that engine but transpile to compatible syntax
    'node/no-unsupported-features/es-syntax': 'off',

    '@typescript-eslint/array-type': ['error', 'generic'],
    '@typescript-eslint/camelcase': ['error', {properties: 'never'}],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma'
        }
      }
    ],

    // not working for types
    'import/named': 'off'
  }
}
