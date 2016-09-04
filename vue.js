'use strict'

const extendConfig = require('./lib/extend_config')

module.exports = extendConfig({
  extends: [
    'eslint-config-foray1010/react'
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.vue'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue', '.json']
      }
    },
    react: {
      pragma: 'h'
    }
  },
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: ['.jsx', '.vue']
    }],
    // allow use `class` instead of `className`
    'react/no-unknown-property': 0
  }
})
