import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import SearchFieldSelect from './index';

describe('SearchFieldSelect component', () => {
    it('should be rendered with default props', () => {
        const SearchFieldSelectComponent = shallow(<SearchFieldSelect />);
        expect(toJson(SearchFieldSelectComponent)).toMatchSnapshot();
    });
});
