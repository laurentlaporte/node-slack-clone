import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {

  const createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware)(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
