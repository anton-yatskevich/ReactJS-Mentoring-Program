import React from 'react';
import { shallow } from 'enzyme';
import SortTypeSelect from './index';

describe('SortTypeSelect component', () => {
    it('should be rendered with default props', () => {
        const SortTypeSelectComponent = shallow(<SortTypeSelect />);
        expect(SortTypeSelectComponent).toMatchSnapshot();
    });
});
