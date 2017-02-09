import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const __REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(
  reducer,
  __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);

// test our store is working and action is being dispatched...
// store.dispatch({ type: 'ADD_TODO', text: 'Feed Wilbur & Dasher'});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
