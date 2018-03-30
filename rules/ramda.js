'use strict'

module.exports = {
  extends: 'plugin:ramda/recommended',
  plugins: ['eslint-plugin-ramda'],
  rules: {
    'ramda/always-simplification': 'error',
    'ramda/compose-simplification': 'error',
    'ramda/eq-by-simplification': 'error',
    'ramda/pipe-simplification': 'error',
    'ramda/prefer-both-either': 'error',
    'ramda/prefer-complement': 'error'
  }
}
