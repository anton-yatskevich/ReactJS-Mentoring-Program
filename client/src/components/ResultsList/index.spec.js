import React from 'react';
import { shallow } from 'enzyme';
import ResultsList from './index';

describe('ResultsList component', () => {
    it('should be rendered with default props', () => {
        const ResultsListComponent = shallow(<ResultsList />);
        expect(ResultsListComponent).toMatchSnapshot();
    });
});
