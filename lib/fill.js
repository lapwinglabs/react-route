/**
 * Module Dependencies
 */

var Regexp = require('path-to-regexp')
var location = require('./location');

/**
 * Export `match`
 */

module.exports = match;

/**
 * Check if this route matches `path`, if so
 * populate `params`.
 *
 * @param {String} path
 * @param {Object} params
 * @return {Boolean}
 * @api private
 */

function match(path, params, pathname) {
  var keys = [];
  var regexp = Regexp(path, keys);
  var m = regexp.exec(pathname || location.pathname);

  if (!m) return false;
  else if (!params) return true;

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];
    var val = 'string' == typeof m[i] ? decodeURIComponent(m[i]) : m[i];
    if (key) params[key.name] = val;
  }

  return true;
}
