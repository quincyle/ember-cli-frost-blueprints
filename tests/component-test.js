/**
 * Mocha test for the component blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('component', [
  'foo-bar',
  'foo-bar --pod'
])

itShouldGenerateCorrectly('component-test', [
  'foo-bar',
  'foo-bar --unit',
  'foo-bar --pod',
  'foo-bar --unit --pod'
])
