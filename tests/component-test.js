/**
 * Mocha test for the component blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('component', [
  'foo-bar',
  'foo-bar --pod',
  'foo-bar --pro',
  'foo-bar --route baz',
  'foo-bar --route baz --pro'
])

itShouldGenerateCorrectly('component-test', [
  'foo-bar',
  'foo-bar --unit',
  'foo-bar --pod',
  'foo-bar --route baz',
  'foo-bar --pod --route baz',
  'foo-bar --unit --pod',
  'foo-bar --unit --route baz'
])
