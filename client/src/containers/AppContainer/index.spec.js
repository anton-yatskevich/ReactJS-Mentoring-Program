import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppContainer from './index';

describe('AppContainer component', () => {
    it('should be rendered with default props', () => {
        const AppContainerComponent = shallow(<AppContainer />);
        expect(toJson(AppContainerComponent)).toMatchSnapshot();
    });
});
