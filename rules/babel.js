'use strict'

const extendConfig = require('../lib/extendConfig')

const mainRules = extendConfig({
  extends: ['eslint-config-airbnb', 'eslint-config-foray1010/rules/main']
})

// as these rules do not work with babel-eslint
// using eslint-plugin-babel to deal with these rules
const migratedRules = {}
const migrateRuleNames = ['new-cap', 'no-invalid-this', 'object-curly-spacing']
for (const migrateRuleName of migrateRuleNames) {
  migratedRules[migrateRuleName] = 'off'
  migratedRules[`babel/${migrateRuleName}`] = mainRules.rules[migrateRuleName]
}

module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: migratedRules
}
