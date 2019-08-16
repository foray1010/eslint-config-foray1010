'use strict'

module.exports = {
  plugins: ['eslint-plugin-html'],
  env: {
    // force use `window.` prefix
    browser: false
  },
  globals: {
    document: false,
    window: false
  }
}
