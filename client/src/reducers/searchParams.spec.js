import * as types from '../constants/ActionTypes';
import searchParamsReducer from './searchParams';

describe('searchParams reducer', () => {
    it('should return the initial state', () => {
        expect(searchParamsReducer(undefined, {})).toEqual({
            searchField: 'title',
            sortField: 'rating'
        });
    });

    it('should handle SET_SEARCH_FIELD action', () => {
        expect(searchParamsReducer(undefined, { type: types.SET_SEARCH_FIELD, payload: 'genre' }))
            .toEqual({
                searchField: 'genre',
                sortField: 'rating'
            });
    });

    it('should handle SET_SORT_FIELD action', () => {
        expect(searchParamsReducer(undefined, { type: types.SET_SORT_FIELD, payload: 'release_date' }))
            .toEqual({
                searchField: 'title',
                sortField: 'release_date'
            });
    });

    it('should return state if action is not recognized', () => {
        expect(searchParamsReducer(undefined, { type: types.FETCH_MOVIES, payload: 'something' })).toEqual({
            searchField: 'title',
            sortField: 'rating'
        });
    });
});
