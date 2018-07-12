import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { addSound, getSounds } from './actions/sounds';


import { Provider } from 'react-redux';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(getSounds()).then(() => {
    ReactDOM.render(template, document.getElementById('app'));
});
