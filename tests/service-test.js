/**
 * Mocha test for the service blueprints
 */

'use strict'

const itShouldGenerateCorrectly = require('./utils').itShouldGenerateCorrectly

itShouldGenerateCorrectly('service', ['foo-bar'], ['tests/unit/services/foo-bar-test.js'])
