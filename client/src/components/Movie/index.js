import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Movie = ({
    poster_path: path, title, release_date: date, vote_average: rating, tagline, runtime, overview
}) => (
    <Wrapper>
        <Content>
            <Poster src={path} alt={title} />
            <Description>
                <Heading>{title}</Heading>
                <Rating>{rating}</Rating>
                <Paragraph>{tagline}</Paragraph>
                <ParagraphBold>
                    <ReleaseDate>{date.slice(0, 4)}</ReleaseDate>
                    <span>{`${runtime} min`}</span>
                </ParagraphBold>
                <Paragraph>{overview}</Paragraph>
            </Description>
        </Content>
    </Wrapper>
);

Movie.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    release_date: PropTypes.string
};

Movie.defaultProps = {
    poster_path: '',
    title: '',
    tagline: '',
    runtime: 0,
    overview: '',
    vote_average: 0,
    release_date: ''
};

const Content = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Wrapper = styled.div`
    width: 100%;
    background-color: rgb(146, 133, 133);
    padding: 30px 20px;
`;

const Poster = styled.img`
    width: 320px;
    margin-right: 30px;
`;

const Description = styled.div`
    margin-top: 10px;
`;

const Heading = styled.h2`
    color: rgb(160, 0, 0);
    margin: 0 20px 15px 0;
    display: inline-block;
    font-size: 28px;
`;

const Rating = styled.span`
    border: 1px solid rgb(0, 100, 17);
    color: rgb(0, 100, 17);
    padding: 10px 8px;
    border-radius: 50%;
    font-size: 18px;
`;

const Paragraph = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
`;

const ParagraphBold = styled(Paragraph)`
    font-weight: bold;
`;

const ReleaseDate = styled.span`
    margin-right: 30px;
`;

export default Movie;
