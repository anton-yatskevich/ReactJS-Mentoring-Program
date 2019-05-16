import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import ReactRouterPropTypes from 'react-router-prop-types';
import ResultsList from '../../containers/ResultsListContainer';
import SearchPanel from '../../containers/SearchPanel';
import SearchDescription from '../../components/SearchDescription';
import setSearchQuery from '../../actions/setSearchQuery';
import fetchMovies from '../../actions/fetchMovies';

class SearchPage extends Component {
    static fetchData({ dispatch }) {
        return dispatch(fetchMovies());
    }

    componentDidMount() {
        // const { match: { params }, setQuery, getMovies } = this.props;
        // const query = params.query || '';
        // setQuery(query);
        // getMovies();
    }

    render() {
        const { numberOfResults } = this.props;
        return (
            <>
                <SearchPanel />
                <SearchDescription numberOfResults={numberOfResults} />
                <ResultsList />
            </>
        );
    }
}

SearchPage.propTypes = {
    setQuery: PropTypes.func,
    getMovies: PropTypes.func,
    numberOfResults: PropTypes.number
};

SearchPage.defaultProps = {
    setQuery: noop,
    getMovies: noop,
    numberOfResults: 0
};

function mapStateToProps({ movies, searchParams }) {
    return {
        numberOfResults: movies.moviesList.length,
        searchQuery: searchParams.searchQuery
    };
}
export default connect(
    mapStateToProps,
    { setQuery: setSearchQuery, getMovies: fetchMovies }
)(SearchPage);
