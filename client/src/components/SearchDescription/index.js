import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import SortTypeSelect from '../SortTypeSelect';
import './styles.scss';

const SearchDescription = ({ numberOfResults, sortField, onChangeSort }) => (
    <div className="search-description__wrapper">
        <div className="search-description">
            <p className="search-description__info">{`${numberOfResults} movies found`}</p>
            <SortTypeSelect sortField={sortField} onChangeSort={onChangeSort} />
        </div>
    </div>
);

SearchDescription.propTypes = {
    numberOfResults: PropTypes.number,
    sortField: PropTypes.string,
    onChangeSort: PropTypes.func
};

SearchDescription.defaultProps = {
    numberOfResults: 0,
    sortField: '',
    onChangeSort: noop
};

export default SearchDescription;
