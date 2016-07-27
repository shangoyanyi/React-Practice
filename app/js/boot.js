import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index.js'

import { Provider } from 'react-redux'

import cMiddleware from './middlewares/customerMiddleware.js'


// create store
const store = createStore(reducers, applyMiddleware(cMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App></App>
	</Provider>
	, document.getElementById('root'));
