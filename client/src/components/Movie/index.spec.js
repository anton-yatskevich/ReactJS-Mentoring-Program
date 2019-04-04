import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Movie from './index';

describe('Movie component', () => {
    it('should be rendered with default props', () => {
        const MovieComponent = shallow(<Movie />);
        expect(toJson(MovieComponent)).toMatchSnapshot();
    });
});
