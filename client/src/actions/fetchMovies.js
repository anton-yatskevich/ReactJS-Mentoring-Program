import { FETCH_MOVIES } from '../constants/ActionTypes';

export default function fetchMovies(payload) {
    return {
        type: FETCH_MOVIES,
        payload
    };
}
