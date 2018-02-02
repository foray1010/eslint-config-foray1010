'use strict'

const extendsConfig = require('./lib/extendsConfig')

module.exports = extendsConfig({
  extends: [
    'eslint-config-airbnb',
    'eslint-config-foray1010/rules/main',
    'eslint-config-foray1010/rules/babel',
    'eslint-config-foray1010/rules/frontend',
    'eslint-config-foray1010/rules/es-modules',
    'eslint-config-foray1010/rules/unit-test'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': ['.js'],
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

    // if prop exists in defaultProps, then prop in propTypes can be required
    // so that developer can safety assume the prop always exist
    'react/default-props-match-prop-types': ['error', {allowRequiredDefaults: true}],

    // allow 'object', it is very annoying to define the object structure every time
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array']
      }
    ],

    // do not use .jsx because of https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js']
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
