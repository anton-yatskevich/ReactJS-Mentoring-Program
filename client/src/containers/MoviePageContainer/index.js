import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import MoviePage from '../../components/MoviePage';
import MovieSchema from '../../constants/MovieSchema';
import { getSelectedMovie } from '../../actions/selectMovie';


export class MoviePageContainer extends Component {
    componentDidMount() {
        const { match, selectedMovie, fetchSelectedMovie } = this.props;
        const { params } = match;
        if (!selectedMovie && params.id) {
            fetchSelectedMovie(params.id);
        }
    }

    render() {
        return (
            <MoviePage {...this.props} />
        );
    }
}

MoviePageContainer.propTypes = {
    selectedMovie: MovieSchema,
    match: ReactRouterPropTypes.match.isRequired,
    fetchSelectedMovie: PropTypes.func
};

MoviePageContainer.defaultProps = {
    selectedMovie: {},
    fetchSelectedMovie: noop
};

function mapStateToProps({ movies }) {
    return {
        selectedMovie: movies.selectedMovie
    };
}

export default withRouter(
    connect(mapStateToProps, { fetchSelectedMovie: getSelectedMovie })(MoviePageContainer)
);
