import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    onClickHandler, textValue, value, searchField
}) => (
    <button
        type="button"
        onClick={() => onClickHandler(value)}
        className={searchField === value ? 'button--active' : ''}
    >
        {textValue}
    </button>
);

Button.propTypes = {
    onClickHandler: PropTypes.func,
    textValue: PropTypes.string,
    value: PropTypes.string,
    searchField: PropTypes.string
};

Button.defaultProps = {
    onClickHandler: null,
    textValue: '',
    value: '',
    searchField: ''
};

export default Button;
