import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectMovie from '../../actions/selectMovie';
import AppContainer from '../../components/AppContainer';
import ErrorHandlerComponent from '../ErrorBoundary';

function mapStateToProps(state) {
    return {
        selectedMovie: state.movies.selectedMovie,
        numberOfResults: state.movies.moviesList.length
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectMovie }, dispatch);
}

const AppContainerWithConnect = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default ErrorHandlerComponent(AppContainerWithConnect);
