import React from 'react';
import { shallow } from 'enzyme';
import ResultsItem from './index';

describe('ResultsItem component', () => {
    it('should be rendered with default props', () => {
        const ResultsItemComponent = shallow(<ResultsItem />);
        expect(ResultsItemComponent).toMatchSnapshot();
    });
});
