import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { cities } from '../apis/zomato';

import '../assets/styles/searchbar.css';

class SearchBar extends Component {
	state = { suggestions: [], searchTerm: 'sa' };

	onSearchSubmit = () => {
		if (this.state.searchTerm) {
			cities
				.get('/cities', {
					params: {
						q: this.state.searchTerm,
					},
				})
				.then((response) => {
					const suggestions = response.data.location_suggestions;
					console.log(suggestions);
				});
		}
	};

	render() {
		return (
			<div id="search-bar">
				<div className="search-input">
					<FontAwesomeIcon icon={faMapMarkerAlt} color="grey" size="lg" />
					<input type="text" placeholder={this.props.inputPlaceholder} />
					<button onClick={this.onSearchSubmit}>BUSCAR</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;
