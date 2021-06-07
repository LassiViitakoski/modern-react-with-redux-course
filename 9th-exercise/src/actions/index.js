import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    /*  // Tekee saman asian kuin alempi, mutta alempi hieman selkeämpi
    _.uniq(
        _.map(getState().posts, 'userId'))
            .forEach(id => dispatch(fetchUser(id)));
    */

    _.chain(getState().posts)
        .map('userId')
            .uniq()
                .forEach(id => dispatch(fetchUser(id)))
                    .value();
};

const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};


/*
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// Memoize, jotta usereita samalla id:llä, ei haeta apista montaa kertaa
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/