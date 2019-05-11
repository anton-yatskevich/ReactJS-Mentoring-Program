import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import MovieSchema from '../../constants/MovieSchema';
import { getSelectedMovie } from '../../actions/selectMovie';
import setSelectedMovieId from '../../actions/setSelectedMovieId';
import ResultsList from '../../containers/ResultsListContainer';
import Movie from '../../components/Movie';
import './styles.scss';

class MoviePage extends Component {
    componentDidMount() {
        const { match: { params }, fetchSelectedMovie, setMovieId } = this.props;
        if (params.id) {
            setMovieId(params.id);
            fetchSelectedMovie();
        }
    }

    render() {
        const { selectedMovie } = this.props;

        return (
            <>
                {
                    selectedMovie && (
                        <>
                            <Movie {...selectedMovie} />
                            <div className="search-description__wrapper">
                                <p className="movie-page__results-description">{`Films by ${selectedMovie.genres[0]} genre`}</p>
                            </div>
                        </>
                    )
                }
                <ResultsList />
            </>
        );
    }
}

MoviePage.propTypes = {
    selectedMovie: MovieSchema,
    match: ReactRouterPropTypes.match.isRequired,
    fetchSelectedMovie: PropTypes.func,
    setMovieId: PropTypes.func
};

MoviePage.defaultProps = {
    selectedMovie: {},
    fetchSelectedMovie: noop,
    setMovieId: noop
};

function mapStateToProps({ movies }) {
    return {
        selectedMovie: movies.selectedMovie
    };
}

export default {
    component: connect(
        mapStateToProps,
        { fetchSelectedMovie: getSelectedMovie, setMovieId: setSelectedMovieId }
    )(MoviePage)
};
