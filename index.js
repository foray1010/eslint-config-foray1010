'use strict'

const extendConfig = require('./lib/extendConfig')

module.exports = extendConfig({
  extends: ['eslint-config-airbnb/base', 'eslint-config-foray1010/rules/main'],
  parserOptions: {
    ecmaFeatures: {
      // if you want to use jsx, extends "foray1010/react"
      jsx: false
    },
    // we use require() instead of `import ... from ...`
    sourceType: 'script'
  },
  rules: {
    // backend code needs more dynamic structure
    'global-require': 'off'
  }
})
