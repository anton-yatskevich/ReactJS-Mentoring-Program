import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './src/containers/AppContainer';

const container = document.getElementById('react-app');
if (container) ReactDOM.render(<AppContainer />, container);
