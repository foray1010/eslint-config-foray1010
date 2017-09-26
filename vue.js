'use strict'

const extendConfig = require('./lib/extendConfig')

module.exports = extendConfig({
  extends: ['eslint-config-foray1010/react'],
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
    // this two doesn't work in vue
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',

    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.vue']
      }
    ],
    // allow use `class` instead of `className`
    'react/no-unknown-property': 'off'
  }
})
