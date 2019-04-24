import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavButton = ({ textValue, path }) => (
    <NavLink to={path}>
        <button type="button" className="nav-button">
            {textValue}
        </button>
    </NavLink>
);

NavButton.propTypes = {
    textValue: PropTypes.string,
    path: PropTypes.string
};

NavButton.defaultProps = {
    textValue: '',
    path: ''
};

export default NavButton;
