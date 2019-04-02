import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './index';

describe('SearchPage component', () => {
    it('should be rendered with default props', () => {
        const SearchPageComponent = shallow(<SearchPage />);
        expect(SearchPageComponent).toMatchSnapshot();
    });
});
