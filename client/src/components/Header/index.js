import React from 'react';
import { withRouter } from 'next/router';
import { Link } from '../../routes';
import './styles.scss';

const Header = ({ router }) => (
    <header className="header">
        <div className="header__wrapper">
            <h1>netflixroulette</h1>
            {
                router.route === '/MoviePage'
                    && (
                        <Link href="/" as="/">
                            <button type="button" className="header__button">Search</button>
                        </Link>
                    )
            }
        </div>
    </header>
);

export default withRouter(Header);
