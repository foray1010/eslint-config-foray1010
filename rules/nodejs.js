'use strict'

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      // if you want to use jsx, extends "foray1010/react"
      jsx: false
    },
    // latest node LTS doesn't support es6 module yet
    sourceType: 'script'
  },
  rules: {
    // backend code needs more dynamic structure
    'global-require': 'off'
  }
}
