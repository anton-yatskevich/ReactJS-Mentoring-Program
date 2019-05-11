import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

const AppContainer = ({ route }) => (
    <div>
        <Header />
        <main>
            {renderRoutes(route.routes)}
        </main>
        <Footer />
    </div>
);

AppContainer.propTypes = {
    route: PropTypes.shape({
        routes: PropTypes.arrayOf(PropTypes.object)
    })
};

AppContainer.defaultProps = {
    route: {}
};


export default {
    component: AppContainer
};
