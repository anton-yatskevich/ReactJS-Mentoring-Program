import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Link } from '../../routes';

const Header = ({ router }) => (
    <StyledHeader>
        <HeadeWrapper>
            <h1>netflixroulette</h1>
            {
                router.route === '/MoviePage'
                    && (
                        <Link route="/">
                            <Button type="button">Search</Button>
                        </Link>
                    )
            }
        </HeadeWrapper>
    </StyledHeader>
);

Header.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object.isRequired
};

const StyledHeader = styled.header`
    height: 60px;
    width: 100%;
    color: rgb(160, 0, 0);
    background-color: rgb(146, 133, 133);
    padding: 0 20px;
    border-bottom: 1px solid rgb(160, 0, 0);
`;

const HeadeWrapper = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    padding: 5px 20px;
    font-size: 20px;
    text-transform: uppercase;
    background-color: rgb(226, 226, 226);
    border: none;
    color: rgb(148, 0, 0);
    text-decoration: none;
    margin-left: 15px;
    cursor: pointer;
`;

export default withRouter(Header);
