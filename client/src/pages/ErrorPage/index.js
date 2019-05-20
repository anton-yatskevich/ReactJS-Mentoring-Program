import React from 'react';
import { Link } from '../../routes';
import './styles.scss';

const NotFoundComponent = () => (
    <div className="not-found-page__content">
        <h2>Page Not found</h2>
        <Link href="/">Go to the home page</Link>
    </div>
);

export default NotFoundComponent;
