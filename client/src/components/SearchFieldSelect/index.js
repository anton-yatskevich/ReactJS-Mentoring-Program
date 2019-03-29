import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import Button from '../Button';
import './styles.scss';

const SearchFieldSelect = ({ onChangeSearchField, searchField }) => (
    <div className="search-field-select">
        <span className="search-field-select__title">Search by</span>
        <Button onClickHandler={onChangeSearchField} value="title" textValue="title" isActive={searchField === 'title'} className="search-field-select__button" />
        <Button onClickHandler={onChangeSearchField} value="genres" textValue="genre" isActive={searchField === 'genres'} className="search-field-select__button" />
    </div>
);

SearchFieldSelect.propTypes = {
    onChangeSearchField: PropTypes.func,
    searchField: PropTypes.string
};

SearchFieldSelect.defaultProps = {
    onChangeSearchField: noop,
    searchField: ''
};

export default SearchFieldSelect;
