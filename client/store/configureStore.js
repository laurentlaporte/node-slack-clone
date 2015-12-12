import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
