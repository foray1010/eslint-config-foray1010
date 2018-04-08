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

    1. Keep the `^` in the `package.json` for `eslint-config-foray1010`, if the project is still in development. Replace the `^` with `~` if you want to prevent new rules which may brother you in travis.

    1. Create a `.eslintrc.yml` in the project root

        ```yml
        extends: "eslint-config-foray1010"
        ```

        If your repo is a front-end project using [babel](https://babeljs.io/), you should extends `/react` instead

        ```yml
        extends: "eslint-config-foray1010/react"
        ```

    1. Add it to `npm test` so that  `travis` can test it for us, for example:

        `package.json`:
        ```diff json
        {
          "scripts": {
        +   "lint": "eslint ."
          }
        }
        ```

        `travis.yml`:
        ```diff yml
        install:
        + - npm install
        script:
        + - npm run lint
        ```

### on your editor

1. If the repository doesn't have `eslint` installed, you can install it as global package

    - `npm install -g eslint eslint-config-foray1010`
    - Create a `.eslintrc.yml` in `$HOME`

        ```yml
        extends: "eslint-config-foray1010"
        ```

1. For `Atom`:

    - Install in terminal by `apm install linter linter-eslint`
    - If you want to use global eslint, `Preference` -> `Packages` -> `linter-eslint` -> check `Use Global ESLint`

1. For `PhpStorm`:

    - `Languages & Frameworks` -> `JavaScript` -> choose `ECMAScript 6` for `JavaScript language version`
    - `Preference` -> `Plugins` -> click `Browse repositories...` -> search `ESLint` -> click `Install plugin`
    - `Preference` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint` -> check `Enable`

1. For `Sublime Text 3`:

    - if you are using `nvm`, add the following script to `~/.bash_profile` or `~/.zshenv` (check which shell you are using in **SYSTEM DEFAULT (not the same as terminal default)** by `echo $SHELL`)

        ```bash
        if hash brew 2> /dev/null && [[ -d "$(brew --prefix nvm)" ]]; then
          export NVM_DIR="$(brew --prefix nvm)"
        else
          export NVM_DIR="$HOME/.nvm"
        fi

        if [[ -s "$NVM_DIR/nvm.sh" ]]; then
          source "$NVM_DIR/nvm.sh"
        fi
        ```

        remove the corresponding `nvm` loading script in `.bashrc` or `.zshrc`

    - Install [Package Control](https://packagecontrol.io/installation)
    - Install `SublimeLinter` and `SublimeLinter-contrib-eslint` by `Package Control`
    - Restart `Sublime Text 3`
    - Restart computer if ESLint is not working

1. For `vim` or `neovim`:

    - `neovim` is preferred over `vim`, as `neovim` can load plugin asynchronously, which highly improve performance when linting with ESLint
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

    - Install [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin
