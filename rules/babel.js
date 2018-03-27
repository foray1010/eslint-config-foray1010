'use strict'

const extendsConfig = require('../lib/extendsConfig')

const baseConfig = extendsConfig({
  extends: ['eslint-config-airbnb', 'eslint-config-foray1010/rules/base']
})

// as these rules do not work with babel-eslint
// using eslint-plugin-babel to deal with these rules
const migratedRules = {}
const migrateRuleNames = ['new-cap', 'no-invalid-this', 'object-curly-spacing', 'semi']
for (const migrateRuleName of migrateRuleNames) {
  migratedRules[migrateRuleName] = 'off'
  migratedRules[`babel/${migrateRuleName}`] = baseConfig.rules[migrateRuleName]
}

module.exports = {
  parser: 'babel-eslint',
  plugins: ['eslint-plugin-babel'],
  rules: migratedRules
}
