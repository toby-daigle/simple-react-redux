import React from 'react';
import {map} from "lodash";
import {image} from "faker";

function renderPost({author, content, id, title}) {
	return (
		<div key={id} className="comment">
			<a href={`/posts/${id}`} className="avatar">
				<img alt="avatar" src={image.avatar()}/>
			</a>
			<div className="content">
				<a href="/" className="author">{author}</a>
				<div className="metadata">
					<span className="date">Today at 6:00PM</span>
				</div>
				<div className="text">{` ${content}`}</div>
			</div>
		</div>
	);
}

const PostsList = ({ posts }) => {
	return (
		<div className="ui container comments">
			{map(posts, renderPost)}
		</div>
	)
};

export default PostsList;