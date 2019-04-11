import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import Header from '../Header';
import SearchPage from '../../containers/SearchPage';
import MOVIES_DATA from '../../constants/mockData.json';
import MoviePage from '../../containers/MoviePageContainer';
import MovieSchema from '../../constants/MovieSchema';
import './styles.scss';

const AppContainer = ({ selectedMovie, selectMovie }) => (
    <>
        <Header
            isSearchPage={selectedMovie === null}
            goToSearchHandler={selectMovie}
        />
        <main>
            {
                selectedMovie
                    ? <MoviePage movies={MOVIES_DATA} />
                    : <SearchPage movies={MOVIES_DATA} onSelectMovie={selectMovie} />
            }
        </main>
        <footer>Copyright © 2019</footer>
    </>
);

AppContainer.propTypes = {
    selectedMovie: MovieSchema,
    selectMovie: PropTypes.func
};

AppContainer.defaultProps = {
    selectedMovie: {},
    selectMovie: noop
};


export default AppContainer;
