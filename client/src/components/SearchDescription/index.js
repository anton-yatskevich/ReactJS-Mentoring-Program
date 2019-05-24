import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SortTypeSelect from '../../containers/SortTypeSelect';

const SearchDescription = ({ numberOfResults }) => (
    <Container>
        <Description>
            <p>{`${numberOfResults} movies found`}</p>
            <SortTypeSelect />
        </Description>
    </Container>
);

SearchDescription.propTypes = {
    numberOfResults: PropTypes.number
};

SearchDescription.defaultProps = {
    numberOfResults: 0
};

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    font-weight: 600;
`;

const Container = styled.div`
    width: 100%;
    background-color: rgb(209, 209, 209);
    padding: 10px 20px;
`;


export default SearchDescription;
