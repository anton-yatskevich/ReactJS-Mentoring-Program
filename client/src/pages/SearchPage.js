import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResultsList from '../containers/ResultsListContainer';
import SearchPanel from '../containers/SearchPanel';
import SearchDescription from '../components/SearchDescription';
import setSearchQuery from '../actions/setSearchQuery';
import fetchMovies from '../actions/fetchMovies';

class SearchPage extends Component {
    componentDidMount() {
        const { match: { params }, setQuery, getMovies } = this.props;
        const query = params.query || '';
        setQuery(query);
        getMovies();
    }

    render() {
        const { numberOfResults } = this.props;
        return (
            <>
                <Header />
                <main>
                    <SearchPanel />
                    <SearchDescription numberOfResults={numberOfResults} />
                    <ResultsList />
                </main>
                <Footer />
            </>
        );
    }
}

SearchPage.propTypes = {
    match: ReactRouterPropTypes.match.isRequired,
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

export default withRouter(
    connect(mapStateToProps, { setQuery: setSearchQuery, getMovies: fetchMovies })(SearchPage)
);
