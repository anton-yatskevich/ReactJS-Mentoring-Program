import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './src/components/presentational/SearchPage';
import './src/styles/index.scss';

const container = document.getElementById('react-app');
container ? ReactDOM.render(<SearchPage />, container) : false;
