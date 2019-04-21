import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const NotFoundComponent = () => (
    <div className="not-found-page__content">
        <h2>Page Not found</h2>
        <Link to="/search">Go to the home page</Link>
    </div>
);

export default NotFoundComponent;
