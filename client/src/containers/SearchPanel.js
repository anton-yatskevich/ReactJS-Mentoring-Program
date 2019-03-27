import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchFieldSelect from '../components/SearchFieldSelect';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.onSubmit = props.onSubmit;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { value } = this.state;
        this.onSubmit(value.toLowerCase());
    }

    render() {
        const { value } = this.state;
        const { onChangeSearchField, searchField } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="searchInput">
                    Find your movie
                    <input type="text" id="searchInput" value={value} onChange={this.handleChange} />
                </label>
                <SearchFieldSelect
                    onChangeSearchField={onChangeSearchField}
                    searchField={searchField}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

SearchPanel.propTypes = {
    searchField: PropTypes.string,
    onSubmit: PropTypes.func,
    onChangeSearchField: PropTypes.func
};

SearchPanel.defaultProps = {
    searchField: null,
    onSubmit: null,
    onChangeSearchField: null
};

export default SearchPanel;
