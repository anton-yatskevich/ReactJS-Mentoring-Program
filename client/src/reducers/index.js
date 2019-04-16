import { combineReducers } from 'redux';
import moviesReducer from './movies';
import searchParamsReducer from './searchParams';

export default combineReducers({
    movies: moviesReducer,
    searchParams: searchParamsReducer
});
