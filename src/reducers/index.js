import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostsReducer from './posts_reducer';
import SelectedPostReducer from './selected_posts_reducer';

const rootReducer = combineReducers({
	posts: PostsReducer,
	selectedPostIds: SelectedPostReducer,
	form: formReducer
});

export default rootReducer;
