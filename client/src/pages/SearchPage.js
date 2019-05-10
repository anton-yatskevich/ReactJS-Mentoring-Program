import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResultsList from '../containers/ResultsListContainer';
import SearchPanel from '../containers/SearchPanel';
import SearchDescription from '../components/SearchDescription';

export class SearchPage extends Component {
    componentDidMount() {

    }

    render() {
        const { numberOfResults } = this.props;
        return (
            <>
                <Header isSearchPage />
                <SearchPanel />
                <SearchDescription numberOfResults={numberOfResults} />
                <ResultsList />
                <Footer />
            </>
        );
    }
}

SearchPage.propTypes = {
};

SearchPage.defaultProps = {
};

function mapStateToProps({ movies }) {
    return {
        numberOfResults: movies.moviesList.length
    };
}

export default withRouter(
    connect(mapStateToProps, null)(SearchPage)
);
