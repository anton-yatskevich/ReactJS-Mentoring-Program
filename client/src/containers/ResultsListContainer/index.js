import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultsList from '../../components/ResultsList';
import selectMovie from '../../actions/selectMovie';

function mapStateToProps(state) {
    return {
        sortField: state.searchParams.sortField,
        movies: state.movies.moviesList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
