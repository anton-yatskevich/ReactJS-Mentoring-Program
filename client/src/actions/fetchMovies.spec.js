import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetchMovies, { recieveMovies } from './fetchMovies';
import { FETCH_MOVIES, RECIEVE_MOVIES } from '../constants/ActionTypes';

describe('recieveMovies action', () => {
    it('should create an action to recieve movies', () => {
        const movies = [{}, {}];
        const expectedAction = {
            type: RECIEVE_MOVIES,
            payload: movies
        };
        expect(recieveMovies(movies)).toEqual(expectedAction);
    });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchMovies action', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates RECIEVE_MOVIES when fetching movies has been done', () => {
        const response = [{ movie: 'first' }, { movie: 'second' }];
        fetchMock.getOnce('*', {
            data: response,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: FETCH_MOVIES },
            { type: RECIEVE_MOVIES, payload: response }
        ];
        const store = mockStore({
            searchParams: {
                searchField: 'searchField',
                sortField: 'sortField'
            },
            movies: {}
        });

        return store.dispatch(fetchMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
