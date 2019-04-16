import selectMovie from './selectMovie';
import { SELECT_MOVIE } from '../constants/ActionTypes';

describe('selectMovie action', () => {
    it('should create an action select movie', () => {
        const movie = {};
        const expectedAction = {
            type: SELECT_MOVIE,
            payload: movie
        };
        expect(selectMovie(movie)).toEqual(expectedAction);
    });
});
