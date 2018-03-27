'use strict'

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': ['.js'],
    react: {
      pragma: 'createElement'
    }
  },
  rules: {
    // handled by import-sort (https://github.com/renke/import-sort)
    'import/first': 'off'
  }
}
