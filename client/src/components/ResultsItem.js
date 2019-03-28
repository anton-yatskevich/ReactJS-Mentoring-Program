import React from 'react';
import PropTypes from 'prop-types';

const ResultsItem = ({
    poster_path: path, title, genres, id, release_date: date, onSelectHandler
}) => (
    <div className="results-item">
        <img className="results-item__poster" src={path} alt={title} role="presentation" onClick={() => onSelectHandler(id)} />
        <p className="results-item__description-header">
            <span className="results-item__title">{title}</span>
            <span className="results-item__date">{date.slice(0, 4)}</span>
        </p>
        <p>{genres.join(' & ')}</p>
    </div>
);

ResultsItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    onSelectHandler: PropTypes.func
};

ResultsItem.defaultProps = {
    poster_path: '',
    title: '',
    genres: [],
    id: 0,
    release_date: '',
    onSelectHandler: null
};

export default ResultsItem;
