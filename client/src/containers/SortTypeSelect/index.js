import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SortTypeSelect from '../../components/SortTypeSelect';
import setSortField from '../../actions/setSortField';

function mapStateToProps(state) {
    return {
        sortField: state.searchParams.sortField
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setSortField }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SortTypeSelect);
