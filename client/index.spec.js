import ReactDOM from 'react-dom';
import AppRender from './index';

describe('Root component test', () => {
    beforeEach(() => {
        window.document.getElementById = () => true;
        ReactDOM.render = jest.fn();
    });

    it('should call ReactDOM.render', () => {
        AppRender();

        expect(ReactDOM.render).toHaveBeenCalled();
    });
});
