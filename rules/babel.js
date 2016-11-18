'use strict'

const _ = require('lodash')

const extendConfig = require('../lib/extendConfig')

const mainRules = extendConfig({
  extends: [
    'eslint-config-airbnb',
    'eslint-config-foray1010/rules/main'
  ]
})

// as these rules do not work with babel-eslint
// using eslint-plugin-babel to deal with these rules
const migratedRules = {}
const migrateRuleNames = [
  'new-cap',
  'object-curly-spacing'
]
for (const migrateRuleName of migrateRuleNames) {
  migratedRules[migrateRuleName] = 'off'
  migratedRules[`babel/${migrateRuleName}`] = mainRules.rules[migrateRuleName]
}

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  rules: _.merge(migratedRules, {
    // some logic may require await inside loop instead of run in parallel
    // for example, when we want to make sure one request per time and don't excess rate limit
    'babel/no-await-in-loop': 'off'
  })
}
