import _ from 'lodash';
import {createSelector} from 'reselect';

const postsSelector = state => state.posts;
const selectedPostSelector = state => state.selectedPostIds;

const getPosts = (posts, selectedPostIds) => {
	const selectedPosts = _.filter(
		posts,
		post => _.includes(selectedPostIds, post.id + ""));

	return selectedPosts;
};

export default createSelector(
	postsSelector,
	selectedPostSelector,
	getPosts
);