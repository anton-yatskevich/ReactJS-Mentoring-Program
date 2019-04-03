import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ErrorHandlerComponent from './index';

describe('ErrorHandler component', () => {
    it('should be rendered with default props', () => {
        const ErrorHandler = shallow(<ErrorHandlerComponent />);
        expect(toJson(ErrorHandler)).toMatchSnapshot();
    });
});
