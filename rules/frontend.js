'use strict'

module.exports = {
  env: {
    webextensions: true
  },
  plugins: [
    'html'
  ],
  settings: {
    'html/indent': '0',
    'html/report-bad-indent': 'error'
  },
  globals: {
    document: false,
    window: false
  }
}
