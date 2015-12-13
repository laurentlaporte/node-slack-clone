import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, History } from 'react-router'
import { createHistory } from 'history'

import App from './containers/App'
import AuthPage from './containers/AuthPage'
import ChatroomPage from './containers/ChatroomPage'

import configureStore from './store/configureStore'
const store = configureStore()

const history = createHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={AuthPage} />
        <Route path="chat" component={ChatroomPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react')
)
