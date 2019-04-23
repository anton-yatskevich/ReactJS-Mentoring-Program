import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Button from '../Button';
import './styles.scss';

const Header = ({ history }) => (
    <header className="header">
        <div className="header__wrapper">
            <h1>netflixroulette</h1>
            <Route path="/film/:id" component={() => <Button onClickHandler={() => history.push('/')} textValue="search" className="header__button" />} />
        </div>
    </header>
);

Header.propTypes = {
    history: ReactRouterPropTypes.history.isRequired
};

export default withRouter(Header);
