import _ from 'lodash';
import {SELECT_POST, UNSELECT_POST} from '../actions/index';

export default function (state = [], action) {
	switch (action.type) {
		case SELECT_POST:
			return _.concat(state, action.payload);
		case UNSELECT_POST:
			return _.remove(state, id => id !== action.payload);
		default:
			return state;
	}
}