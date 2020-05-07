const SET_POSTS = (state, payload) => {
    payload.posts.map(post => {
        if (state.posts.filter((ipost) => ipost._id == post._id).length == 0) {
            state.posts.push(post);
        }
    })
};
const CLEAR_POSTS = (state) => {
    state.posts = [];
};
export default {
    SET_POSTS,
    CLEAR_POSTS,
}