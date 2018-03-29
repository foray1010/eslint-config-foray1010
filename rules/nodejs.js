'use strict'

module.exports = {
  parserOptions: {
    // latest node LTS doesn't support es6 module yet
    sourceType: 'script'
  },
  rules: {
    // backend code needs more dynamic structure
    'global-require': 'off'
  }
}
