import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducer'
import {AdvertisementRequest} from "../saga/advertisement-saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(AdvertisementRequest);

export default store;