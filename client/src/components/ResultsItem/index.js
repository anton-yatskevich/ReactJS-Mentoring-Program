import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import MovieSchema from '../../constants/MovieSchema';
import { Router } from '../../routes';

const ResultsItem = ({ movie }) => {
    const {
        poster_path: path, title, genres, release_date: date
    } = movie;

    return (
        <Result>
            <Poster src={path} alt={title} role="presentation" onClick={() => Router.pushRoute(`/film/${movie.id}`)} />
            <Description>
                <Title>{title}</Title>
                <span>{date && date.slice(0, 4)}</span>
            </Description>
            <p>{genres && genres.join(' & ')}</p>
        </Result>
    );
};

ResultsItem.propTypes = {
    movie: MovieSchema
};

ResultsItem.defaultProps = {
    movie: {}
};

const Result = styled.div`
    margin: 10px;
    max-width: 280px;
`;

const Poster = styled.img`
    width: 100%;
    margin-bottom: 5px;
    cursor: pointer;
`;

const Description = styled.p`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const Title = styled.span`
    font-weight: bold;
`;

export default withRouter(ResultsItem);
