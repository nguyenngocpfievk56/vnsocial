const SET_POSTS = (state, payload) => {
	state.posts = Object.assign({}, state.posts, payload.post);
};
export default {
    SET_POSTS
}