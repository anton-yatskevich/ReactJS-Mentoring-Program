import { connect } from 'react-redux';
import SearchFieldSelect from '../../components/SearchFieldSelect';
import setSearchField from '../../actions/setSearchField';

function mapStateToProps({ searchParams }) {
    return {
        searchField: searchParams.searchField
    };
}

export default connect(mapStateToProps, { setSearchField })(SearchFieldSelect);
