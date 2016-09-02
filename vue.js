'use strict'

const extendConfig = require('./lib/extend_config')

module.exports = extendConfig({
  extends: [
    'eslint-config-foray1010/react'
  ],
  settings: {
    'import/extensions': ['.js', '.vue'],
    react: {
      pragma: 'h'
    }
  }
})
