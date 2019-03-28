import React from 'react';
import PropTypes from 'prop-types';
import ResultsItem from './ResultsItem';

const ResultsList = ({ movies, onSelectMovieHandler }) => (
    <div className="results-item__container">
        {
            movies.map(item => (
                <ResultsItem {...item} key={item.id} onSelectHandler={onSelectMovieHandler} />))
        }
    </div>
);

ResultsList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.string)
        ])
    )),
    onSelectMovieHandler: PropTypes.func
};

ResultsList.defaultProps = {
    movies: [],
    onSelectMovieHandler: null
};

export default ResultsList;
