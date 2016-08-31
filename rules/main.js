'use strict'

module.exports = {
  env: {
    // force use `window.` prefix
    browser: false
  },
  plugins: [
    'html'
  ],
  settings: {
    'html/indent': '0',
    'html/report-bad-indent': 2
  },
  rules: {
    /*++++++++++++++++++
     + Possible Errors +
     ++++++++++++++++++*/
    'comma-dangle': [2, 'never'],
    'no-extra-boolean-cast': 2,
    'no-unexpected-multiline': 2,

    /*+++++++++++++++++
     + Best Practices +
     +++++++++++++++++*/
    'dot-location': [2, 'property'],
    'no-alert': 0,
    'no-else-return': 0,
    'no-implicit-coercion': 2,
    'no-loop-func': 0,
    'no-new': 0,
    'no-param-reassign': 0,
    'no-script-url': 0,
    'no-unused-expressions': 0,
    'no-useless-call': 2,
    'no-void': 2,
    'wrap-iife': 0,

    /*++++++++++++
     + Variables +
     ++++++++++++*/
    'no-shadow': [2, {
      builtinGlobals: true
    }],
    'no-unused-vars': [1, {
      args: 'after-used',
      vars: 'local'
    }],
    'no-use-before-define': 0,

    /*++++++++++
     + Node.js +
     ++++++++++*/
    'no-mixed-requires': [2, true],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,

    /*+++++++++++++++++++
     + Stylistic Issues +
     +++++++++++++++++++*/
    'func-names': 0,
    'new-cap': [2, {
      capIsNew: false
    }],
    'new-parens': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'never'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    semi: [2, 'never'],

    /*+++++++++++++++
     + ECMAScript 6 +
     +++++++++++++++*/
    'arrow-body-style': 0,
    'constructor-super': 2,
    'generator-star-spacing': [2, 'after'],
    'object-shorthand': 0,
    'prefer-template': 0,
    // need to use generator function in koa even if we don't use yield
    'require-yield': 0,

    /*+++++++++
     + Legacy +
     +++++++++*/
    'max-len': [2, 100, 2, {
      ignoreUrls: true,
      ignoreComments: true
    }],
    'no-bitwise': 2,
    'no-plusplus': 2,

    /*++++++++++++++++
     + Other plugins +
     ++++++++++++++++*/
    'import/no-extraneous-dependencies': 0
  }
}
