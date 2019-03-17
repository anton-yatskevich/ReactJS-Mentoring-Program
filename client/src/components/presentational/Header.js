import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.PureComponent {
    render() {
        const { title } = this.props;
        return <header><h1>{title}</h1></header>;
    }
}

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: null
};

export default Header;
