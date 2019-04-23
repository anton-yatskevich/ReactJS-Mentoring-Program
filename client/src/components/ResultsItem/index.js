import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import MovieSchema from '../../constants/MovieSchema';
import './styles.scss';

const ResultsItem = ({ movie, onSelectHandler, history }) => {
    const {
        poster_path: path, title, genres, release_date: date
    } = movie;

    return (
        <div className="results-item">
            <img className="results-item__poster" src={path} alt={title} role="presentation" onClick={() => { onSelectHandler(movie); history.push(`/film/${movie.id}`); }} />
            <p className="results-item__description-header">
                <span className="results-item__title">{title}</span>
                <span className="results-item__date">{date && date.slice(0, 4)}</span>
            </p>
            <p>{genres && genres.join(' & ')}</p>
        </div>
    );
};

ResultsItem.propTypes = {
    movie: MovieSchema,
    onSelectHandler: PropTypes.func,
    history: ReactRouterPropTypes.history.isRequired
};

ResultsItem.defaultProps = {
    movie: {},
    onSelectHandler: noop
};

export default withRouter(ResultsItem);
