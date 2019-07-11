# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.3.1](https://github.com/foray1010/eslint-config-foray1010/compare/v7.3.0...v7.3.1) (2019-07-11)

### Bug Fixes

- cannot use typescript preset ([b33b9e7](https://github.com/foray1010/eslint-config-foray1010/commit/b33b9e7))

## [7.3.0](https://github.com/foray1010/eslint-config-foray1010/compare/v7.2.0...v7.3.0) (2019-04-28)

### Features

- use eslint-plugin-redux-saga ([b34a854](https://github.com/foray1010/eslint-config-foray1010/commit/b34a854))

## [7.2.0](https://github.com/foray1010/eslint-config-foray1010/compare/v7.1.2...v7.2.0) (2019-03-09)

### Features

- sync typescript config with base config ([e6f66cd](https://github.com/foray1010/eslint-config-foray1010/commit/e6f66cd))
- **rules:** add react-hooks/exhaustive-deps ([fd2209a](https://github.com/foray1010/eslint-config-foray1010/commit/fd2209a))

## [7.1.2](https://github.com/foray1010/eslint-config-foray1010/compare/v7.1.1...v7.1.2) (2019-02-28)

### Bug Fixes

- allow using jsx in .tsx ([ce90152](https://github.com/foray1010/eslint-config-foray1010/commit/ce90152))
- disable @typescript-eslint/explicit-function-return-type ([69bd933](https://github.com/foray1010/eslint-config-foray1010/commit/69bd933))

## [7.1.1](https://github.com/foray1010/eslint-config-foray1010/compare/v7.1.0...v7.1.1) (2019-02-28)

### Bug Fixes

- fix errors when running on typescript files ([c02d5b1](https://github.com/foray1010/eslint-config-foray1010/commit/c02d5b1))

## 7.0.0 (2019-02-08)

### Features

- add lint rules for react hook ([db0edd7](https://github.com/foray1010/eslint-config-foray1010/commit/db0edd7))
- ts/tsx extension has highest priority in import/resolver ([fe90241](https://github.com/foray1010/eslint-config-foray1010/commit/fe90241))
- use React.createElement as pragma ([ea7f6d2](https://github.com/foray1010/eslint-config-foray1010/commit/ea7f6d2))

### BREAKING CHANGES

- `import {createElement} from 'react'` is no longer valid

## [6.19.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.18.0...v6.19.0) (2019-01-21)

### Features

- upgrade typescript eslint plugin and parser ([cca461e](https://github.com/foray1010/eslint-config-foray1010/commit/cca461e))

## [6.18.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.4...v6.18.0) (2019-01-20)

### Features

- use [@typescript-eslint](https://github.com/typescript-eslint) as typescript's eslint plugin and parser ([22c81b7](https://github.com/foray1010/eslint-config-foray1010/commit/22c81b7))

## [6.17.4](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.3...v6.17.4) (2018-11-08)

### Bug Fixes

- **package:** upgrade eslint-plugin-jest ([6da0fa0](https://github.com/foray1010/eslint-config-foray1010/commit/6da0fa0))

## [6.17.3](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.2...v6.17.3) (2018-10-28)

### Bug Fixes

- **package:** update eslint-plugin-flowtype to version 3.1.1 ([415ce7a](https://github.com/foray1010/eslint-config-foray1010/commit/415ce7a)), closes [#55](https://github.com/foray1010/eslint-config-foray1010/issues/55)
- **package:** update eslint-plugin-node to version 8.0.0 ([4af2666](https://github.com/foray1010/eslint-config-foray1010/commit/4af2666))

## [6.17.2](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.1...v6.17.2) (2018-10-09)

### Bug Fixes

- **package:** update typescript-eslint-parser to version 20.0.0 ([9f27ed3](https://github.com/foray1010/eslint-config-foray1010/commit/9f27ed3))
- upgrade babel-eslint to 10 ([2043229](https://github.com/foray1010/eslint-config-foray1010/commit/2043229))

## [6.17.1](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.0...v6.17.1) (2018-09-26)

### Bug Fixes

- **package:** update typescript-eslint-parser to version 19.0.1 ([8aa5a7f](https://github.com/foray1010/eslint-config-foray1010/commit/8aa5a7f))
- allow 3 level nested scope ([b1ae00b](https://github.com/foray1010/eslint-config-foray1010/commit/b1ae00b))

## [6.17.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.16.0...v6.17.0) (2018-09-20)

### Features

- support typescript ([4ea5699](https://github.com/foray1010/eslint-config-foray1010/commit/4ea5699))

## [6.16.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.15.0...v6.16.0) (2018-08-14)

### Bug Fixes

- allow 300 lines files ([df38b5a](https://github.com/foray1010/eslint-config-foray1010/commit/df38b5a))

### Features

- upgrade to eslint-config-airbnb 17.1.0 ([70fb064](https://github.com/foray1010/eslint-config-foray1010/commit/70fb064))

## [6.15.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.14.1...v6.15.0) (2018-08-10)

### Bug Fixes

- disable no-process-exit ([1353cba](https://github.com/foray1010/eslint-config-foray1010/commit/1353cba))
- require eslint 5 ([0e3a3ef](https://github.com/foray1010/eslint-config-foray1010/commit/0e3a3ef))

### Features

- enable max-depth & max-lines ([dc4740c](https://github.com/foray1010/eslint-config-foray1010/commit/dc4740c))

## [6.14.1](https://github.com/foray1010/eslint-config-foray1010/compare/v6.14.0...v6.14.1) (2018-07-24)

### Bug Fixes

- move eslint-plugin-fp from devDependencies to dependencies ([1ec499c](https://github.com/foray1010/eslint-config-foray1010/commit/1ec499c))

## [6.14.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.12.1...v6.14.0) (2018-07-24)

### Bug Fixes

- allow block flow annotation ([0375c40](https://github.com/foray1010/eslint-config-foray1010/commit/0375c40))

### Features

- force all files must have flow annotation ([ada6510](https://github.com/foray1010/eslint-config-foray1010/commit/ada6510))
- upgrade to eslint-config-airbnb 17.0.0 ([c9b4e4b](https://github.com/foray1010/eslint-config-foray1010/commit/c9b4e4b))

## [6.13.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.12.1...v6.13.0) (2018-06-20)

### Features

- enable more flowtype rules ([43dd847](https://github.com/foray1010/eslint-config-foray1010/commit/43dd847))

## [6.12.1](https://github.com/foray1010/eslint-config-foray1010/compare/v6.12.0...v6.12.1) (2018-05-17)

### Bug Fixes

- disable flowtype/require-exact-type ([88b2e02](https://github.com/foray1010/eslint-config-foray1010/commit/88b2e02))
- disable node/no-unpublished-require ([a09b8db](https://github.com/foray1010/eslint-config-foray1010/commit/a09b8db))

## [6.12.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.11.0...v6.12.0) (2018-05-06)

### Bug Fixes

- **package:** update eslint-plugin-babel to version 5.0.0 ([#39](https://github.com/foray1010/eslint-config-foray1010/issues/39)) ([cd6cc21](https://github.com/foray1010/eslint-config-foray1010/commit/cd6cc21))

### Features

- add preset babel-node ([a821914](https://github.com/foray1010/eslint-config-foray1010/commit/a821914))
- use eslint-plugin-node to lint unsupported feature in node ([947a661](https://github.com/foray1010/eslint-config-foray1010/commit/947a661))

## [6.11.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.10.0...v6.11.0) (2018-03-30)

### Features

- **flowtype:** disable no-flow-fix-me-comments, no-mutable-array and require-exact-type ([3171a46](https://github.com/foray1010/eslint-config-foray1010/commit/3171a46))
- enable more ramda rules ([c29fa1e](https://github.com/foray1010/eslint-config-foray1010/commit/c29fa1e))

## [6.10.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.9.0...v6.10.0) (2018-03-29)

### Bug Fixes

- browser env setting should be located in rules/frontend ([124cd9e](https://github.com/foray1010/eslint-config-foray1010/commit/124cd9e))
- cannot run on vscode because its node version is <=7.9 ([882ba5a](https://github.com/foray1010/eslint-config-foray1010/commit/882ba5a))
- strict mode rule should be located in rules/es-module ([fbd5e10](https://github.com/foray1010/eslint-config-foray1010/commit/fbd5e10))

### Features

- allow using console such as console.error ([d88148f](https://github.com/foray1010/eslint-config-foray1010/commit/d88148f))
- do not allow using PureComponent if it contains just render method ([b5acc2d](https://github.com/foray1010/eslint-config-foray1010/commit/b5acc2d))

## [6.9.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.8.2...v6.9.0) (2018-03-27)

### Bug Fixes

- use airbnb/base to generate babel rules instead ([3bc09dc](https://github.com/foray1010/eslint-config-foray1010/commit/3bc09dc))

### Features

- add flow to react preset ([057c6bb](https://github.com/foray1010/eslint-config-foray1010/commit/057c6bb))
- remove jsx-a11y ([0279072](https://github.com/foray1010/eslint-config-foray1010/commit/0279072))
- support .mjs ([36fe0d1](https://github.com/foray1010/eslint-config-foray1010/commit/36fe0d1))
