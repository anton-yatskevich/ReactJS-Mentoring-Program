import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './src/containers/AppContainer';

const renderApp = () => {
    const container = document.getElementById('react-app');
    ReactDOM.render(
        <AppContainer />,
        container || document.createElement('div')
    );
};

renderApp();

export default renderApp;
