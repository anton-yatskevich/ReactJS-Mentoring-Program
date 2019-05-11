import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './src/reducers/index';
import routes from './src/routes';

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = createStore(reducer, window.INITIAL_STATE, applyMiddleware(...middlewares));

const renderApp = () => {
    const container = document.getElementById('react-app');
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <div>{renderRoutes(routes)}</div>
            </BrowserRouter>
        </Provider>,
        container || document.createElement('div')
    );
};

renderApp();

export default renderApp;
