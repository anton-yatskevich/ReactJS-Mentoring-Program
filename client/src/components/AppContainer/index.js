import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

const AppContainer = ({ children }) => (
    <div>
        <Header />
        <main>
            {children}
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


export default AppContainer;
