import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import SearchPanel from '../../containers/SearchPanel';
import setSearchQuery from '../../actions/setSearchQuery';

class HomePage extends Component {
    componentDidMount() {
        const { setQueryValue } = this.props;
        setQueryValue('');
    }

    render() {
        return (
            <SearchPanel />
        );
    }
}

HomePage.propTypes = {
    setQueryValue: PropTypes.func
};

HomePage.defaultProps = {
    setQueryValue: noop
};

export default connect(null, { setQueryValue: setSearchQuery })(HomePage);
