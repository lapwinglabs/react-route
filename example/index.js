/**
 * Module Dependencies
 */

var React = require('react')
var Route = require('..')

/**
 * Example Component
 */

export default class Example extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="Route">
        <Route path='/'>
          <h2>index</h2>
        </Route>
        <Route path='/dashboard'>
          <h2>dashboard</h2>
        </Route>
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  var component = React.createElement(Example, {})
  React.render(component, document.body)
}
