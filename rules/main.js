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
    // Don't put comma in the last item of object/array, looks very weird
    'comma-dangle': ['error', 'never'],
    // if requireStringLiterals is true, it doesn't allow using variable to compare
    // with `typeof another_variable`, which we do it often when creating library
    'valid-typeof': ['error', {requireStringLiterals: false}],

    /*+++++++++++++++++
     + Best Practices +
     +++++++++++++++++*/
    // don't force every class methods to use `this`
    'class-methods-use-this': 'off',
    // Allow `alert`, no reason to disable it
    'no-alert': 'off',
    // Although `else` after `return` is useless,
    // it shows the relationship between code and improves readability of the code
    // If we have `else if` condition (without `return`) later,
    // with this rule on, developers will need to read through the codes and
    // find out which part is `else` code and put it back to `else` scope again,
    // which is easy to make mistake
    'no-else-return': 'off',
    // Explicitly convert the type, increase readability
    'no-implicit-coercion': 'error',
    // Disable it because we may need to create function inside loop
    'no-loop-func': 'off',
    // prefer always use new to create class instance for better readability
    'no-new': 'off',
    // may need for `options = options || {}`
    'no-param-reassign': 'off',
    // we want to preserve the semantic meaning of link, such as `<a href="javascript:void(0)"></a>`
    'no-script-url': 'off',
    // syntax of `chai` will throw error for this rule
    'no-unused-expressions': 'off',
    // as we omit semi-colon, iife may break the code
    'wrap-iife': 'off',

    /*++++++++++++
     + Variables +
     ++++++++++++*/
    // prevents shadowing of built-in global variables
    'no-shadow': ['error', {
      builtinGlobals: true
    }],
    // we may need to use the function before we define it, check `js hoisting`
    'no-use-before-define': 'off',

    /*++++++++++
     + Node.js +
     ++++++++++*/
    // to group require together for better readability
    'no-mixed-requires': 'error',

    /*+++++++++++++++++++
     + Stylistic Issues +
     +++++++++++++++++++*/
    // don't force adding name to anonymous function
    'func-names': 'off',
    // some codes, such as `new Bunyan.createLogger`, cannot pass, so disable it
    'new-cap': 'off',
    // we don't want to remove support of `continue` in loop
    'no-continue': 'off',
    // disable it allow better readability
    'no-lonely-if': 'off',
    // let developers decide when to use bracket to explicitly state the priority of operators
    'no-mixed-operators': 'off',
    // we use underscore prefix to show if it is a private variable
    'no-underscore-dangle': 'off',
    // prefer no space between curly bracket
    'object-curly-spacing': ['error', 'never'],
    // prefer putting operator at the end of line
    'operator-linebreak': ['error', 'after'],
    // prefer no semi colon, just my preference
    semi: ['error', 'never'],

    /*+++++++++++++++
     + ECMAScript 6 +
     +++++++++++++++*/
    // should not force developer to remove the scope for arrow function
    // because sometime we do it for clearer code
    'arrow-body-style': 'off',
    // I prefer always has bracket, it looks more consistent
    'arrow-parens': ['error', 'always'],
    // don't force shorthand for better readability
    'object-shorthand': 'off',
    // sometime not using template string is more readable
    'prefer-template': 'off',
    // need to use generator function in koa even if we don't use yield
    'require-yield': 'off',

    /*+++++++++
     + Legacy +
     +++++++++*/

    /*++++++++++++++++
     + Other plugins +
     ++++++++++++++++*/
    // we need it for making module loader
    'import/no-dynamic-require': 'off',
    // we need to import devDependencies in test files
    'import/no-extraneous-dependencies': 'off'
  }
}
