'use strict'

const extendConfig = require('./lib/extend_config')

module.exports = extendConfig({
  extends: [
    'eslint-config-foray1010/react'
  ],
  settings: {
    react: {
      pragma: 'h'
    }
  }
})
