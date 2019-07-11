'use strict'

const resolveConfig = require('../lib/resolveConfig')

const baseConfig = resolveConfig({
  extends: ['eslint-config-airbnb/base', 'eslint-config-foray1010/rules/base']
})

// as these rules do not work with babel-eslint
// using eslint-plugin-babel to deal with these rules
const migrateRuleNames = ['new-cap', 'no-invalid-this', 'object-curly-spacing', 'semi']
const migratedRules = migrateRuleNames.reduce(
  (acc, migrateRuleName) =>
    Object.assign({}, acc, {
      [migrateRuleName]: 'off',
      [`babel/${migrateRuleName}`]: baseConfig.rules[migrateRuleName]
    }),
  {}
)

module.exports = {
  parser: 'babel-eslint',
  plugins: ['eslint-plugin-babel'],
  rules: Object.assign({}, migratedRules, {
    // this rule depends on package.json's node.engines field, but the code is
    // not running directly by that engine but transpile to compatible syntax
    'node/no-unsupported-features/es-syntax': 'off'
  })
}
