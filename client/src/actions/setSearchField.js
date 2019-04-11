import { SET_SEARCH_FIELD } from '../constants/ActionTypes';

export default function setSearchField(payload) {
    return {
        type: SET_SEARCH_FIELD,
        payload
    };
}
