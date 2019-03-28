import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResultsList from '../components/ResultsList';
import SearchPanel from './SearchPanel';
import SearchDescription from '../components/SearchDescription';

import { sortMoviesComporator, filterMoviesComporator } from '../utils';

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
        const { searchField, sortField } = this.state;

        this.setState({
            results: this.movies
                .filter(movie => filterMoviesComporator(movie, value, searchField))
                .sort((a, b) => sortMoviesComporator(a, b, sortField))
        });
    }

    onChangeSearchField(value) {
        this.setState({
            searchField: value
        });
    }

    onChangeSort(sortField) {
        const { results } = this.state;

        this.setState({
            sortField,
            results: results
                .sort((a, b) => sortMoviesComporator(a, b, sortField))
        });
    }

    render() {
        const { searchField, sortField, results } = this.state;
        const { onSelectMovie } = this.props;

        return (
            <>
                <SearchPanel
                    searchField={searchField}
                    onSubmit={this.onSearchFormSubmit}
                    onChangeSearchField={this.onChangeSearchField}
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
    movies: [],
    onSelectMovie: null
};

export default SearchPage;
