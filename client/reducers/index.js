import { combineReducers } from 'redux'
import messages from './messages'
import user from './user'

const rootReducer = combineReducers({
  messages,
  user
})

export default rootReducer
