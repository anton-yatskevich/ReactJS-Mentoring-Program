import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import styled from 'styled-components';
import { Router } from '../../routes';
import fetchMovies from '../../actions/fetchMovies';
import setSearchQuery from '../../actions/setSearchQuery';
import SearchFieldSelect from '../SearchField';


export class SearchPanelComponent extends Component {
    handleChange = (event) => {
        const { setSearchQuery: setValue } = this.props;
        setValue(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchQuery, getMovies } = this.props;

        Router.pushRoute(`/search/${searchQuery}`);

        getMovies();
    }

    render() {
        const { searchQuery: value } = this.props;

        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Title>Find your movie</Title>
                    <Input type="text" value={value} onChange={this.handleChange} placeholder="Search..." />
                    <Controls>
                        <SearchFieldSelect />
                        <SubmitButton type="submit" value="Search" />
                    </Controls>
                </Form>
            </Container>
        );
    }
}

SearchPanelComponent.propTypes = {
    getMovies: PropTypes.func,
    setSearchQuery: PropTypes.func,
    searchQuery: PropTypes.string
};

SearchPanelComponent.defaultProps = {
    getMovies: noop,
    setSearchQuery: noop,
    searchQuery: ''
};

function mapStateToProps({ searchParams }) {
    return {
        searchQuery: searchParams.searchQuery
    };
}

const SubmitButton = styled.input`
    padding: 8px 30px;
    font-size: 18px;
    text-transform: uppercase;
    background-color: rgb(160, 0, 0);
    border: none;
    color: white;
    text-decoration: none;
    cursor: pointer;
`;

const Container = styled.div`
    width: 100%;
    background-color: rgb(146, 133, 133);
    padding: 40px 20px;
    color: #ffffff;
`;

const Form = styled.form`
    max-width: 1200px;
    margin: 0 auto;
`;

const Title = styled.p`
    font-size: 30px;
    text-transform: uppercase;
`;

const Input = styled.input`
    width: 100%;    
    font-size: 20px;
    padding: 6px 10px;
    margin: 10px 0;
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default withRouter(
    connect(mapStateToProps, { getMovies: fetchMovies, setSearchQuery })(SearchPanelComponent)
);
