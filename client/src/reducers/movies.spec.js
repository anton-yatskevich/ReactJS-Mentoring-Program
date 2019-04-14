import moviesReducer from './movies';
import * as types from '../constants/ActionTypes';

describe('Movies reducer', () => {
    it('should return the initial state', () => {
        expect(moviesReducer(undefined, {})).toEqual({
            moviesList: [],
            isLoading: false,
            selectedMovie: null
        });
    });

    it('should handle FETCH_MOVIES action', () => {
        expect(moviesReducer(undefined, { type: types.FETCH_MOVIES }))
            .toEqual({
                moviesList: [],
                isLoading: true,
                selectedMovie: null
            });
    });

    it('should handle RECIEVE_MOVIES action', () => {
        expect(moviesReducer(undefined, { type: types.RECIEVE_MOVIES, payload: [{}, {}] }))
            .toEqual({
                moviesList: [{}, {}],
                isLoading: false,
                selectedMovie: null
            });
    });

    it('should handle SELECT_MOVIE action', () => {
        expect(moviesReducer(undefined, { type: types.SELECT_MOVIE, payload: { movie: 'selected' } }))
            .toEqual({
                moviesList: [],
                isLoading: false,
                selectedMovie: { movie: 'selected' }
            });
    });

    it('should return state if action is not recognized', () => {
        expect(moviesReducer(
            { moviesList: [{}], isLoading: true, selectedMovie: { movie: 'selected' } },
            { type: types.SET_SEARCH_FIELD }
        )).toEqual({
            moviesList: [{}],
            isLoading: true,
            selectedMovie: { movie: 'selected' }
        });
    });
});
