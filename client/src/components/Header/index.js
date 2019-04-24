import React from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import './styles.scss';

const Header = () => (
    <header className="header">
        <div className="header__wrapper">
            <h1>netflixroulette</h1>
            <Route path="/film/:id" component={() => <NavLink to="/" className="header__button">Search</NavLink>} />
        </div>
    </header>
);

export default withRouter(Header);
