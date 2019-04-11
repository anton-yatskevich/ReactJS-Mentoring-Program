import { SELECT_MOVIE } from '../constants/ActionTypes';

export default function selectMovie(payload) {
    return {
        type: SELECT_MOVIE,
        payload
    };
}
