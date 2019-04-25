import { SELECT_MOVIE } from '../constants/ActionTypes';

export default function selectMovie(payload) {
    return {
        type: SELECT_MOVIE,
        payload
    };
}

export function getSelectedMovie(id) {
    return dispatch => (
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then(
                response => response.json(),
                error => console.log('Something went wrong', error)
            )
            .then(movie => dispatch(selectMovie(movie)))
    );
}
