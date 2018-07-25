import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { addSound, getSounds } from './actions/sounds';

import './App.css'

import { Provider } from 'react-redux';

const store = getAppStore();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const template = (
    <Provider store={(store,reduxDevTools)}>
        <AppRouter />
    </Provider>
);

store.dispatch(getSounds()).then(() => {
    ReactDOM.render(template, document.getElementById('app'));
});
