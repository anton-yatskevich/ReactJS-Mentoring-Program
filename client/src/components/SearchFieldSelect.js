import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const SearchFieldSelect = ({ onChangeSearchField, searchField }) => (
    <div className="search-panel__field-select">
        <span className="search-panel__field-select-title">Search by</span>
        <Button onClickHandler={onChangeSearchField} value="title" textValue="title" searchField={searchField} />
        <Button onClickHandler={onChangeSearchField} value="genres" textValue="genre" searchField={searchField} />
    </div>
);

SearchFieldSelect.propTypes = {
    onChangeSearchField: PropTypes.func,
    searchField: PropTypes.string
};

SearchFieldSelect.defaultProps = {
    onChangeSearchField: null,
    searchField: ''
};

export default SearchFieldSelect;
