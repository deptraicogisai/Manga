import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../saga';
import rootReducer from '../reducer'
import {createLogger} from 'redux-logger'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, createLogger())
)

// then run the saga
for (let name in mySaga) {
    sagaMiddleware.run(mySaga[name]);
}

export default store;