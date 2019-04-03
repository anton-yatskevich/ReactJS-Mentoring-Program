import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ResultsList from './index';

describe('ResultsList component', () => {
    it('should be rendered with default props', () => {
        const ResultsListComponent = shallow(<ResultsList />);
        expect(toJson(ResultsListComponent)).toMatchSnapshot();
    });

    it('should be rendered with passed results', () => {
        const props = {
            movies: [{ id: 1 }, { id: 2 }]
        };
        const ResultsListComponent = shallow(<ResultsList {...props} />);
        expect(ResultsListComponent.find('ResultsItem').length).toEqual(2);
    });
});
