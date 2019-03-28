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
            <div className="search-panel">
                <form className="search-panel__form" onSubmit={this.handleSubmit}>
                    <p className="search-panel__title">Find your movie</p>
                    <input className="search-panel__input" type="text" value={value} onChange={this.handleChange} placeholder="Search..." />
                    <div className="search-panel__controls">
                        <SearchFieldSelect
                            onChangeSearchField={onChangeSearchField}
                            searchField={searchField}
                        />
                        <input className="search-panel__button--submit" type="submit" value="Search" />
                    </div>
                </form>
            </div>
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
