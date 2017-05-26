/**
 * Mocha test for the helper blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('helper', ['foo-bar'], ['tests/unit/helpers/foo-bar-test.js'])
