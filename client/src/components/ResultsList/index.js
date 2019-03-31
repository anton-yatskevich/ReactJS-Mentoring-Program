import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import ResultsItem from '../ResultsItem';
import './styles.scss';

const ResultsList = ({ movies, onSelectMovieHandler }) => (
    <div className="results__container">
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
    onSelectMovieHandler: noop
};

export default ResultsList;
