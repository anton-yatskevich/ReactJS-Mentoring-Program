import axios from 'axios';
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

        return axios.get(`https://reactjs-cdp.herokuapp.com/movies/${selectedMovieId}`)
            .then(
                ({ data }) => data,
                error => console.log('Something went wrong', error)
            )
            .then(movie => dispatch(selectMovie(movie)));
    };
}
