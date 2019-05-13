import request from '../utils/axiosWrapper';
import { SELECT_MOVIE } from '../constants/ActionTypes';

export default function selectMovie(payload) {
    return {
        type: SELECT_MOVIE,
        payload
    };
}

export function getSelectedMovie() {
    return (dispatch, getState) => {
        const { selectedMovieId } = getState().movies;

        return request({
            method: 'get',
            url: `/movies/${selectedMovieId}`
        }).then(movie => dispatch(selectMovie(movie)));
    };
}
