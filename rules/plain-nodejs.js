'use strict'

module.exports = {
  extends: 'plugin:node/recommended',
  parserOptions: {
    // latest node LTS doesn't support es6 module yet
    sourceType: 'script'
  },
  plugins: ['eslint-plugin-node'],
  rules: {
    // backend code needs more dynamic structure
    'global-require': 'off',
    strict: ['error', 'global'],

    // handled by eslint-plugin-import
    'node/no-missing-import': 'off',
    // avoid throw error even for `private: true` app which doesn't suppose to publish
    'node/no-unpublished-require': 'off'
  }
}
