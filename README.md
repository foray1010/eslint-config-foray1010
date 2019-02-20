# eslint-config-foray1010

[![Build Status](https://img.shields.io/circleci/project/foray1010/eslint-config-foray1010/master.svg)](https://circleci.com/gh/foray1010/eslint-config-foray1010/tree/master)

[![node](https://img.shields.io/node/v/eslint-config-foray1010.svg)](https://www.npmjs.com/package/eslint-config-foray1010)
[![npm](https://img.shields.io/npm/v/eslint-config-foray1010.svg)](https://www.npmjs.com/package/eslint-config-foray1010)
[![npm](https://img.shields.io/npm/dm/eslint-config-foray1010.svg)](https://www.npmjs.com/package/eslint-config-foray1010)
[![npm](https://img.shields.io/npm/l/eslint-config-foray1010.svg)](https://www.npmjs.com/package/eslint-config-foray1010)

## Versioning

### X.Y.Z

X for upgrading eslint or node engine (breaking changes)

Y for adding rules/options (more strict)

Z for removing rules/options (more loose)

## Installation

### on your repository

- If you want to install in the existing repository:

    1. `npm install --save-dev eslint eslint-config-foray1010`

    1. Create a `.eslintrc.yml` in the project root

        ```yml
        # for general purpose
        extends: "eslint-config-foray1010"

        # for general purpose with babel and flow support
        extends: "eslint-config-foray1010/babel-node"

        # for general purpose with typescript support
        extends: "eslint-config-foray1010/typescript"

        # for frontend react project
        extends: "eslint-config-foray1010/react"
        ```

### on your editor

1. For `Atom`:

    - Install in terminal by `apm install linter linter-eslint`

1. For `PhpStorm` or `WebStorm`:

    - `Languages & Frameworks` -> `JavaScript` -> choose `ECMAScript 6` for `JavaScript language version`
    - `Preference` -> `Plugins` -> click `Browse repositories...` -> search `ESLint` -> click `Install plugin`
    - `Preference` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint` -> check `Enable`

1. For `Sublime Text 3`:

    - Install [Package Control](https://packagecontrol.io/installation)
    - Install `SublimeLinter` and `SublimeLinter-contrib-eslint` by `Package Control`

1. For `vim` or `neovim`:

    - Install [benekastah/neomake](https://github.com/benekastah/neomake) by any plugin manager, such as [vim-plug](https://github.com/junegunn/vim-plug)
    - Add the following lines to `~/.vimrc` (`vim`) or `~/.config/nvim/init.vim` (`neovim`)

        ```vim
        autocmd BufWrite * :Neomake

        let g:neomake_javascript_enabled_makers= ['eslint']

        " load local eslint in the project root
        " modified from https://github.com/mtscout6/syntastic-local-eslint.vim
        let s:eslint_path = system('PATH=$(npm bin):$PATH && which eslint')
        let g:neomake_javascript_eslint_exe = substitute(s:eslint_path, '^\n*\s*\(.\{-}\)\n*\s*$', '\1', '')
        ```

1. For `vscode`:

    - Install [Eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
