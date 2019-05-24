import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import noop from 'lodash.noop';

const Button = ({
    onClickHandler, textValue, value, isActive, isTransparent
}) => (
    <StyledButton type="button" isTransparent={isTransparent} isActive={isActive} onClick={() => onClickHandler(value)}>
        {textValue}
    </StyledButton>
);

Button.propTypes = {
    onClickHandler: PropTypes.func,
    textValue: PropTypes.string,
    value: PropTypes.string,
    isActive: PropTypes.bool,
    isTransparent: PropTypes.bool
};

Button.defaultProps = {
    onClickHandler: noop,
    textValue: '',
    value: '',
    isActive: false,
    isTransparent: false
};

const StyledButton = styled.button`
    padding: 5px 20px;
    font-size: 14px;
    text-transform: uppercase;
    background-color: rgb(226, 226, 226);
    font-weight: bold;
    border: none;
    color: rgb(99, 99, 99);
    text-decoration: none;
    margin-left: 15px;
    transition: all 0.5;
    cursor: pointer;

    ${props => props.isTransparent && css`
        background-color: transparent;
        padding: 5px 15px;
        margin-left: 0;
        text-transform: none;
        font-size: 20px;
        outline: none;
    `}

    ${props => props.isActive && css`
        color: white;
        background-color: rgb(160, 0, 0);
    `}

    ${props => props.isActive && props.isTransparent && css`
        color: black;
        background-color: transparent;
    `}
`;

export default Button;
