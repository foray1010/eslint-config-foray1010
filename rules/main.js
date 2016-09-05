'use strict'

module.exports = {
  env: {
    // force use `window.` prefix
    browser: false
  },
  rules: {
    /*++++++++++++++++++
     + Possible Errors +
     ++++++++++++++++++*/
    'comma-dangle': ['error', 'never'],
    'no-extra-boolean-cast': 'error',
    'no-unexpected-multiline': 'error',

    /*+++++++++++++++++
     + Best Practices +
     +++++++++++++++++*/
    'dot-location': ['error', 'property'],
    'no-alert': 'off',
    'no-else-return': 'off',
    'no-implicit-coercion': 'error',
    'no-loop-func': 'off',
    'no-new': 'off',
    'no-param-reassign': 'off',
    'no-script-url': 'off',
    'no-unused-expressions': 'off',
    'no-useless-call': 'error',
    'no-void': 'error',
    'wrap-iife': 'off',

    /*++++++++++++
     + Variables +
     ++++++++++++*/
    'no-shadow': ['error', {
      builtinGlobals: true
    }],
    'no-unused-vars': ['warn', {
      args: 'after-used',
      vars: 'local'
    }],
    'no-use-before-define': 'off',

    /*++++++++++
     + Node.js +
     ++++++++++*/
    'no-mixed-requires': ['error', true],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',

    /*+++++++++++++++++++
     + Stylistic Issues +
     +++++++++++++++++++*/
    'func-names': 'off',
    'new-cap': ['error', {
      capIsNew: false
    }],
    'new-parens': 'error',
    'no-continue': 'off',
    'no-lonely-if': 'off',
    'no-mixed-operators': ['error', {
      allowSamePrecedence: true
    }],
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'object-curly-spacing': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    semi: ['error', 'never'],

    /*+++++++++++++++
     + ECMAScript 6 +
     +++++++++++++++*/
    'arrow-body-style': 'off',
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'after'],
    'object-shorthand': 'off',
    'prefer-template': 'off',
    // need to use generator function in koa even if we don't use yield
    'require-yield': 'off',

    /*+++++++++
     + Legacy +
     +++++++++*/
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true
    }],
    'no-bitwise': 'error',
    'no-plusplus': 'error',

    /*++++++++++++++++
     + Other plugins +
     ++++++++++++++++*/
    'import/no-extraneous-dependencies': 'off'
  }
}
