import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import Movie from '../Movie';
import ResultsList from '../ResultsList';
import './styles.scss';

const MoviePage = ({ movies, selectedMovie, onSelectMovie }) => {
    const currentGenre = selectedMovie.genres && selectedMovie.genres[0];
    const fiteredResults = movies
        .filter(movie => movie.genres.some(genre => currentGenre === genre));

    return (
        <>
            <Movie {...selectedMovie} />
            <div className="search-description__wrapper">
                <p className="movie-page__results-description">{`Films by ${currentGenre} genre`}</p>
            </div>
            <ResultsList movies={fiteredResults} onSelectMovieHandler={onSelectMovie} />
        </>
    );
};

const movieSchema = PropTypes.objectOf(
    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string)
    ])
);

MoviePage.propTypes = {
    movies: PropTypes.arrayOf(movieSchema),
    selectedMovie: movieSchema,
    onSelectMovie: PropTypes.func
};

MoviePage.defaultProps = {
    movies: [],
    selectedMovie: {},
    onSelectMovie: noop
};

export default MoviePage;
