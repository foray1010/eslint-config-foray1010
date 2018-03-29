'use strict'

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': ['.mjs', '.js'],
    react: {
      pragma: 'createElement'
    }
  },
  rules: {
    /*++++++++++++++
     + Strict Mode +
     ++++++++++++++*/
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],

    /*++++++++++++++++
     + Other plugins +
     ++++++++++++++++*/
    // handled by import-sort (https://github.com/renke/import-sort)
    'import/first': 'off'
  }
}
