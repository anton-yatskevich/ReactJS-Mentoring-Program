import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import SearchPage from './index';

describe('SearchPage component', () => {
    let SearchPageComponent;

    beforeAll(() => {
        SearchPageComponent = shallow(<SearchPage />);
    });

    it('should be rendered with default props', () => {
        expect(toJson(SearchPageComponent)).toMatchSnapshot();
    });
});
