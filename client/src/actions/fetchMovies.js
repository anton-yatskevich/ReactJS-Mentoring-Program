import request from '../utils/axiosWrapper';
import { FETCH_MOVIES, RECIEVE_MOVIES } from '../constants/ActionTypes';

export function recieveMovies(payload) {
    return {
        type: RECIEVE_MOVIES,
        payload
    };
}

export default function fetchMovies() {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_MOVIES });
        const { searchField, sortField, searchQuery } = getState().searchParams;

        return request({
            method: 'get',
            url: `/movies?sortBy=${sortField}&sortOrder=desc&search=${searchQuery}&searchBy=${searchField}`
        }).then(({ data }) => dispatch(recieveMovies(data)));
    };
}
