import { SET_SORT_FIELD } from '../constants/ActionTypes';

export default function setSortField(payload) {
    return {
        type: SET_SORT_FIELD,
        payload
    };
}
