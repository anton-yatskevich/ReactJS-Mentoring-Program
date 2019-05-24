import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import noop from 'lodash.noop';
import ResultsItem from '../ResultsItem';
import MovieSchema from '../../constants/MovieSchema';

const ResultsList = ({ movies, selectMovie }) => (
    <Container>
        {
            movies.map(item => (
                <ResultsItem movie={item} key={item.id} onSelectHandler={selectMovie} />))
        }
    </Container>
);

ResultsList.propTypes = {
    movies: PropTypes.arrayOf(MovieSchema),
    selectMovie: PropTypes.func
};

ResultsList.defaultProps = {
    movies: [],
    selectMovie: noop
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-around;
    padding: 40px 0;
`;

export default ResultsList;
