import React from 'react';
import { withRouter } from 'next/router';
import MovieSchema from '../../constants/MovieSchema';
import { Router } from '../../routes';
import './styles.scss';

const ResultsItem = ({ movie }) => {
    const {
        poster_path: path, title, genres, release_date: date
    } = movie;

    return (
        <div className="results-item">
            <img className="results-item__poster" src={path} alt={title} role="presentation" onClick={() => Router.pushRoute(`/film/${movie.id}`)} />
            <p className="results-item__description-header">
                <span className="results-item__title">{title}</span>
                <span className="results-item__date">{date && date.slice(0, 4)}</span>
            </p>
            <p>{genres && genres.join(' & ')}</p>
        </div>
    );
};

ResultsItem.propTypes = {
    movie: MovieSchema
};

ResultsItem.defaultProps = {
    movie: {}
};

export default withRouter(ResultsItem);
