import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import classNames from 'classnames';
import './styles.scss';

const Button = ({
    onClickHandler, textValue, value, isActive, className
}) => (
    <button
        type="button"
        onClick={() => onClickHandler(value)}
        className={classNames(className, { [`${className}--active`]: isActive })}
    >
        {textValue}
    </button>
);

Button.propTypes = {
    onClickHandler: PropTypes.func,
    textValue: PropTypes.string,
    value: PropTypes.string,
    isActive: PropTypes.bool,
    className: PropTypes.string
};

Button.defaultProps = {
    onClickHandler: noop,
    textValue: '',
    value: '',
    isActive: false,
    className: 'button'
};

export default Button;
