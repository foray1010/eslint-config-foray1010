'use strict'

const appRoot = require('app-root-path').toString()
const Config = require('eslint/lib/config')
const Linter = require('eslint/lib/linter')
const {applyExtends} = require('eslint/lib/config/config-file')

module.exports = (config) => {
  const configContext = new Config({}, new Linter())

  const extendedConfig = applyExtends(config, configContext, undefined, appRoot)

  // remove prop that cannot pass eslint json schema
  delete extendedConfig.baseDirectory
  delete extendedConfig.filePath
  delete extendedConfig.files

  console.log(JSON.stringify(extendedConfig, null, 2))

  return extendedConfig
}
