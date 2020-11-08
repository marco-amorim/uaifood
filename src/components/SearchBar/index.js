import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import zomatoApi from '../../apis/zomato';

import './styles.css';

class SearchBar extends Component {
	state = { suggestions: [], searchTerm: '' };

	onSearchSubmit = () => {
		console.log('submit!');
	};

	onSearchInputChange = (event) => {
		this.setState({ searchTerm: event.target.value });

		setTimeout(() => {
			this.search();
		}, 1000);
	};

	search = () => {
		if (this.state.searchTerm) {
			zomatoApi
				.get('/cities', {
					params: {
						q: this.state.searchTerm,
					},
				})
				.then((response) => {
					const suggestions = response.data.location_suggestions;
					this.setState({ suggestions: suggestions });
					console.log(this.state.suggestions);
				});
		}
		console.log(this.state.searchTerm);
	};

	render() {
		return (
			<div id="search-bar">
				<div className="search-input">
					<FontAwesomeIcon icon={faMapMarkerAlt} color="grey" size="lg" />
					<input
						type="text"
						onChange={(event) => this.onSearchInputChange(event)}
						placeholder={this.props.inputPlaceholder}
					/>
					<button onClick={this.onSearchSubmit}>BUSCAR</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;
