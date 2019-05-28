import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

const AppContainer = ({ children }) => (
    <div>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </div>
);

AppContainer.propTypes = {
    route: PropTypes.shape({
        routes: PropTypes.arrayOf(PropTypes.object)
    }),
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any.isRequired
};

AppContainer.defaultProps = {
    route: {}
};

const Main = styled.main`
    min-height: calc(100vh - 100px);
`;

export default AppContainer;
