import React, { Component } from 'react';

import '../assets/styles/searchbar.css';

class SearchBar extends Component {
	render() {
		return (
			<div id="search-bar">
				<input type="text" placeholder={this.props.inputPlaceholder} />
				<button>BUSCAR</button>
			</div>
		);
	}
}

export default SearchBar;
