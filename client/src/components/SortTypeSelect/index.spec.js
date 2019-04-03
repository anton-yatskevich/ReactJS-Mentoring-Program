import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import SortTypeSelect from './index';

describe('SortTypeSelect component', () => {
    it('should be rendered with default props', () => {
        const SortTypeSelectComponent = shallow(<SortTypeSelect />);
        expect(toJson(SortTypeSelectComponent)).toMatchSnapshot();
    });
});
