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
    '@typescript-eslint/array-type': ['error', 'generic'],
    '@typescript-eslint/camelcase': ['error', {properties: 'never'}],
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
