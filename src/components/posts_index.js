import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts, selectPost, unselectPost} from '../actions';

import SelectedPostsList from './selected_posts_list';

class PostsIndex extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	handleChangeCheckbox(event) {
		const {checked, value} = event.target;
		if (checked) {
			this.props.selectPost(value);
		} else {
			this.props.unselectPost(value);
		}
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
				return (
					<li key={post.id} className="list-group-item">
						<input type="checkbox" value={post.id} onChange={this.handleChangeCheckbox.bind(this)}/>
						<Link to={`/posts/${post.id}`}>
							{` ${post.title}`}
						</Link>
					</li>
				);
			}
		);
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">Add a post</Link>
				</div>
				<h3>Selected Posts</h3>
				<SelectedPostsList/>
				<hr/>
				<h3>All Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		selected: state.selectedPostIds
	};
}

export default connect(mapStateToProps, {fetchPosts, selectPost, unselectPost})(PostsIndex);
