import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export const store = applyMiddleware(thunk)(createStore)(reducers);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/posts/new" component={PostsNew}/>
					<Route path="/posts/:id" component={PostsShow}/>
					<Route path="/" component={PostsIndex}/>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.querySelector('.container'));