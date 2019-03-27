import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './src/containers/AppContainer';
import './src/styles/index.scss';

const container = document.getElementById('react-app');
if (container) ReactDOM.render(<AppContainer />, container);
