import React from 'react';
import PropTypes from 'prop-types';
import SortTypeSelect from '../../containers/SortTypeSelect';
import './styles.scss';

const SearchDescription = ({ numberOfResults }) => (
    <div className="search-description__wrapper">
        <div className="search-description">
            <p className="search-description__info">{`${numberOfResults} movies found`}</p>
            <SortTypeSelect />
        </div>
    </div>
);

SearchDescription.propTypes = {
    numberOfResults: PropTypes.number
};

SearchDescription.defaultProps = {
    numberOfResults: 0
};

export default SearchDescription;
