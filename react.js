'use strict'

const extendConfig = require('./lib/extendConfig')

module.exports = extendConfig({
  extends: [
    'eslint-config-airbnb',
    'eslint-config-foray1010/rules/main',
    'eslint-config-foray1010/rules/frontend'
  ],
  settings: {
    react: {
      pragma: 'createElement'
    }
  },
  rules: {
    /*+++++++++++++++++++
     + Stylistic Issues +
     +++++++++++++++++++*/
    'jsx-quotes': ['error', 'prefer-single']
  }
})
