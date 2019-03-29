import React, { Component } from 'react';
import Header from '../../components/Header';
import SearchPage from '../SearchPage';
import MOVIES_DATA from '../../constants/mockData.json';
import MoviePage from '../../components/MoviePage';
import ErrorHandlerComponent from '../ErrorBoundary';
import './styles.scss';

class AppContainer extends Component {
    state = {
        selectedMovie: null
    };

    movies = MOVIES_DATA;

    onSelectMovie = (id) => {
        const movie = this.movies.find(item => item.id === id);
        this.setState({
            selectedMovie: movie
        });
    }

    goToSearchHandler = () => {
        this.setState({
            selectedMovie: null
        });
    }

    render() {
        const { selectedMovie } = this.state;

        return (
            <>
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
                <footer>Copyright © 2019</footer>
            </>
        );
    }
}

export default ErrorHandlerComponent(AppContainer);
