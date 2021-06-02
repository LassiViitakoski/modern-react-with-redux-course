import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

// to get error-message to go away

export default combineReducers(
    {
        posts: postsReducer
    }
);
