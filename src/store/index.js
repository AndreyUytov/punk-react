import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './../reducers'

// const loggerMiddleware = createLogger()

const middlewares = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store