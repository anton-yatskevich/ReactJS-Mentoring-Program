import { connect } from 'react-redux';
import SortTypeSelect from '../../components/SortTypeSelect';
import setSortField from '../../actions/setSortField';

function mapStateToProps({ searchParams }) {
    return {
        sortField: searchParams.sortField
    };
}

export default connect(mapStateToProps, { setSortField })(SortTypeSelect);
