/**
 * Module Dependencies
 */

var location = require('./location');
var bus = require('./bus');

/**
 * Export `Go`
 */

module.exports = Go;

/**
 * Go
 */

function Go(path, state) {
  if (arguments.length) {
    window.history.pushState(state, null, path);
    bus.emit('pushstate', path);
  } else {
    var params = {};
    var m = match(location.pathname, params);
    return m && params;
  }
}

/**
 * Setup the "popstate" events
 */

function onpopstate() {
  var loaded = false;
  if ('undefined' === typeof window) return;
  if (document.readyState === 'complete') {
    loaded = true;
  } else {
    window.addEventListener('load', function() {
      setTimeout(function() {
        loaded = true;
      }, 0);
    });
  }

  return function _onpopstate(e) {
    if (!loaded) return;
    bus.emit('popstate', location.pathname);
  }
}

/**
 * Start listening for the "popstate" event
 */

window.addEventListener('popstate', onpopstate());
