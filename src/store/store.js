import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancers = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
const initialState = {}

const store = createStore(
    rootReducer, 
    initialState, 
    enhancers
);

sagaMiddleware.run(rootSaga)

export default store
