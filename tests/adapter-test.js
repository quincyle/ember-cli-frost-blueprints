/**
 * Mocha test for the adapter blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('adapter-test', [
  'foo-bar'
])
