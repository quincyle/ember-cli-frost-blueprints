/**
 * Blueprint for generating a frost component
 * NOTE: this is run in node, not in ember stack, so limited es6 is available
 */

'use strict'

const getPathOption = require('ember-cli-get-component-path-option')
const pathUtil = require('ember-cli-path-utils')
const stringUtil = require('ember-cli-string-utils')
const path = require('path')

const utils = require('../utils')

module.exports = {
  description: 'Generates a frost component. Name must contain a hyphen.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: 'components',
      aliases: [
        {'no-path': ''}
      ]
    },
    {
      name: 'route',
      type: String,
      default: '',
      description: 'Route to nest component under (for use with ember-local-resolver) pods is assumed'
    },
    {
      name: 'pro',
      type: Boolean,
      description: 'Skip instructional comments and examples (you know what you\'re doing)'
    }
  ],

  /**
   * Blueprint hook
   * @see {@link https://ember-cli.com/extending/#filemaptokens}
   *
   * @returns {Object} custom tokens to be replaced in your files
   */
  fileMapTokens () {
    return {
      __name__: utils.component.fileMapTokens.name,
      __path__: utils.component.fileMapTokens.path,

      /**
       * @param {Object} options - the options for the ember generate command
       * @returns {String} the path for the template of the component being generated
       */
      __templatepath__: function (options) {
        if (options.locals.route) {
          return path.join(options.podPath, options.locals.route, '-components', options.dasherizedModuleName)
        } else if (options.pod) {
          return path.join(options.podPath, options.locals.path, options.dasherizedModuleName)
        }
        return 'templates/components'
      },

      /**
       * @param {Object} options - the options for the ember generate command
       * @returns {String} the name of the template file for the component being generated
       */
      __templatename__: function (options) {
        if (options.pod || options.locals.route) {
          return 'template'
        }
        return options.dasherizedModuleName
      }
    }
  },

  /**
   * Blueprint hook
   * @see {@link https://ember-cli.com/extending/#locals}
   * @param {Object} options - the options for the ember generate command
   * @returns {Object|Promise} a set of custom template variables or a Promise that resolves with the set
   */
  locals (options) {
    let templatePath = ''
    if (options.project.isEmberCLIAddon() || !options.inDummy) {
      if (options.pod) {
        templatePath = './template'
      } else {
        const relativeParentPath = pathUtil.getRelativeParentPath(options.entity.name)
        const dasherizedModuleName = stringUtil.dasherize(options.entity.name)
        templatePath = path.join(relativeParentPath, 'templates', 'components', dasherizedModuleName)
      }
    }
    return {
      route: options.route,
      path: getPathOption(options),
      pro: options.pro,
      templatePath
    }
  },

  normalizeEntityName: utils.component.normalizeEntityName
}
