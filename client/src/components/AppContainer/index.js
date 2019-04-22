import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import noop from 'lodash.noop';
import Header from '../Header';
import SearchPage from '../SearchPage';
import MoviePage from '../../containers/MoviePageContainer';
import MovieSchema from '../../constants/MovieSchema';
import NotFound from '../NotFound';
import './styles.scss';

const AppContainer = ({ selectedMovie, selectMovie, numberOfResults }) => (
    <Router>
        <Header
            isSearchPage={selectedMovie === null}
            goToSearchHandler={selectMovie}
        />
        <main>
            <Switch>
                <Route path="/" exact component={() => <SearchPage numberOfResults={numberOfResults} />} />
                <Route path="/film/:id" component={MoviePage} />
                <Route path="" component={NotFound} />
            </Switch>
        </main>
        <footer>Copyright © 2019</footer>
    </Router>
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
