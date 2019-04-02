import React from 'react';
import { shallow } from 'enzyme';
import SearchPanel from './index';

describe('SearchPanel component', () => {
    it('should be rendered with default props', () => {
        const SearchPanelComponent = shallow(<SearchPanel />);
        expect(SearchPanelComponent).toMatchSnapshot();
    });
});
