/**
 * To work properly with the URL
 * history.location generated polyfill in https://github.com/devote/HTML5-History-API
 */

module.exports = ('undefined' !== typeof window) && (window.history.location || window.location);
