import React, { Component } from 'react';

import '../assets/styles/landing.css';
import SearchBar from '../components/SearchBar';
import uaiFoodLogo from '../assets/images/uaifood/logo-white.jpg';

class Landing extends Component {
	render() {
		return (
			<div id="landing">
				<section>
					<img src={uaiFoodLogo} alt="uaiFood" />
					<div className="search-container">
						<h2>Descubra os melhores restaurantes em sua cidade</h2>
						<SearchBar inputPlaceholder="Por favor, digite a cidade desejada" />
					</div>
				</section>
			</div>
		);
	}
}

export default Landing;
