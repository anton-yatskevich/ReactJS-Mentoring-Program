import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import fetchMovies from '../../actions/fetchMovies';
import SearchFieldSelect from '../SearchField';
import './styles.scss';

class SearchPanel extends Component {
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

SearchPanel.propTypes = {
    getMovies: PropTypes.func
};

SearchPanel.defaultProps = {
    getMovies: noop
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMovies: fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchPanel);
