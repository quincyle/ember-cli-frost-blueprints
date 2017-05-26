/**
 * Blueprint for generating an acceptance test for a feature in a frosty app/addon
 * NOTE: this is run in node, not in ember stack, so limited es6 is available
 * Taken primarily from
 * https://github.com/ember-cli/ember-cli-legacy-blueprints/blob/v0.1.4/blueprints/acceptance-test/index.js
 * and updated to use our styles and assume mocha (no need to support qunit)
 */

const testInfo = require('ember-cli-test-info')
const pathUtil = require('ember-cli-path-utils')
const stringUtils = require('ember-cli-string-utils')

module.exports = {
  description: 'Generates a frosty acceptance test for a feature.',

  locals (options) {
    let testFolderRoot = stringUtils.dasherize(options.project.name())

    if (options.project.isEmberCLIAddon()) {
      testFolderRoot = pathUtil.getRelativeParentPath(options.entity.name, -1, false)
    }

    const humanizedName = testInfo.humanize(options.entity.name)
    return {
      friendlyTestName: `Acceptance / ${humanizedName} /`,
      testFolderRoot
    }
  }
}
