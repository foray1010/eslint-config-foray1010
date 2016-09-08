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
  },
  rules: {
    // sometime we may just want to apply mouseDown event to whole webpage to disable right click
    // this rule will block us from doing that
    'jsx-a11y/no-static-element-interactions': 'off',

    // allow 'object', it is very annoying to define the object structure every time
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array']
    }]
  }
}
