# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="7.0.0"></a>
# 7.0.0 (2019-02-08)


### Bug Fixes

* **package:** update babel-eslint to version 8.0.0 ([#31](https://github.com/foray1010/eslint-config-foray1010/issues/31)) ([2357451](https://github.com/foray1010/eslint-config-foray1010/commit/2357451))
* allow block flow annotation ([dec5c8d](https://github.com/foray1010/eslint-config-foray1010/commit/dec5c8d))
* **package:** update eslint-config-airbnb to version 14.1.0 ([#20](https://github.com/foray1010/eslint-config-foray1010/issues/20)) ([3cafac2](https://github.com/foray1010/eslint-config-foray1010/commit/3cafac2))
* **package:** update eslint-config-airbnb to version 16.0.0 ([#32](https://github.com/foray1010/eslint-config-foray1010/issues/32)) ([8deb582](https://github.com/foray1010/eslint-config-foray1010/commit/8deb582))
* **package:** update eslint-plugin-babel to version 5.0.0 ([#39](https://github.com/foray1010/eslint-config-foray1010/issues/39)) ([cd6cc21](https://github.com/foray1010/eslint-config-foray1010/commit/cd6cc21))
* **package:** update eslint-plugin-flowtype to version 3.1.1 ([415ce7a](https://github.com/foray1010/eslint-config-foray1010/commit/415ce7a)), closes [#55](https://github.com/foray1010/eslint-config-foray1010/issues/55)
* **package:** update eslint-plugin-node to version 8.0.0 ([4af2666](https://github.com/foray1010/eslint-config-foray1010/commit/4af2666))
* **package:** update typescript-eslint-parser to version 19.0.1 ([8aa5a7f](https://github.com/foray1010/eslint-config-foray1010/commit/8aa5a7f))
* **package:** update typescript-eslint-parser to version 20.0.0 ([9f27ed3](https://github.com/foray1010/eslint-config-foray1010/commit/9f27ed3))
* disable flowtype/require-exact-type ([88b2e02](https://github.com/foray1010/eslint-config-foray1010/commit/88b2e02))
* **package:** upgrade eslint-plugin-jest ([6da0fa0](https://github.com/foray1010/eslint-config-foray1010/commit/6da0fa0))
* allow 3 level nested scope ([b1ae00b](https://github.com/foray1010/eslint-config-foray1010/commit/b1ae00b))
* allow 300 lines files ([df38b5a](https://github.com/foray1010/eslint-config-foray1010/commit/df38b5a))
* browser env setting should be located in rules/frontend ([124cd9e](https://github.com/foray1010/eslint-config-foray1010/commit/124cd9e))
* cannot run on vscode because its node version is <=7.9 ([882ba5a](https://github.com/foray1010/eslint-config-foray1010/commit/882ba5a))
* disable no-process-exit ([1353cba](https://github.com/foray1010/eslint-config-foray1010/commit/1353cba))
* disable node/no-unpublished-require ([a09b8db](https://github.com/foray1010/eslint-config-foray1010/commit/a09b8db))
* move eslint-plugin-fp from devDependencies to dependencies ([1ec499c](https://github.com/foray1010/eslint-config-foray1010/commit/1ec499c))
* remove all jsx-a11y related rules ([726a255](https://github.com/foray1010/eslint-config-foray1010/commit/726a255))
* require eslint 5 ([0e3a3ef](https://github.com/foray1010/eslint-config-foray1010/commit/0e3a3ef))
* strict mode rule should be located in rules/es-module ([fbd5e10](https://github.com/foray1010/eslint-config-foray1010/commit/fbd5e10))
* upgrade babel-eslint to 10 ([2043229](https://github.com/foray1010/eslint-config-foray1010/commit/2043229))
* use airbnb/base to generate babel rules instead ([3bc09dc](https://github.com/foray1010/eslint-config-foray1010/commit/3bc09dc))


### Features

* add flow to react preset ([057c6bb](https://github.com/foray1010/eslint-config-foray1010/commit/057c6bb))
* add lint rules for react hook ([db0edd7](https://github.com/foray1010/eslint-config-foray1010/commit/db0edd7))
* add preset babel-node ([a821914](https://github.com/foray1010/eslint-config-foray1010/commit/a821914))
* allow using console such as console.error ([d88148f](https://github.com/foray1010/eslint-config-foray1010/commit/d88148f))
* do not allow mutation ([2f82831](https://github.com/foray1010/eslint-config-foray1010/commit/2f82831))
* do not allow using PureComponent if it contains just render method ([b5acc2d](https://github.com/foray1010/eslint-config-foray1010/commit/b5acc2d))
* enable max-depth & max-lines ([dc4740c](https://github.com/foray1010/eslint-config-foray1010/commit/dc4740c))
* enable more flowtype rules ([43dd847](https://github.com/foray1010/eslint-config-foray1010/commit/43dd847))
* enable more ramda rules ([c29fa1e](https://github.com/foray1010/eslint-config-foray1010/commit/c29fa1e))
* force all files must have flow annotation ([ada6510](https://github.com/foray1010/eslint-config-foray1010/commit/ada6510))
* remove jsx-a11y ([0279072](https://github.com/foray1010/eslint-config-foray1010/commit/0279072))
* support .mjs ([36fe0d1](https://github.com/foray1010/eslint-config-foray1010/commit/36fe0d1))
* support typescript ([4ea5699](https://github.com/foray1010/eslint-config-foray1010/commit/4ea5699))
* ts/tsx extension has highest priority in import/resolver ([fe90241](https://github.com/foray1010/eslint-config-foray1010/commit/fe90241))
* **flowtype:** disable no-flow-fix-me-comments, no-mutable-array and require-exact-type ([3171a46](https://github.com/foray1010/eslint-config-foray1010/commit/3171a46))
* upgrade to eslint-config-airbnb 17.0.0 ([c9b4e4b](https://github.com/foray1010/eslint-config-foray1010/commit/c9b4e4b))
* upgrade to eslint-config-airbnb 17.1.0 ([70fb064](https://github.com/foray1010/eslint-config-foray1010/commit/70fb064))
* upgrade typescript eslint plugin and parser ([cca461e](https://github.com/foray1010/eslint-config-foray1010/commit/cca461e))
* use [@typescript-eslint](https://github.com/typescript-eslint) as typescript's eslint plugin and parser ([22c81b7](https://github.com/foray1010/eslint-config-foray1010/commit/22c81b7))
* use eslint-plugin-node to lint unsupported feature in node ([947a661](https://github.com/foray1010/eslint-config-foray1010/commit/947a661))
* use React.createElement as pragma ([ea7f6d2](https://github.com/foray1010/eslint-config-foray1010/commit/ea7f6d2))


### BREAKING CHANGES

* `import {createElement} from 'react'` is no longer valid



<a name="6.19.0"></a>
# [6.19.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.18.0...v6.19.0) (2019-01-21)


### Features

* upgrade typescript eslint plugin and parser ([18cc658](https://github.com/foray1010/eslint-config-foray1010/commit/18cc658))



<a name="6.18.0"></a>
# [6.18.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.4...v6.18.0) (2019-01-20)


### Features

* use [@typescript-eslint](https://github.com/typescript-eslint) as typescript's eslint plugin and parser ([6391031](https://github.com/foray1010/eslint-config-foray1010/commit/6391031))



<a name="6.17.4"></a>
## [6.17.4](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.3...v6.17.4) (2018-11-08)


### Bug Fixes

* **package:** upgrade eslint-plugin-jest ([32e3c63](https://github.com/foray1010/eslint-config-foray1010/commit/32e3c63))



<a name="6.17.3"></a>
## [6.17.3](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.2...v6.17.3) (2018-10-28)


### Bug Fixes

* **package:** update eslint-plugin-flowtype to version 3.1.1 ([cd0254f](https://github.com/foray1010/eslint-config-foray1010/commit/cd0254f)), closes [#55](https://github.com/foray1010/eslint-config-foray1010/issues/55)
* **package:** update eslint-plugin-node to version 8.0.0 ([7c2b8e9](https://github.com/foray1010/eslint-config-foray1010/commit/7c2b8e9))



<a name="6.17.2"></a>
## [6.17.2](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.1...v6.17.2) (2018-10-09)


### Bug Fixes

* **package:** update typescript-eslint-parser to version 20.0.0 ([37ed17e](https://github.com/foray1010/eslint-config-foray1010/commit/37ed17e))
* upgrade babel-eslint to 10 ([180802e](https://github.com/foray1010/eslint-config-foray1010/commit/180802e))



<a name="6.17.1"></a>
## [6.17.1](https://github.com/foray1010/eslint-config-foray1010/compare/v6.17.0...v6.17.1) (2018-09-26)


### Bug Fixes

* **package:** update typescript-eslint-parser to version 19.0.1 ([cf97f13](https://github.com/foray1010/eslint-config-foray1010/commit/cf97f13))
* allow 3 level nested scope ([edbfbe1](https://github.com/foray1010/eslint-config-foray1010/commit/edbfbe1))



<a name="6.17.0"></a>
# [6.17.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.16.0...v6.17.0) (2018-09-20)


### Features

* support typescript ([63a1f49](https://github.com/foray1010/eslint-config-foray1010/commit/63a1f49))



<a name="6.16.0"></a>
# [6.16.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.15.0...v6.16.0) (2018-08-14)


### Bug Fixes

* allow 300 lines files ([2c61a9f](https://github.com/foray1010/eslint-config-foray1010/commit/2c61a9f))


### Features

* upgrade to eslint-config-airbnb 17.1.0 ([8412bed](https://github.com/foray1010/eslint-config-foray1010/commit/8412bed))



<a name="6.15.0"></a>
# [6.15.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.14.1...v6.15.0) (2018-08-10)


### Bug Fixes

* disable no-process-exit ([fe202d6](https://github.com/foray1010/eslint-config-foray1010/commit/fe202d6))
* require eslint 5 ([4248263](https://github.com/foray1010/eslint-config-foray1010/commit/4248263))


### Features

* enable max-depth & max-lines ([0e2381c](https://github.com/foray1010/eslint-config-foray1010/commit/0e2381c))



<a name="6.14.1"></a>
## [6.14.1](https://github.com/foray1010/eslint-config-foray1010/compare/v6.14.0...v6.14.1) (2018-07-24)


### Bug Fixes

* move eslint-plugin-fp from devDependencies to dependencies ([a0a8c93](https://github.com/foray1010/eslint-config-foray1010/commit/a0a8c93))



<a name="6.14.0"></a>
# [6.14.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.12.1...v6.14.0) (2018-07-24)


### Bug Fixes

* allow block flow annotation ([0375c40](https://github.com/foray1010/eslint-config-foray1010/commit/0375c40))


### Features

* enable more flowtype rules ([e55bcaf](https://github.com/foray1010/eslint-config-foray1010/commit/e55bcaf))
* force all files must have flow annotation ([98e197c](https://github.com/foray1010/eslint-config-foray1010/commit/98e197c))
* upgrade to eslint-config-airbnb 17.0.0 ([0966b64](https://github.com/foray1010/eslint-config-foray1010/commit/0966b64))



<a name="6.13.0"></a>
# [6.13.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.12.1...v6.13.0) (2018-06-20)


### Features

* enable more flowtype rules ([e55bcaf](https://github.com/foray1010/eslint-config-foray1010/commit/e55bcaf))



<a name="6.12.1"></a>
## [6.12.1](https://github.com/foray1010/eslint-config-foray1010/compare/v6.12.0...v6.12.1) (2018-05-17)


### Bug Fixes

* disable flowtype/require-exact-type ([e008a3a](https://github.com/foray1010/eslint-config-foray1010/commit/e008a3a))
* disable node/no-unpublished-require ([c2e868b](https://github.com/foray1010/eslint-config-foray1010/commit/c2e868b))



<a name="6.12.0"></a>
# [6.12.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.11.0...v6.12.0) (2018-05-06)


### Bug Fixes

* **package:** update eslint-plugin-babel to version 5.0.0 ([#39](https://github.com/foray1010/eslint-config-foray1010/issues/39)) ([d3b1aa5](https://github.com/foray1010/eslint-config-foray1010/commit/d3b1aa5))


### Features

* add preset babel-node ([dda1cea](https://github.com/foray1010/eslint-config-foray1010/commit/dda1cea))
* use eslint-plugin-node to lint unsupported feature in node ([9662ac5](https://github.com/foray1010/eslint-config-foray1010/commit/9662ac5))



<a name="6.11.0"></a>
# [6.11.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.10.0...v6.11.0) (2018-03-30)


### Features

* **flowtype:** disable no-flow-fix-me-comments, no-mutable-array and require-exact-type ([670b93f](https://github.com/foray1010/eslint-config-foray1010/commit/670b93f))
* enable more ramda rules ([989202f](https://github.com/foray1010/eslint-config-foray1010/commit/989202f))



<a name="6.10.0"></a>
# [6.10.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.9.0...v6.10.0) (2018-03-29)


### Bug Fixes

* browser env setting should be located in rules/frontend ([2b09b7d](https://github.com/foray1010/eslint-config-foray1010/commit/2b09b7d))
* cannot run on vscode because its node version is <=7.9 ([dde9bd4](https://github.com/foray1010/eslint-config-foray1010/commit/dde9bd4))
* strict mode rule should be located in rules/es-module ([c200b1a](https://github.com/foray1010/eslint-config-foray1010/commit/c200b1a))


### Features

* allow using console such as console.error ([f31f36a](https://github.com/foray1010/eslint-config-foray1010/commit/f31f36a))
* do not allow using PureComponent if it contains just render method ([3a33075](https://github.com/foray1010/eslint-config-foray1010/commit/3a33075))



<a name="6.9.0"></a>
# [6.9.0](https://github.com/foray1010/eslint-config-foray1010/compare/v6.8.2...v6.9.0) (2018-03-27)


### Bug Fixes

* use airbnb/base to generate babel rules instead ([14f9635](https://github.com/foray1010/eslint-config-foray1010/commit/14f9635))


### Features

* add flow to react preset ([9795af4](https://github.com/foray1010/eslint-config-foray1010/commit/9795af4))
* remove jsx-a11y ([d2f6c72](https://github.com/foray1010/eslint-config-foray1010/commit/d2f6c72))
* support .mjs ([5a496fb](https://github.com/foray1010/eslint-config-foray1010/commit/5a496fb))
