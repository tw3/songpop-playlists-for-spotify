import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './store';
import App from './components/App';
import Main from './components/main/Main';
import NotFound from './components/NotFound';

// build the router
const router = (
	<Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Main} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
);

// export
export { router };
