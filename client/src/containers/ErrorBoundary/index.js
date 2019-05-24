
import React from 'react';
import PropTypes from 'prop-types';

function ErrorHandlerComponent(Component) {
    class ErrorBoundary extends React.Component {
        state = { hasError: false };

        componentDidCatch(error, info) {
            this.setState({ hasError: true });
            console.log(error, info);
        }

        render() {
            const { hasError } = this.state;
            if (hasError) {
                return <h1>Something went wrong</h1>;
            }

            return <Component {...this.props} />;
        }
    }

    ErrorBoundary.propTypes = {
        children: PropTypes.node
    };

    ErrorBoundary.defaultProps = {
        children: null
    };

    return ErrorBoundary;
}

export default ErrorHandlerComponent;
