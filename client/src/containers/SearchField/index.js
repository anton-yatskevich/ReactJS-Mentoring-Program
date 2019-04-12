import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchFieldSelect from '../../components/SearchFieldSelect';
import setSearchField from '../../actions/setSearchField';

function mapStateToProps(state) {
    return {
        searchField: state.searchParams.searchField
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setSearchField }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFieldSelect);
