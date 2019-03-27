import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ isSearchPage, goToSearchHandler }) => (
    <header>
        <h1>netflixroulette</h1>
        {!isSearchPage && <button type="button" onClick={goToSearchHandler}>SEARCH</button>}
    </header>
);

Header.propTypes = {
    isSearchPage: PropTypes.bool,
    goToSearchHandler: PropTypes.func
};

Header.defaultProps = {
    isSearchPage: null,
    goToSearchHandler: null
};

export default Header;
