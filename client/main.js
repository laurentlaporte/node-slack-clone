import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { Router, Route, IndexRoute, History } from 'react-router'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App'
import AuthPage from './containers/AuthPage'
import ChatroomPage from './containers/ChatroomPage'

import configureStore from './store/configureStore'
const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

require("./styles/app.less");

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={AuthPage} />
        <Route path="chat" component={ChatroomPage} />
        <Route path="chat/:channel" component={ChatroomPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react')
)
