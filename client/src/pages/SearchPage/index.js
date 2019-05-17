import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import ResultsList from '../../containers/ResultsListContainer';
import SearchPanel from '../../containers/SearchPanel';
import SearchDescription from '../../components/SearchDescription';
import setSearchQuery from '../../actions/setSearchQuery';
import fetchMovies from '../../actions/fetchMovies';

class SearchPage extends Component {
    static async getInitialProps({ store, query: { query } }) {
        store.dispatch(setSearchQuery(query));
        await store.dispatch(fetchMovies());
    }

    componentDidMount() {
        const {
            router: { query: { query } },
            setQuery,
            getMovies
        } = this.props;

        setQuery(query);
        getMovies();
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
    numberOfResults: PropTypes.number,
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object.isRequired
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
