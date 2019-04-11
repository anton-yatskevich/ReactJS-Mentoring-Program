import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import Button from '../Button';
import './styles.scss';

const Header = ({ isSearchPage, goToSearchHandler }) => (
    <header className="header">
        <div className="header__wrapper">
            <h1>netflixroulette</h1>
            {
                !isSearchPage && <Button onClickHandler={() => goToSearchHandler(null)} textValue="search" className="header__button" />
            }
        </div>
    </header>
);

Header.propTypes = {
    isSearchPage: PropTypes.bool,
    goToSearchHandler: PropTypes.func
};

Header.defaultProps = {
    isSearchPage: false,
    goToSearchHandler: noop
};

export default Header;
