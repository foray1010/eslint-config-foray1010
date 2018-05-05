'use strict'

module.exports = {
  parserOptions: {
    // latest node LTS doesn't support es6 module yet
    sourceType: 'script'
  },
  extends: 'plugin:node/recommended',
  plugins: ['eslint-plugin-node'],
  rules: {
    // backend code needs more dynamic structure
    'global-require': 'off'
  }
}
