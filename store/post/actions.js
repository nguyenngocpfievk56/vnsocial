import axios from 'axios';

const getPosts = (context) => {
    axios.get('/api/post/find')
    .then((res) => {
        context.commit("SET_POSTS", { posts: res.data.data })
    })
    .catch()
}
export default {
	getPosts
};
