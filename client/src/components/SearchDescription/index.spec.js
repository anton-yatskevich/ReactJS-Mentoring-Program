import React from 'react';
import { shallow } from 'enzyme';
import SearchDescription from './index';

describe('SearchDescription component', () => {
    it('should be rendered with default props', () => {
        const SearchDescriptionComponent = shallow(<SearchDescription />);
        expect(SearchDescriptionComponent).toMatchSnapshot();
    });
});
