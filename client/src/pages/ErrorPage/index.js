import React from 'react';
import { Link, Route } from 'react-router-dom';
import './styles.scss';

const NotFoundComponent = () => (
    <Route render={({ staticContext }) => {
        if (staticContext) {
            // eslint-disable-next-line no-param-reassign
            staticContext.status = 404;
        }

        return (
            <div className="not-found-page__content">
                <h2>Page Not found</h2>
                <Link to="/">Go to the home page</Link>
            </div>
        );
    }}
    />
);

export default NotFoundComponent;
