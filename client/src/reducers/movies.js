import * as types from '../constants/ActionTypes';

const localState = localStorage.getItem('redux-state');

const defaultState = (localState && JSON.parse(localState).movies) || {
    moviesList: [],
    isLoading: false,
    selectedMovie: null
};

export default function moviesReducer(state = defaultState, action) {
    switch (action.type) {
    case types.FETCH_MOVIES:
        return {
            ...state,
            isLoading: true
        };
    case types.RECIEVE_MOVIES:
        return {
            ...state,
            moviesList: action.payload,
            isLoading: false
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