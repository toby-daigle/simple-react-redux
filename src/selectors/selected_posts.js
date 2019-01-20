import { filter, includes } from 'lodash';
import {createSelector} from 'reselect';

const postsSelector = state => state.posts;
const selectedPostSelector = state => state.selectedPostIds;
const getPosts = (posts, selectedPostIds) => filter( posts,post => includes(selectedPostIds, `${post.id}`));

export default createSelector(
	postsSelector,
	selectedPostSelector,
	getPosts
);