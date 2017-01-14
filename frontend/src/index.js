import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { router } from './router';
import logger from 'js-logger';

// ENTRY POINT FOR THE APP

// initialize logging
logger.useDefaults();

// initial render, provide a store and let the router determine what to show
ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);
