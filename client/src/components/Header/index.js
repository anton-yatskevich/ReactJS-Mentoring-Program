import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavButton from '../NavButton';
import './styles.scss';

const Header = () => (
    <header className="header">
        <div className="header__wrapper">
            <h1>netflixroulette</h1>
            <Route path="/film/:id" component={() => <NavButton textValue="search" path="/" />} />
        </div>
    </header>
);

export default withRouter(Header);
