'use strict'

module.exports = {
  extends: ['plugin:flowtype/recommended'],
  plugins: ['eslint-plugin-flowtype'],
  rules: {
    // no trailing comma
    'flowtype/delimiter-dangle': ['error', 'never'],
    // no duplicated key
    'flowtype/no-dupe-keys': 'error',
    // no `$FlowFixMe`
    'flowtype/no-flow-fix-me-comments': 'error',
    // always use `$ReadOnlyArray<>` instead of `Array<>`
    'flowtype/no-mutable-array': 'error',
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
    // use `{| key: type |}` to define exact object type, no extra key can pass through
    'flowtype/require-exact-type': 'error',
    'flowtype/require-valid-file-annotation': ['error', 'always', {annotationStyle: 'line'}],
    'flowtype/semi': ['error', 'never'],
    'flowtype/sort-keys': 'error'
  }
}
