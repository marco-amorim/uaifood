import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Results from './pages/Results';

const Routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/results" exact component={Results} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Routes;
