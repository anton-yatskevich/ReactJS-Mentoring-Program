import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button component', () => {
    it('should be rendered with default props', () => {
        const ButtonComponent = shallow(<Button />);
        expect(ButtonComponent).toMatchSnapshot();
    });

    it('should has active class if the button is active', () => {
        const props = {
            isActive: true,
            className: 'btn',
            textValue: 'test'
        };
        const button = shallow(<Button {...props} />).find('button');

        expect(button.hasClass('btn--active')).toEqual(true);
        expect(button.text()).toBe('test');
    });

    it('should call onClick handler when click event fired', () => {
        const props = {
            onClickHandler: jest.fn()
        };
        const ButtonComponent = shallow(<Button {...props} />);

        ButtonComponent.simulate('click');
        expect(props.onClickHandler).toHaveBeenCalled();
    });
});
