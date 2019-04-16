import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import Header from '../Header';
import SearchPage from '../SearchPage';
import MoviePage from '../../containers/MoviePageContainer';
import MovieSchema from '../../constants/MovieSchema';
import './styles.scss';

const AppContainer = ({ selectedMovie, selectMovie, numberOfResults }) => (
    <>
        <Header
            isSearchPage={selectedMovie === null}
            goToSearchHandler={selectMovie}
        />
        <main>
            {
                selectedMovie
                    ? <MoviePage />
                    : <SearchPage numberOfResults={numberOfResults} />
            }
        </main>
        <footer>Copyright © 2019</footer>
    </>
);

AppContainer.propTypes = {
    numberOfResults: PropTypes.number,
    selectedMovie: MovieSchema,
    selectMovie: PropTypes.func
};

AppContainer.defaultProps = {
    numberOfResults: 0,
    selectedMovie: {},
    selectMovie: noop
};


export default AppContainer;
