const INDEX = (state, payload) => {
    state.posts = payload.posts;
};
const PAGINATE = (state, payload) => {
    state.posts = state.posts.concat(payload.posts);
};
const CLEAR_POSTS = (state) => {
    state.posts = [];
};
const SET_CURRENT_POST = (state, payload) => {
    state.currentPost = payload.currentPost;
    state.showDialog = true;
}
const SET_SHOW_DIALOG = (state, payload) => {
    state.showDialog = payload.showDialog;
}
export default {
    INDEX,
    PAGINATE,
    CLEAR_POSTS,
    SET_CURRENT_POST,
    SET_SHOW_DIALOG
}