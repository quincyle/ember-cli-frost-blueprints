/**
 * Mocha test for the model blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('model-test', [
  'foo-bar'
])
