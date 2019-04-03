import React from 'react';
import { shallow } from 'enzyme';
import MoviePage from './index';

describe('MoviePage component', () => {
    it('should be rendered with default props', () => {
        const MoviePageComponent = shallow(<MoviePage />);
        expect(MoviePageComponent).toMatchSnapshot();
    });

    it('should be rendered with filtered results', () => {
        const props = {
            movies: [{
                genres: ['a', 'b']
            }],
            selectedMovie: {
                genres: ['a']
            }
        };
        const MoviePageComponent = shallow(<MoviePage {...props} />);
        expect(MoviePageComponent).toMatchSnapshot();
    });
});
