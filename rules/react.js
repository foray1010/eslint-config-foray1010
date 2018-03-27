'use strict'

const extendsConfig = require('../lib/extendsConfig')

module.exports = extendsConfig({
  extends: ['eslint-config-airbnb/rules/react'],
  settings: {
    react: {
      pragma: 'createElement'
    }
  },
  rules: {
    /*++++++++++++++
     + Strict Mode +
     ++++++++++++++*/
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],

    /*+++++++++++++++++++
     + Stylistic Issues +
     +++++++++++++++++++*/
    // I prefer to use same style for all string
    'jsx-quotes': ['error', 'prefer-single'],

    /*++++++++++++++++
     + Other plugins +
     ++++++++++++++++*/
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

    // will deprecate in react 16.3
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',

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
