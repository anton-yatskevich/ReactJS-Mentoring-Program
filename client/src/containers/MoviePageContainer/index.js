import { connect } from 'react-redux';
import MoviePage from '../../components/MoviePage';

function mapStateToProps({ movies }) {
    return {
        selectedMovie: movies.selectedMovie
    };
}

export default connect(mapStateToProps)(MoviePage);
