import setSearchField from './setSearchField';
import { SET_SEARCH_FIELD } from '../constants/ActionTypes';

describe('setSearchField action', () => {
    it('should create an action to set search field', () => {
        const field = 'title';
        const expectedAction = {
            type: SET_SEARCH_FIELD,
            payload: field
        };
        expect(setSearchField(field)).toEqual(expectedAction);
    });
});
