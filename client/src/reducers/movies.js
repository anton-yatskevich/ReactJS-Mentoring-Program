import * as types from '../constants/ActionTypes';

const defaultState = {
    moviesList: [],
    selectedMovie: null
};

export default function moviesReducer(state = defaultState, action) {
    switch (action.type) {
    case types.FETCH_MOVIES:
        return {
            ...state,
            moviesList: action.payload
        };
    case types.SELECT_MOVIE:
        return {
            ...state,
            selectedMovie: action.payload
        };
    default:
        return state;
    }
}
