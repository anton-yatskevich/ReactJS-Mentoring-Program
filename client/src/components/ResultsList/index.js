import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import ResultsItem from '../ResultsItem';
import MovieSchema from '../../constants/MovieSchema';
import './styles.scss';

const ResultsList = ({ movies, selectMovie }) => (
    <div className="results__container">
        {
            movies.map(item => (
                <ResultsItem movie={item} key={item.id} onSelectHandler={selectMovie} />))
        }
    </div>
);

ResultsList.propTypes = {
    movies: PropTypes.arrayOf(MovieSchema),
    selectMovie: PropTypes.func
};

ResultsList.defaultProps = {
    movies: [],
    selectMovie: noop
};

export default ResultsList;
