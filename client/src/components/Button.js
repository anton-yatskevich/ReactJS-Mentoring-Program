import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClickHandler, textValue, searchField }) => (
    <button
        type="button"
        onClick={() => onClickHandler(textValue)}
        className={searchField === textValue ? 'button--active' : ''}
    >
        {textValue}
    </button>
);

Button.propTypes = {
    onClickHandler: PropTypes.func,
    textValue: PropTypes.string,
    searchField: PropTypes.string
};

Button.defaultProps = {
    onClickHandler: null,
    textValue: null,
    searchField: null
};

export default Button;
