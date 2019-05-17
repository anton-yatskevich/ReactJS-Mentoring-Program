import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import MovieSchema from '../../constants/MovieSchema';
import { getSelectedMovie } from '../../actions/selectMovie';
import fetchMovies from '../../actions/fetchMovies';
import setSelectedMovieId from '../../actions/setSelectedMovieId';
import ResultsList from '../../containers/ResultsListContainer';
import Movie from '../../components/Movie';
import './styles.scss';

class MoviePage extends Component {
    static async getInitialProps({ store, query: { id } }) {
        store.dispatch(setSelectedMovieId(id));
        await store.dispatch(getSelectedMovie());
        await store.dispatch(fetchMovies());
    }

    componentDidMount() {
        const {
            router: { query: { id } },
            fetchSelectedMovie,
            setMovieId,
            getMovies
        } = this.props;
        if (id) {
            setMovieId(id);
            fetchSelectedMovie();
            getMovies();
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
                            {
                                selectedMovie.genres && (
                                    <div className="search-description__wrapper">
                                        <p className="movie-page__results-description">{`Films by ${selectedMovie.genres[0]} genre`}</p>
                                    </div>
                                )
                            }
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
    fetchSelectedMovie: PropTypes.func,
    setMovieId: PropTypes.func,
    getMovies: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object.isRequired
};

MoviePage.defaultProps = {
    selectedMovie: {},
    fetchSelectedMovie: noop,
    setMovieId: noop,
    getMovies: noop
};

function mapStateToProps({ movies }) {
    return {
        selectedMovie: movies.selectedMovie
    };
}

export default connect(
    mapStateToProps,
    { fetchSelectedMovie: getSelectedMovie, setMovieId: setSelectedMovieId, getMovies: fetchMovies }
)(MoviePage);
