'use strict'

const extendsConfig = require('./lib/extendsConfig')

module.exports = extendsConfig({
  extends: [
    'eslint-config-airbnb',
    'eslint-config-foray1010/rules/main',
    'eslint-config-foray1010/rules/frontend'
  ],
  settings: {
    react: {
      pragma: 'createElement'
    }
  },
  rules: {
    /*+++++++++++++++++++
     + Stylistic Issues +
     +++++++++++++++++++*/
    // I prefer to use same style for all string
    'jsx-quotes': ['error', 'prefer-single'],

    /*++++++++++++++++
     + Other plugins +
     ++++++++++++++++*/
    // sometime we may just want to apply mouseDown event to whole webpage to disable right click
    // this rule will block us from doing that
    'jsx-a11y/no-static-element-interactions': 'off',

    // allow 'object', it is very annoying to define the object structure every time
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array']
      }
    ],

    // ignorePureComponents because PureComponents helps improving performance and
    // make the flow easier to understand
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true
      }
    ],

    // React.PropTypes doesn't allow to use `null` with `isRequired`
    // which break many use case, we use `null` to represent that value is not exist yet
    'react/require-default-props': 'off'
  }
})
