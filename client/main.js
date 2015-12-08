import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('react')
)
