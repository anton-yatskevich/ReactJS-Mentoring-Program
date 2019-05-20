import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/index';

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const createReduxStore = (initialState = {}) => (
    createStore(reducer, initialState, applyMiddleware(...middlewares))
);

export default createReduxStore;
