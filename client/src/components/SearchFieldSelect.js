import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const SearchFieldSelect = ({ onChangeSearchField, searchField }) => (
    <div className="search-fied-select">
        <span>SEARCH BY:</span>
        <Button onClickHandler={onChangeSearchField} textValue="title" searchField={searchField} />
        <Button onClickHandler={onChangeSearchField} textValue="genre" searchField={searchField} />
    </div>
);

SearchFieldSelect.propTypes = {
    onChangeSearchField: PropTypes.func,
    searchField: PropTypes.string
};

SearchFieldSelect.defaultProps = {
    onChangeSearchField: null,
    searchField: null
};

export default SearchFieldSelect;
