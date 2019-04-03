import React from 'react';
import { shallow } from 'enzyme';
import SearchPanel from './index';

describe('SearchPanel component', () => {
    let SearchPanelComponent;

    beforeAll(() => {
        SearchPanelComponent = shallow(<SearchPanel />);
    });

    it('should be rendered with default props', () => {
        expect(SearchPanelComponent).toMatchSnapshot();
    });

    it('should set new value if input value is cahnged', () => {
        const inputElement = SearchPanelComponent.find('.search-panel__input');
        inputElement.simulate('change', { target: { value: 'newValue' } });
        expect(SearchPanelComponent.state().value).toBe('newValue');
    });

    it('should set onSubmitCallback if form was submitted', () => {
        const preventMock = jest.fn();
        const submitMock = jest.fn();
        const props = {
            onSubmit: submitMock
        };
        const SearchPanelComponentWitHandler = shallow(<SearchPanel {...props} />);
        const Form = SearchPanelComponentWitHandler.find('.search-panel__form');
        Form.simulate('submit', {
            preventDefault: preventMock
        });
        expect(preventMock).toHaveBeenCalled();
        expect(submitMock).toHaveBeenCalled();
    });
});
