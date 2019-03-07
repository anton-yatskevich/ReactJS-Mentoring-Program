import React, { Component } from 'react';
import Foooter from './Footer';
import Header from './Header';
import ResultsList from './Results';

class SearchPage extends Component {
	constructor() {
		super();
		this.state = {
			results: [
				{key: 1, text: 'First item'},
				{key: 2, text: 'Second item'},
				{key: 3, text: 'Third item'},
				{key: 4, text: 'Fourth item'}
			]
		};
	}

	render() {
		return (
			<>
				<Header title='netflixroulette' />
				<ResultsList {...this.state} />
				<Foooter />
			</>
		)
	}
}

export default SearchPage;
