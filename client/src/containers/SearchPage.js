import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResultsList from '../components/ResultsList';
import SearchPanel from './SearchPanel';
import SearchDescription from '../components/SearchDescription';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.movies = props.movies;
        this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
        this.onChangeSearchField = this.onChangeSearchField.bind(this);
        this.onChangeSort = this.onChangeSort.bind(this);
        this.state = {
            results: [],
            searchField: 'title',
            sortField: 'rating'
        };
    }

    onSearchFormSubmit(value) {
        const { searchField } = this.state;
        this.setState({
            results: this.movies
                .filter(movie => movie[searchField].toLowerCase().indexOf(value) !== -1)
        });
    }

    onChangeSearchField(value) {
        this.setState({
            searchField: value
        });
    }

    onChangeSort(value) {
        this.setState({
            sortField: value
        });
    }

    render() {
        const { searchField, sortField, results } = this.state;
        const { onSelectMovie } = this.props;

        return (
            <>
                <SearchPanel
                    searchField={searchField}
                    sortField={sortField}
                    onSubmit={this.onSearchFormSubmit}
                    onChangeSearchField={this.onChangeSearchField}
                    onChangeSort={this.onChangeSort}
                />
                <SearchDescription
                    numberOfResults={results.length}
                    sortField={sortField}
                    onChangeSort={this.onChangeSort}
                />
                <ResultsList movies={results} onSelectMovieHandler={onSelectMovie} />
            </>
        );
    }
}

SearchPage.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.string)
        ])
    )),
    onSelectMovie: PropTypes.func
};

SearchPage.defaultProps = {
    movies: null,
    onSelectMovie: null
};

export default SearchPage;
