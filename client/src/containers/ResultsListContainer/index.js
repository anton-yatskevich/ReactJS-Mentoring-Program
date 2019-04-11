import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResultsList from '../../components/ResultsList';
import selectMovie from '../../actions/selectMovie';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(ResultsList);
