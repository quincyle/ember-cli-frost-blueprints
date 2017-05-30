/**
 * Blueprint for generating a frosty util test
 */

'use strict'

const testInfo = require('ember-cli-test-info')
const stringUtils = require('ember-cli-string-utils')

module.exports = {
  description: 'Generates a frosty util unit test.',
  locals (options) {
    return {
      friendlyTestName: `Unit / Utility / ${testInfo.name(options.entity.name)} /`,
      dasherizedModulePrefix: stringUtils.dasherize(options.project.config().modulePrefix)
    }
  }
}
