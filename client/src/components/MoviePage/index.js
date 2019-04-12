import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../Movie';
import ResultsList from '../../containers/ResultsListContainer';
import MovieSchema from '../../constants/MovieSchema';
import './styles.scss';

const MoviePage = ({ selectedMovie }) => {
    const currentGenre = selectedMovie.genres && selectedMovie.genres[0];

    return (
        <>
            <Movie {...selectedMovie} />
            <div className="search-description__wrapper">
                <p className="movie-page__results-description">{`Films by ${currentGenre} genre`}</p>
            </div>
            <ResultsList />
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
