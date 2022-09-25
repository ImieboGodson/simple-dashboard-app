import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  rootReducer
} from './common/reducers/rootReducer'

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(Thunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
