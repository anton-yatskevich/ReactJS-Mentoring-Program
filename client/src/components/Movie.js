import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({
    poster_path: path, title, release_date: date, vote_average: rating, tagline, runtime, overview
}) => (
    <div className="movie-content__wrapper">
        <div className="movie-content">
            <img className="movie-content__poster" src={path} alt={title} />
            <div className="movie-content__description">
                <h2 className="movie-content__title">{title}</h2>
                <span className="movie-content__rating">{rating}</span>
                <p className="movie-content__paragraph">{tagline}</p>
                <p className="movie-content__paragraph movie-content__paragraph--bold">
                    <span>{date.slice(0, 4)}</span>
                    <span>{`${runtime} min`}</span>
                </p>
                <p className="movie-content__paragraph">{overview}</p>
            </div>
        </div>
    </div>
);

Movie.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    release_date: PropTypes.string
};

Movie.defaultProps = {
    poster_path: '',
    title: '',
    tagline: '',
    runtime: 0,
    overview: '',
    vote_average: 0,
    release_date: ''
};

export default Movie;
