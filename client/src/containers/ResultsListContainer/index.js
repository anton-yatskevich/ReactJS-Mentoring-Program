import { connect } from 'react-redux';
import ResultsList from '../../components/ResultsList';
import selectMovie from '../../actions/selectMovie';
import getSortedMovies from '../../selectors/index';

function mapStateToProps(state) {
    return {
        movies: getSortedMovies(state)
    };
}

export default connect(mapStateToProps, { selectMovie })(ResultsList);
