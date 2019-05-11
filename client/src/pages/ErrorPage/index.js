import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NotFoundComponent = () => (
    <div className="not-found-page__content">
        <h2>Page Not found</h2>
        <Link to="/">Go to the home page</Link>
    </div>
);

export default { component: NotFoundComponent };
