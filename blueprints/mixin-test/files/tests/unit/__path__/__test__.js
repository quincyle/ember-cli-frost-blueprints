/**
 * Unit test for the <%= dasherizedModuleName %> mixin
 */

import EmberObject from '@ember/object'
import {expect} from 'chai'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

import <%= classifiedModuleName %>Mixin from '<%= dasherizedPackageName %>/mixins/<%= dasherizedModuleName %>'

describe('Unit / Mixin / <%= dasherizedModuleName %> /', function () {
  let sandbox, subject

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    subject = EmberObject.extend(<%= classifiedModuleName %>Mixin).create()
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('should exist', function () {
    expect(subject).not.to.equal(undefined)
  })

  it('should have real tests', function () {
    expect(true).to.equal(false)
  })
})
