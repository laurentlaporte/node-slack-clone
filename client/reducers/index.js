import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import messages from './messages'
import user from './user'
import channels from './channels'

const rootReducer = combineReducers({
  messages,
  user,
  channels,
  routing: routerReducer
})

export default rootReducer
