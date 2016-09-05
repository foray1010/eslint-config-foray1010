'use strict'

const extendConfig = require('./lib/extendConfig')

module.exports = extendConfig({
  extends: [
    'eslint-config-airbnb',
    'eslint-config-foray1010/rules/main'
  ],
  settings: {
    react: {
      pragma: 'createElement'
    }
  },
  globals: {
    chrome: false,
    document: false,
    window: false
  },
  rules: {
    /*+++++++++++++++++++
     + Stylistic Issues +
     +++++++++++++++++++*/
    'jsx-quotes': [2, 'prefer-single']
  }
})
