import axios from 'axios';

const ToPost = (context, params) => {
    axios.post('/api/post/create', params)
    .then((res) => {
        context.commit('SET_POSTS', { post: res.data.post })
    })
    .catch((err) => {
        console.log(err)
    })
}
export default {
	ToPost
};
