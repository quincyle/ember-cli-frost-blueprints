/**
 * Shared functions used in multiple blueprints
 */

'use strict'

const normalizeEntityName = require('ember-cli-normalize-entity-name')
const validComponentName = require('ember-cli-valid-component-name')
const path = require('path')

module.exports = {
  component: {
    fileMapTokens: {
      /**
       * @param {Object} options - the options for the ember generate command
       * @returns {String} the path for the component being generated
       */
      path (options) {
        if (options.locals.route) {
          return path.join(options.podPath, options.locals.route, '-components', options.dasherizedModuleName)
        } else if (options.pod) {
          return path.join(options.podPath, options.locals.path, options.dasherizedModuleName)
        }
        return 'components'
      },

      /**
       * @param {Object} options - the options for the ember generate command
       * @returns {String} the name of the js file for the component being generated
       */
      name: function (options) {
        if (options.pod || options.locals.route) {
          return 'component'
        }
        return options.dasherizedModuleName
      }
    },

    /**
     * Blueprint hook
     * @see {@link https://ember-cli.com/extending/#normalizeentityname}
     * @param {String} entityName - the requested name
     * @returns {String} the normalized, validated entity name (must be a valid component name)
     */
    normalizeEntityName (entityName) {
      entityName = normalizeEntityName(entityName)
      return validComponentName(entityName)
    }
  }
}
