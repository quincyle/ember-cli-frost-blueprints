/**
 * Mocha test for the acceptance test blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('acceptance-test', [
  'foo-bar'
])
