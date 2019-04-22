import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import fetchMovies from '../../actions/fetchMovies';
import SearchFieldSelect from '../SearchField';
import './styles.scss';

export class SearchPanelComponent extends Component {
    state = { value: '' };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { value } = this.state;
        const { getMovies } = this.props;

        getMovies(value.toLowerCase());
    }

    render() {
        const { value } = this.state;

        return (
            <div className="search-panel">
                <form className="search-panel__form" onSubmit={this.handleSubmit}>
                    <p className="search-panel__title">Find your movie</p>
                    <input className="search-panel__input" type="text" value={value} onChange={this.handleChange} placeholder="Search..." />
                    <div className="search-panel__controls">
                        <SearchFieldSelect />
                        <input className="search-panel__button--submit" type="submit" value="Search" />
                    </div>
                </form>
            </div>
        );
    }
}

SearchPanelComponent.propTypes = {
    getMovies: PropTypes.func
};

SearchPanelComponent.defaultProps = {
    getMovies: noop
};

export default connect(null, { getMovies: fetchMovies })(SearchPanelComponent);
