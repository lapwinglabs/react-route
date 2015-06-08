# react-route

Simple, tiny router for React.

```jsx
<div className = 'Home'>
  <Route path = '/'>
    <div>Index /</div>
  </Route>
  <Route path = '/about'>
    About me
  </Route>
  <Route path = '/user/:user'>
    <User />
    <Route path = '/user/amy'>
      Hi amy!
    </Route>
  </Route>
</div>
```

## Features

- Parameter support via `props.params`
- Simple API for navigating pages
- HTML5 History Support
- No wrapping handlers
- Nesting

## Installation

```js
npm install react-route
```

## API

### `<Route path='...' />`

Specify an express-style path. For a list of possibilities check out: https://github.com/pillarjs/path-to-regexp

Any child components will receive a `params` property based on the pathname and keys provided.

```js
<p>
  Welcome user {this.props.params.user}
</p>
```

### Route.go(path)

Navigate to `path` and re-render the routes.

```js
onclick () {
  Route.go('/user/amy');
}
```

## License

MIT
