import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as redux from 'redux';
import * as ReactRouter from 'react-router';

import * as ReduxSagaEffects from 'redux-saga/effects';
import * as ReduxSaga from 'redux-saga';


window['react-router'] = ReactRouter;
window['react-dom'] = ReactDOM;
window['redux'] = redux;
window['react'] = React;
window['redux-saga/effects'] = ReduxSagaEffects;
window['redux-saga'] = ReduxSaga;

