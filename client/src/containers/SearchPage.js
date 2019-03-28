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
        this.setState({
            results: this.movies
                .filter(movie => this.filterCallback(movie, value))
                .sort((a, b) => this.sortCallback(a, b))
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

    filterCallback(movie, searchValue) {
        const { searchField } = this.state;
        const field = movie[searchField];

        if (Array.isArray(field)) {
            return field.some(item => item.toLowerCase().indexOf(searchValue) !== -1);
        }
        return field.toLowerCase().indexOf(searchValue) !== -1;
    }

    sortCallback(a, b) {
        const { sortField } = this.state;

        switch (sortField) {
        case 'rating':
            return b.vote_average - a.vote_average;
        case 'release date':
            return Number(b.release_date.slice(0, 4)) - Number(a.release_date.slice(0, 4));
        default:
            return 0;
        }
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
    movies: null,
    onSelectMovie: null
};

export default SearchPage;
