import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../Movie';
import ResultsList from '../../containers/ResultsListContainer';
import MovieSchema from '../../constants/MovieSchema';
import './styles.scss';

const MoviePage = ({ movies, selectedMovie }) => {
    const currentGenre = selectedMovie.genres && selectedMovie.genres[0];
    const fiteredResults = movies
        .filter(movie => movie.genres.some(genre => currentGenre === genre));

    return (
        <>
            <Movie {...selectedMovie} />
            <div className="search-description__wrapper">
                <p className="movie-page__results-description">{`Films by ${currentGenre} genre`}</p>
            </div>
            <ResultsList movies={fiteredResults} />
        </>
    );
};

MoviePage.propTypes = {
    movies: PropTypes.arrayOf(MovieSchema),
    selectedMovie: MovieSchema
};

MoviePage.defaultProps = {
    movies: [],
    selectedMovie: {}
};

export default MoviePage;
