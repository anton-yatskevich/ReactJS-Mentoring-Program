import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from './index';

describe('AppContainer component', () => {
    it('should be rendered with default props', () => {
        const AppContainerComponent = shallow(<AppContainer />);
        expect(AppContainerComponent).toMatchSnapshot();
    });

    it('should set selectedMovie to null if goToSearchHandler is called', () => {
        const AppContainerComponent = shallow(<AppContainer />);
        AppContainerComponent.instance().goToSearchHandler();
        expect(AppContainerComponent.state().selectedMovie).toBeNull();
    });
});
