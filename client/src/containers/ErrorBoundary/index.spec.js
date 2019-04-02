import React from 'react';
import { shallow } from 'enzyme';
import ErrorHandlerComponent from './index';

describe('ErrorHandler component', () => {
    it('should be rendered with default props', () => {
        const ErrorHandler = shallow(<ErrorHandlerComponent />);
        expect(ErrorHandler).toMatchSnapshot();
    });
});
