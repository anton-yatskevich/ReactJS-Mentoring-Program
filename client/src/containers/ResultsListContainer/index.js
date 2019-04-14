import { connect } from 'react-redux';
import ResultsList from '../../components/ResultsList';
import selectMovie from '../../actions/selectMovie';
import sortHelper from '../../utils/sortHelper';

function mapStateToProps(state) {
    const { moviesList } = state.movies;
    const { sortField } = state.searchParams;
    return {
        movies: sortHelper(moviesList, sortField)
    };
}

export default connect(mapStateToProps, { selectMovie })(ResultsList);
