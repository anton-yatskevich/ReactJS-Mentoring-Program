import React from 'react';
import styled from 'styled-components';

const Footer = () => (
    <StyledFooter>Copyright © 2019</StyledFooter>
);

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    color: rgb(160, 0, 0);
    background-color: rgb(146, 133, 133);
`;

export default Footer;
