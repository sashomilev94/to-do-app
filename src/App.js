import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

/*
	Internal Dependencies
 */
import './App.css';
import OnBoarding from './containers/OnBoarding/OnBoarding'
import List from './containers/List/List'

const app = () => {
	return (
		<div className="app">
			<Switch>
				<Route path="/onboarding" component={OnBoarding} />
				<Route path="/todos" component={List} />
				<Redirect from="/" to="/onboarding" />
			</Switch>
		</div>
	)
}

export default app;
