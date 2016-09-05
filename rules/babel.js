'use strict'

const _ = require('lodash')

const extendConfig = require('../lib/extend_config')
const mainRules = require('./main')

const eslintConfigAirbnb = extendConfig({
  extends: 'airbnb'
})

const migratedRules = {}
const migrateRuleNames = [
  'array-bracket-spacing',
  'arrow-parens',
  'generator-star-spacing',
  'new-cap',
  'object-curly-spacing',
  'object-shorthand'
]
for (const migrateRuleName of migrateRuleNames) {
  migratedRules[migrateRuleName] = 'off'

  let migratedRuleVal = mainRules.rules[migrateRuleName]
  if (migratedRuleVal === undefined) {
    migratedRuleVal = eslintConfigAirbnb.rules[migrateRuleName]
  }
  migratedRules[`babel/${migrateRuleName}`] = migratedRuleVal
}

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  rules: _.merge(migratedRules, {
    'babel/flow-object-type': 'off',
    'babel/func-params-comma-dangle': ['error', 'never'],
    'babel/no-await-in-loop': 'off'
  })
}
