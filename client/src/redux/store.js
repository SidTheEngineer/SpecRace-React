import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const finalCreateStore = compose(
  applyMiddleware(logger(), thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)


export default function configureStore() {
  return finalCreateStore(rootReducer, )
}
