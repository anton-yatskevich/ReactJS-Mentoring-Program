import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import noop from 'lodash.noop';
import HomePage from '../../pages/HomePage';
import Header from '../Header';
import SearchPage from '../SearchPage';
import MoviePage from '../../containers/MoviePageContainer';
import MovieSchema from '../../constants/MovieSchema';
import SearchPanel from '../../containers/SearchPanel';
import NotFound from '../NotFound';
import './styles.scss';

const AppContainer = ({ selectedMovie, selectMovie, numberOfResults }) => (
    <Router>
        {/* <Header
            isSearchPage={selectedMovie === null}
            goToSearchHandler={selectMovie}
        /> */}
        {/* <main> */}
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search/:query?" component={() => <SearchPage numberOfResults={numberOfResults} />} />
            <Route path="/film/:id" component={MoviePage} />
            <Route path="" component={NotFound} />
        </Switch>
        {/* </main> */}
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
