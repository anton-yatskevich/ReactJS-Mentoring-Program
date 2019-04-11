import { connect } from 'react-redux';
import MoviePage from '../../components/MoviePage';

function mapStateToProps(state) {
    return {
        selectedMovie: state.movies.selectedMovie
    };
}

export default connect(mapStateToProps)(MoviePage);
