import React from 'react';
import styled from 'styled-components';
import { Link } from '../../routes';

const NotFoundComponent = () => (
    <Container>
        <h2>Page Not found</h2>
        <Link route="/">Go to the home page</Link>
    </Container>
);

const Container = styled.div`
    text-align: center;
    margin-top: 40px;
`;

export default NotFoundComponent;
