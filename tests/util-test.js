/**
 * Mocha test for the util blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('util', ['foo-bar'], ['tests/unit/utils/foo-bar-test.js'])
