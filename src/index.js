import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <App />,
  rootElement
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // If using Webpack 2 with ES modules mode, you can
    //  use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp />,
      rootElement
    )
  })
}
