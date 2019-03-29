import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import SearchFieldSelect from '../../components/SearchFieldSelect';
import './styles.scss';

class SearchPanel extends Component {
    state = { value: '' };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { value } = this.state;
        const { onSubmit } = this.props;

        onSubmit(value.toLowerCase());
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
    searchField: '',
    onSubmit: noop,
    onChangeSearchField: noop
};

export default SearchPanel;
