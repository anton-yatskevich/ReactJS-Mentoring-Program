import axios from 'axios';
import { FETCH_MOVIES, RECIEVE_MOVIES } from '../constants/ActionTypes';

export function recieveMovies(payload) {
    return {
        type: RECIEVE_MOVIES,
        payload
    };
}

export default function fetchMovies(query) {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_MOVIES });
        const { searchField, sortField } = getState().searchParams;

        return axios.get(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortField}&sortOrder=desc&search=${query}&searchBy=${searchField}`)
            .then(
                ({ data }) => data,
                error => console.log('Something went wrong', error)
            )
            .then(({ data }) => dispatch(recieveMovies(data)));
    };
}
