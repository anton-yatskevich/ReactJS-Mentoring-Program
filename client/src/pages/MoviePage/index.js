import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import noop from 'lodash.noop';
import MovieSchema from '../../constants/MovieSchema';
import { getSelectedMovie } from '../../actions/selectMovie';
import fetchMovies from '../../actions/fetchMovies';
import setSelectedMovieId from '../../actions/setSelectedMovieId';
import ResultsList from '../../containers/ResultsListContainer';
import Movie from '../../components/Movie';

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
                                    <Container>
                                        <Description>{`Films by ${selectedMovie.genres[0]} genre`}</Description>
                                    </Container>
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

const Container = styled.div`
    width: 100%;
    background-color: rgb(209, 209, 209);
    padding: 10px 20px;
`;

const Description = styled.p`
    max-width: 1200px;
    margin: 0 auto;
    font-size: 18px;
    font-weight: bold;
`;

export default connect(
    mapStateToProps,
    { fetchSelectedMovie: getSelectedMovie, setMovieId: setSelectedMovieId, getMovies: fetchMovies }
)(MoviePage);
