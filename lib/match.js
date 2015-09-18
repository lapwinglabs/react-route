/**
 * Module Dependencies
 */

var fill = require('./fill')

/**
 *
 */

module.exports = match

/**
 * Match against a path
 */

function match (path, location) {
  location = location || window.location.pathname
  var params = {}
  return fill(path, params, location) && params
}
