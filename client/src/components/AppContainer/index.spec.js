import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppContainer from './index';

describe('AppContainer component', () => {
    let AppContainerComponent;

    beforeAll(() => {
        AppContainerComponent = shallow(<AppContainer />);
    });

    it('should be rendered with default props', () => {
        expect(toJson(AppContainerComponent)).toMatchSnapshot();
    });
});
