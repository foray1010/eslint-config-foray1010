'use strict'

const extendsConfig = require('../lib/extendsConfig')

const baseConfig = extendsConfig({
  extends: ['eslint-config-airbnb/base', 'eslint-config-foray1010/rules/base']
})

// as these rules do not work with babel-eslint
// using eslint-plugin-babel to deal with these rules
const migrateRuleNames = ['new-cap', 'no-invalid-this', 'object-curly-spacing', 'semi']
const migratedRules = migrateRuleNames.reduce(
  (acc, migrateRuleName) => ({
    ...acc,
    [migrateRuleName]: 'off',
    [`babel/${migrateRuleName}`]: baseConfig.rules[migrateRuleName]
  }),
  {}
)

module.exports = {
  parser: 'babel-eslint',
  plugins: ['eslint-plugin-babel'],
  rules: migratedRules
}
