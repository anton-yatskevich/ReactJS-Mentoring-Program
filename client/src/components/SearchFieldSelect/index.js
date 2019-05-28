import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import noop from 'lodash.noop';
import Button from '../Button';

const SearchFieldSelect = ({ setSearchField, searchField }) => (
    <div>
        <FieldTitle>Search by</FieldTitle>
        <Button onClickHandler={setSearchField} value="title" textValue="title" isActive={searchField === 'title'} />
        <Button onClickHandler={setSearchField} value="genres" textValue="genre" isActive={searchField === 'genres'} />
    </div>
);

SearchFieldSelect.propTypes = {
    setSearchField: PropTypes.func,
    searchField: PropTypes.string
};

SearchFieldSelect.defaultProps = {
    setSearchField: noop,
    searchField: ''
};

const FieldTitle = styled.span`
    text-transform: uppercase;
    font-size: 14px;
`;

export default SearchFieldSelect;
