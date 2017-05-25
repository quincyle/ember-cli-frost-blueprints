/**
 * Mocha test for the route blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('route-test', [
  'foo-bar'
])
