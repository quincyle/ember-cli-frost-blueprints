import {expect} from 'chai'
import {afterEach, beforeEach, describe, it} from 'mocha'

import destroyApp from '../helpers/destroy-app'
import startApp from '../helpers/start-app'

describe('<%= friendlyTestName %>', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
    application = null
  })

  it('should have real tests', function () {
    expect(false).to.equal(true)
  })

  describe('when visiting /<%= dasherizedModuleName %>', function () {
    beforeEach(function () {
      return visit('/<%= dasherizedModuleName %>')
    })

    it('should have the proper URL', function () {
      expect(currentURL()).to.equal('/<%= dasherizedModuleName %>')
    })
  })
})
