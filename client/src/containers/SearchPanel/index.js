import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import { Router } from '../../routes';
import fetchMovies from '../../actions/fetchMovies';
import setSearchQuery from '../../actions/setSearchQuery';
import SearchFieldSelect from '../SearchField';
import './styles.scss';

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
            <div className="search-panel">
                <form className="search-panel__form" onSubmit={this.handleSubmit}>
                    <p className="search-panel__title">Find your movie</p>
                    <input className="search-panel__input" type="text" value={value} onChange={this.handleChange} placeholder="Search..." />
                    <div className="search-panel__controls">
                        <SearchFieldSelect />
                        <input className="search-panel__button--submit" type="submit" value="Search" />
                    </div>
                </form>
            </div>
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

export default withRouter(
    connect(mapStateToProps, { getMovies: fetchMovies, setSearchQuery })(SearchPanelComponent)
);
