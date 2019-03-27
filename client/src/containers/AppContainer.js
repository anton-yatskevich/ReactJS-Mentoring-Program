import React, { Component } from 'react';
import Foooter from '../components/Footer';
import Header from '../components/Header';
import SearchPage from './SearchPage';
import MOVIES_DATA from '../constants/mockData.json';
import MoviePage from '../components/MoviePage';
import ErrorBoundary from './ErrorBoundary';

class AppContainer extends Component {
    constructor() {
        super();
        this.movies = MOVIES_DATA;
        this.onSelectMovie = this.onSelectMovie.bind(this);
        this.goToSearchHandler = this.goToSearchHandler.bind(this);
        this.state = {
            selectedMovie: null
        };
    }

    onSelectMovie(id) {
        const movie = this.movies.filter(item => item.id === id)[0];
        this.setState({
            selectedMovie: movie
        });
    }

    goToSearchHandler() {
        this.setState({
            selectedMovie: null
        });
    }

    render() {
        const { selectedMovie } = this.state;

        return (
            <ErrorBoundary>
                <Header
                    isSearchPage={selectedMovie === null}
                    goToSearchHandler={this.goToSearchHandler}
                />
                <main>
                    {
                        selectedMovie
                            ? (
                                <MoviePage
                                    movies={this.movies}
                                    selectedMovie={selectedMovie}
                                    onSelectMovie={this.onSelectMovie}
                                />
                            )
                            : <SearchPage movies={this.movies} onSelectMovie={this.onSelectMovie} />
                    }
                </main>
                <Foooter />
            </ErrorBoundary>
        );
    }
}

export default AppContainer;
