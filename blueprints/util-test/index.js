/**
 * Blueprint for generating a frosty util test
 */

'use strict'

const testInfo = require('ember-cli-test-info')
const stringUtils = require('ember-cli-string-utils')

module.exports = {
  description: 'Generates a frosty util unit test.',
  locals (options) {
    const humanizedName = testInfo.humanize(options.entity.name)
    return {
      friendlyTestName: `Unit / Utility / ${humanizedName} /`,
      dasherizedModulePrefix: stringUtils.dasherize(options.project.config().modulePrefix)
    }
  }
}
