import React from 'react';
import { shallow } from 'enzyme';
import MoviePage from './index';

describe('MoviePage component', () => {
    it('should be rendered with default props', () => {
        const MoviePageComponent = shallow(<MoviePage />);
        expect(MoviePageComponent).toMatchSnapshot();
    });
});
