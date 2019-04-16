import * as types from '../constants/ActionTypes';

const localState = localStorage.getItem('redux-state');

const defaultState = (localState && JSON.parse(localState).searchParams) || {
    searchField: 'title',
    sortField: 'rating'
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
    default:
        return state;
    }
}
