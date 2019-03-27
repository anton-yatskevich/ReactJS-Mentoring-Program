import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({
    poster_path: path, title, release_date: date, vote_average: rating, tagline, runtime, overview
}) => (
    <div className="movie-content">
        <img className="movie-content__poster" src={path} alt={title} />
        <div className="movie-content__description">
            <h2 className="movie-content__title">{title}</h2>
            <span>{rating}</span>
            <p>{tagline}</p>
            <p>
                <span>{date.slice(0, 4)}</span>
                <span>{`${runtime} min`}</span>
            </p>
            <p>{overview}</p>
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
    poster_path: null,
    title: null,
    tagline: null,
    runtime: null,
    overview: null,
    vote_average: null,
    release_date: null
};

export default Movie;
