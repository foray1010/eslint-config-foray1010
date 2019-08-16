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
    'global-require': 'off',
    strict: ['error', 'global'],

    // avoid throw error even for `private: true` app which doesn't suppose to publish
    'node/no-unpublished-require': 'off'
  }
}
