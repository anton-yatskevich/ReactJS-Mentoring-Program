import React from 'react';
import Movie from '../Movie';
import ResultsList from '../../containers/ResultsListContainer';
import MovieSchema from '../../constants/MovieSchema';
import './styles.scss';

const MoviePage = ({ selectedMovie }) => {
    if (selectedMovie) {
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
    }

    return null;
};

MoviePage.propTypes = {
    selectedMovie: MovieSchema
};

MoviePage.defaultProps = {
    selectedMovie: {}
};

export default MoviePage;
