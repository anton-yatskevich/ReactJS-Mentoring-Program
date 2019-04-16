import React from 'react';
import PropTypes from 'prop-types';
import ResultsList from '../../containers/ResultsListContainer';
import SearchPanel from '../../containers/SearchPanel';
import SearchDescription from '../SearchDescription';
import './styles.scss';

const SearchPage = ({ numberOfResults }) => (
    <>
        <SearchPanel />
        <SearchDescription numberOfResults={numberOfResults} />
        <ResultsList />
    </>
);

SearchPage.propTypes = {
    numberOfResults: PropTypes.number
};

SearchPage.defaultProps = {
    numberOfResults: 0
};

export default SearchPage;
