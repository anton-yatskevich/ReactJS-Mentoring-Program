import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import SearchPage from './index';
import * as utils from '../../utils/sortHelper';

jest.mock('../../utils', () => ({
    sortMoviesComporator: jest.fn(() => []),
    filterMoviesComporator: jest.fn(() => [])
}));


describe('SearchPage component', () => {
    let SearchPageComponent;

    beforeAll(() => {
        SearchPageComponent = shallow(<SearchPage />);
    });

    it('should be rendered with default props', () => {
        expect(toJson(SearchPageComponent)).toMatchSnapshot();
    });

    it('should set searchField value if onChangeSearchField is called', () => {
        SearchPageComponent.instance().onChangeSearchField('testValue');
        expect(SearchPageComponent.state().searchField).toBe('testValue');
    });

    it('should set searchField value and sort results if onChangeSort method is called', () => {
        SearchPageComponent.state().results = [{ id: 'a' }, { id: 'b' }];
        SearchPageComponent.instance().onChangeSort('testSort');
        expect(SearchPageComponent.state().sortField).toBe('testSort');
        expect(utils.sortMoviesComporator).toHaveBeenCalled();
    });

    it('should set new filtered and sorted results if onChangeSort method is called', () => {
        const props = {
            movies: [{ id: 'a' }, { id: 'b' }]
        };
        const SearchPageComponentWithMovies = shallow(<SearchPage {...props} />);
        SearchPageComponentWithMovies.instance().onSearchFormSubmit('searchValue');
        expect(utils.sortMoviesComporator).toHaveBeenCalled();
        expect(utils.filterMoviesComporator).toHaveBeenCalled();
    });
});
