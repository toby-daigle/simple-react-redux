import React from 'react';
import {connect} from 'react-redux';
import SelectedPostsSelector from '../selectors/selected_posts';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const SelectedPostList = (props) => {
	const transitionOptions = {
		transitionName: 'fade',
		transitionEnterTimeout: 500,
		transitionLeaveTimeout: 500
	};

	return (
		<ul className="list-group">
			<ReactCSSTransitionGroup {...transitionOptions}>
				{props.posts.map(post =>
					<li className="list-group-item" key={post.id}>{post.title}</li>)
				}
			</ReactCSSTransitionGroup>
		</ul>
	);
};

function mapStateToProps(state) {
	return {
		posts: SelectedPostsSelector(state)
	};
}

export default connect(mapStateToProps)(SelectedPostList);