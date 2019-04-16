import { createSelector } from 'reselect';
import sortHelper from '../utils/sortHelper';

const getMovies = state => state.movies.moviesList;
const getSortOrder = state => state.searchParams.sortField;

const getSortedMovies = createSelector(
    [getMovies, getSortOrder],
    (movies, sortField) => (
        sortHelper(movies, sortField)
    )
);

export default getSortedMovies;
