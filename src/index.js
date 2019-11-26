import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import store from './store'
import Router from './router'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
