/**
 * Mocha test for the mixin blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('mixin', [
  'foo-bar'
])

itShouldGenerateCorrectly('mixin-test', [
  'foo-bar'
])
