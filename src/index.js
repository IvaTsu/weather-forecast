import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import App from './views/app';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

const root = document.querySelector('#app');
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, root,
);
