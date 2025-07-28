import { createStore, applyMiddleware, compose } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

export default () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  // const store = createStore(rootReducer, applyMiddleware(logger))
  return store;
}