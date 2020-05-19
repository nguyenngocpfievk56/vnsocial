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
const SET_CURRENT_POST = (state, payload) => {
    state.currentPost = payload.currentPost;
    state.showDialog = true;
}
const SET_SHOW_DIALOG = (state, payload) => {
    state.showDialog = payload.showDialog;
}
export default {
    SET_POSTS,
    CLEAR_POSTS,
    SET_CURRENT_POST,
    SET_SHOW_DIALOG
}