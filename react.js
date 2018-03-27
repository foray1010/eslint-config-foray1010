'use strict'

const extendsConfig = require('./lib/extendsConfig')

module.exports = extendsConfig({
  extends: [
    'eslint-config-airbnb/base',
    'eslint-config-foray1010/rules/main',
    'eslint-config-foray1010/rules/react',
    'eslint-config-foray1010/rules/frontend',
    'eslint-config-foray1010/rules/es-modules',
    'eslint-config-foray1010/rules/unit-test',
    'eslint-config-foray1010/rules/babel',
    'eslint-config-foray1010/rules/ramda'
  ]
})
