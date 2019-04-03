import React from 'react';
import { shallow } from 'enzyme';
import { AppContainer } from './index';

describe('AppContainer component', () => {
    let AppContainerComponent;

    beforeAll(() => {
        AppContainerComponent = shallow(<AppContainer />);
    });

    it('should be rendered with default props', () => {
        expect(AppContainerComponent).toMatchSnapshot();
    });

    it('should set selectedMovie to null if goToSearchHandler is called', () => {
        AppContainerComponent.instance().goToSearchHandler();
        expect(AppContainerComponent.state().selectedMovie).toBeNull();
    });

    it('should set selectedMovie if onSelectMovie method is called', () => {
        AppContainerComponent.instance().movies = [{ id: 'test' }, { id: 'b' }];
        AppContainerComponent.instance().onSelectMovie('test');
        expect(AppContainerComponent.state().selectedMovie).toEqual({ id: 'test' });
    });
});
