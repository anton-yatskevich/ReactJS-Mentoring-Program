import { connect } from 'react-redux';
import selectMovie from '../../actions/selectMovie';
import AppContainer from '../../components/AppContainer';
import ErrorHandlerComponent from '../ErrorBoundary';

function mapStateToProps({ movies }) {
    return {
        selectedMovie: movies.selectedMovie,
        numberOfResults: movies.moviesList.length
    };
}

const AppContainerWithConnect = connect(mapStateToProps, { selectMovie })(AppContainer);

export default ErrorHandlerComponent(AppContainerWithConnect);
