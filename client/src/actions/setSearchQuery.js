import { SET_SEARCH_QUERY } from '../constants/ActionTypes';

export default function setSearchQuery(payload) {
    return {
        type: SET_SEARCH_QUERY,
        payload
    };
}
