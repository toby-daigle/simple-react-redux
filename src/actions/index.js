import axios from 'axios';

const API_KEY = '?key=toby-daigle';
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';
export const SELECT_POST = 'select_post';
export const UNSELECT_POST = 'unselect_post';

export function fetchPosts() {
	const url = `${ROOT_URL}/posts${API_KEY}`;
	const request = axios.get(url);

	return (dispatch) => {
		request.then(({data}) => {
			dispatch({type: FETCH_POSTS, payload: data});
		});
	};
}

export function fetchPost(id) {
	const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
	const request = axios.get(url);

	return (dispatch) => {
		request.then(({data}) => {
			dispatch({type: FETCH_POST, payload: data});
		});
	};
}

export function createPost(values, callback) {
	const url = `${ROOT_URL}/posts${API_KEY}`;
	const request = axios.post(url, values).then(() => callback());

	return (dispatch) => {
		request.then(() => {
			dispatch({type: CREATE_POST});
		});
	};
}

export function deletePost(id, callback) {
	const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
	const request = axios.delete(url);

	return (dispatch) => {
		request.then(() => {
			callback();
			dispatch({type: DELETE_POST, payload: id});
		});
	};
}

export function selectPost(id) {
	return (dispatch) => {
		dispatch({type: SELECT_POST, payload: id});
	};
}

export function unselectPost(id) {
	return (dispatch) => {
		dispatch({type: UNSELECT_POST, payload: id});
	};
}
