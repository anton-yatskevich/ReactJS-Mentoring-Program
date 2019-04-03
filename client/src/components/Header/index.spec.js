import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './index';

describe('Header component', () => {
    it('should be rendered with default props', () => {
        const HeaderComponent = shallow(<Header />);
        expect(toJson(HeaderComponent)).toMatchSnapshot();
    });
});
