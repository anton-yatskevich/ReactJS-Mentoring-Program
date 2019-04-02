import React from 'react';
import { shallow } from 'enzyme';
import Movie from './index';

describe('Movie component', () => {
    it('should be rendered with default props', () => {
        const MovieComponent = shallow(<Movie />);
        expect(MovieComponent).toMatchSnapshot();
    });
});
