import setSortField from './setSortField';
import { SET_SORT_FIELD } from '../constants/ActionTypes';

describe('setSortField action', () => {
    it('should create an action to set sort field', () => {
        const field = 'rating';
        const expectedAction = {
            type: SET_SORT_FIELD,
            payload: field
        };
        expect(setSortField(field)).toEqual(expectedAction);
    });
});
