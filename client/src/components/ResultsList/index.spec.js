import React from 'react';
import { shallow } from 'enzyme';
import ResultsList from './index';

describe('ResultsList component', () => {
    it('should be rendered with default props', () => {
        const ResultsListComponent = shallow(<ResultsList />);
        expect(ResultsListComponent).toMatchSnapshot();
    });

    it('should be rendered with passed results', () => {
        const props = {
            movies: [{ id: 1 }, { id: 2 }]
        };
        const MoviePageComponent = shallow(<ResultsList {...props} />);
        expect(MoviePageComponent.find('ResultsItem').length).toEqual(2);
    });
});
