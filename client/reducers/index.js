import { combineReducers } from 'redux'
import messages from './messages'
import user from './user'
import channels from './channels'

const rootReducer = combineReducers({
  messages,
  user,
  channels
})

export default rootReducer
