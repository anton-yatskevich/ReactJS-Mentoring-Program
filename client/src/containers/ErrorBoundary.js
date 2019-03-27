
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <h1>Something went wrong</h1>;
        }

        const { children } = this.props;
        return children;
    }
}


ErrorBoundary.propTypes = {
    children: PropTypes.node
};

ErrorBoundary.defaultProps = {
    children: null
};

export default ErrorBoundary;
