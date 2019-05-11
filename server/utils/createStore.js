import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../client/src/reducers';

export default (req) => {
    const initialState = {
        movies: {
            moviesList: [],
            isLoading: false,
            selectedMovie: null,
            selectedMovieId: 0
        },
        searchParams: {
            searchField: 'title',
            sortField: 'rating',
            searchQuery: ''
        }
    };

    if (req.url.startsWith('/search/')) {
        const query = req.url.split('/search/')[1];
        initialState.searchParams.searchQuery = query;
    }

    if (req.url.startsWith('/film/')) {
        const filmId = req.url.split('/film/')[1];
        initialState.movies.selectedMovieId = filmId;
    }

    const store = createStore(reducer, initialState, applyMiddleware(thunk));

    return store;
};
