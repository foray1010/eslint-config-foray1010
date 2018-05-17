'use strict'

module.exports = {
  extends: ['plugin:flowtype/recommended'],
  plugins: ['eslint-plugin-flowtype'],
  rules: {
    // no trailing comma
    'flowtype/delimiter-dangle': ['error', 'never'],
    // no duplicated key
    'flowtype/no-dupe-keys': 'error',
    // use boolean instead of Boolean
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-unused-expressions': 'error',
    'flowtype/no-weak-types': [
      'error',
      {
        any: false,
        Object: false
      }
    ],
    // use `,` for object separator
    'flowtype/object-type-delimiter': 'error',
    // allow HOC passthrough and merging object type (exact type doesn't support)
    'flowtype/require-exact-type': 'off',
    'flowtype/require-valid-file-annotation': ['error', 'never', {annotationStyle: 'line'}],
    'flowtype/semi': ['error', 'never'],
    'flowtype/sort-keys': 'error'
  }
}
