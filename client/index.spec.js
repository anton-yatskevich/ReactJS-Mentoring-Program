import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppRender from './index';

describe('Root component test', () => {
    let componentSnapshot;

    beforeEach(() => {
        ReactDOM.render = jest.fn((component) => {
            componentSnapshot = shallow(component);
        });
    });

    it('should call ReactDOM.render and match snapshot', () => {
        AppRender();

        expect(ReactDOM.render).toHaveBeenCalled();
        expect(toJson(componentSnapshot)).toMatchSnapshot();
    });
});
