import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import noop from 'lodash.noop';
import fetchMovies from '../../actions/fetchMovies';
import SearchFieldSelect from '../SearchField';
import './styles.scss';

export class SearchPanelComponent extends Component {
    state = { value: '' };

    componentDidMount() {
        const { match, getMovies } = this.props;
        const { url, params } = match;
        if (url.includes('/search/')) {
            const query = params.query || '';
            this.setState({ value: query });
            getMovies(query.toLowerCase());
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { value } = this.state;
        const { getMovies, match, history } = this.props;
        let route = value || '';
        if (!match.url.includes('/search/')) {
            route = `/search/${route}`;
        }
        history.push(route);
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
    getMovies: PropTypes.func,
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired
};

SearchPanelComponent.defaultProps = {
    getMovies: noop
};

export default withRouter(connect(null, { getMovies: fetchMovies })(SearchPanelComponent));
