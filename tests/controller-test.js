/**
 * Mocha test for the controller blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('controller', [
  'foo-bar'
])

itShouldGenerateCorrectly('controller-test', [
  'foo-bar'
])
