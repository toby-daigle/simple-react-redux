import { mapKeys, omit } from 'lodash';
import {DELETE_POST, FETCH_POST, FETCH_POSTS} from '../actions/index';

export default function (state = {}, action) {

	switch (action.type) {
		case DELETE_POST:
			return omit(state, action.payload);
		case FETCH_POST:
			const post = action.payload;
			return {...state, [post.id]: post};
		case FETCH_POSTS:
			return mapKeys(action.payload, 'id');
		default:
			return state;
	}
}