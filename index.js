'use strict'

module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    './rules/base',
    './rules/plain-nodejs',
    './rules/unit-test',
    './rules/ramda'
  ].map(require.resolve)
}
