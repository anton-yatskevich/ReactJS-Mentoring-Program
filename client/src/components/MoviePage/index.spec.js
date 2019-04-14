import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import MoviePage from './index';

describe('MoviePage component', () => {
    it('should be rendered with default props', () => {
        const MoviePageComponent = shallow(<MoviePage />);
        expect(toJson(MoviePageComponent)).toMatchSnapshot();
    });

    it('should be rendered with selectedMovie', () => {
        const props = {
            selectedMovie: {
                genres: ['a']
            }
        };
        const MoviePageComponent = shallow(<MoviePage {...props} />);
        expect(toJson(MoviePageComponent)).toMatchSnapshot();
    });
});
