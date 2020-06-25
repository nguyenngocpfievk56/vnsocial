import axios from 'axios';

const index = (context, page) => {
    axios.get(`/api/post/find?page=${page}`)
    .then((res) => {
        context.commit("INDEX", { posts: res.data.data })
    })
    .catch()
}
const loadMore = (context, page) => {
    var page = page ? page : 1;
    axios.get(`/api/post/find?page=${page}`)
    .then((res) => {
        context.commit("PAGINATE", { posts: res.data.data })
    })
    .catch()
}
export default {
    index,
    loadMore
};
