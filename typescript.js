'use strict'

const extendsConfig = require('./lib/extendsConfig')

module.exports = extendsConfig({
  extends: [
    'eslint-config-airbnb/base',
    'eslint-config-foray1010/rules/base',
    'eslint-config-foray1010/rules/es-modules',
    'eslint-config-foray1010/rules/unit-test',
    'eslint-config-foray1010/rules/typescript',
    'eslint-config-foray1010/rules/ramda'
  ]
})
