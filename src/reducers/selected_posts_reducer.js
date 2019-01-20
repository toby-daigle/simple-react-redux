import { concat, remove } from 'lodash';
import {SELECT_POST, UNSELECT_POST} from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case SELECT_POST:
			return concat(state, action.payload);
		case UNSELECT_POST:
			return remove(state, id => id !== action.payload);
		default:
			return state;
	}
}