import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/reducers/index';
import AppComponent from './src/containers/AppContainer';

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = createStore(reducer, applyMiddleware(...middlewares));

const renderApp = () => {
    const container = document.getElementById('react-app');
    ReactDOM.render(
        <Provider store={store}>
            <AppComponent />
        </Provider>,
        container || document.createElement('div')
    );
};

renderApp();

export default renderApp;
