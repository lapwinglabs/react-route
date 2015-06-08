/**
 * Module Dependencies
 */

var assign = require('object-assign');
var match = require('./match');
var React = require('react');
var bus = require('./bus');

/**
 * Export `Route`
 */

module.exports = React.createClass({

  displayName: 'Route',

  setInitialState: function () {
    return {
      pathname: location.pathname
    }
  },

  componentDidMount: function () {
    var self = this;

    bus.on('pushstate', function(pathname) {
      console.log('pushing...', pathname);
      self.setState({ pathname: pathname });
    })

    bus.on('popstate', function(pathname) {
      console.log('popping...', pathname);
      self.setState({ pathname: pathname });
    })
  },

  render: function(props) {
    console.log('props', props);
    var props = this.props;
    var path = props.path;
    var params = {};
    var m = match(path, params);
    if (!m) return null;

    var children = React.Children.map(this.props.children, function(child) {
      return child.type
        ? React.cloneElement(child, assign({ params: params }, child.props))
        : React.createElement('span', {}, child);
    })

    return React.createElement('div', { className: 'Route'}, children);
  }
});