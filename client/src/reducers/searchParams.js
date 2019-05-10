import * as types from '../constants/ActionTypes';

const defaultState = {
    searchField: 'title',
    sortField: 'rating',
    searchQuery: ''
};

export default function searchParamsReducer(state = defaultState, action) {
    switch (action.type) {
    case types.SET_SEARCH_FIELD:
        return {
            ...state,
            searchField: action.payload
        };
    case types.SET_SORT_FIELD:
        return {
            ...state,
            sortField: action.payload
        };
    case types.SET_SEARCH_QUERY:
        return {
            ...state,
            searchQuery: action.payload
        };
    default:
        return state;
    }
}
