'use strict'

module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['eslint-plugin-typescript'],
  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx']
    }
  },
  rules: {
    'no-undef': 'off',

    'typescript/adjacent-overload-signatures': 'error',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-function-return-type': ['error', {allowExpressions: true}],
    'typescript/explicit-member-accessibility': 'error',
    'typescript/interface-name-prefix': 'off',
    'typescript/member-delimiter-style': ['error', {delimiter: 'none'}],
    'typescript/member-naming': 'off',
    'typescript/member-ordering': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-array-constructor': 'error',
    'typescript/no-empty-interface': 'error',
    'typescript/no-explicit-any': 'off',
    'typescript/no-inferrable-types': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-parameter-properties': 'error',
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-type-alias': 'off',
    'typescript/no-unused-vars': 'error',
    'typescript/no-use-before-define': 'error',
    'typescript/no-var-requires': 'error',
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/type-annotation-spacing': 'error'
  }
}
