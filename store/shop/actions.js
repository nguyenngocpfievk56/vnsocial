import axios from 'axios';

const ToShops = (context, params) => {
    axios.get('/api/shop/create', params)
    .then((res) => {
        context.commit('SET_SHOPS', { shops: res.data.shop })
    })
    .catch((err) => {
        console.log(err)
    })
}
export default {
    ToShops
};
