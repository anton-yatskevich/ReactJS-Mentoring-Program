import { SET_SELECTED_MOVIE_ID } from '../constants/ActionTypes';

export default function setSelectedMovieId(payload) {
    return {
        type: SET_SELECTED_MOVIE_ID,
        payload
    };
}
