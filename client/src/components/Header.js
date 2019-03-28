import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isSearchPage, goToSearchHandler }) => (
    <header>
        <div className="header__wrapper">
            <h1>netflixroulette</h1>
            {!isSearchPage && <button type="button" onClick={goToSearchHandler}>SEARCH</button>}
        </div>
    </header>
);

Header.propTypes = {
    isSearchPage: PropTypes.bool,
    goToSearchHandler: PropTypes.func
};

Header.defaultProps = {
    isSearchPage: false,
    goToSearchHandler: null
};

export default Header;
