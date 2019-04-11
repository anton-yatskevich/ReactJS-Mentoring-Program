import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/index';
import AppComponent from './src/containers/AppContainer';

const store = createStore(reducer);

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
