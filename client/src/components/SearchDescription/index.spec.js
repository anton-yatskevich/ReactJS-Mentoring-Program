import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import SearchDescription from './index';

describe('SearchDescription component', () => {
    it('should be rendered with default props', () => {
        const SearchDescriptionComponent = shallow(<SearchDescription />);
        expect(toJson(SearchDescriptionComponent)).toMatchSnapshot();
    });
});
