import axios from 'axios';

const getShops = (context) => {
  axios.get('/api/shop/find')
    .then((res) => {
      context.commit("SET_SHOPS", { shops: res.data.data })
    })
    .catch()
}

export default {
  getShops
};
