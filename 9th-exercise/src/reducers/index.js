import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// to get error-message to go away

export default combineReducers(
    {
        posts: postsReducer,
        users: usersReducer
    }
);