import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header component', () => {
    it('should be rendered with default props', () => {
        const HeaderComponent = shallow(<Header />);
        expect(HeaderComponent).toMatchSnapshot();
    });
});
