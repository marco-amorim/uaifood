import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/searchbar.css';

class SearchBar extends Component {
	render() {
		return (
			<div id="search-bar">
				<div className="search-input">
					<FontAwesomeIcon icon={faMapMarkerAlt} color="grey" size="lg" />
					<input type="text" placeholder={this.props.inputPlaceholder} />
					<button>BUSCAR</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;
