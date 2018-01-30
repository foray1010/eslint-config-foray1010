'use strict'

const extendsConfig = require('./lib/extendsConfig')

module.exports = extendsConfig({
  extends: [
    'eslint-config-airbnb/base',
    'eslint-config-foray1010/rules/main',
    'eslint-config-foray1010/rules/unit-test'
  ],
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
