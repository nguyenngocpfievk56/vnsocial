import axios from 'axios';

const getShops = (context, params) => {
  context.commit("SET_LOADING", { loading: true });
  axios.get(`/api/shop/get-all`, { params })
    .then((res) => {
      // context.commit("SET_LOADING", { loading: false });
      context.commit("SET_SHOPS", { data: res.data })
    })
    .catch(() => {
      // context.commit("SET_LOADING", { loading: false });
    })
}

const getShopComments = (context, params) => {
  axios.get(`/api/shop/${params.id}/comments`)
    .then((res) => {
      console.log(res);
      // context.commit("SET_SHOPS", { data: res.data })
    })
    .catch(() => {
    })
}

const createShopComments = (context, params) => {
  axios.post(`/api/shop/${params.shop}/comment`, { params })
    .then((res) => {
      console.log(res);
      // context.commit("SET_SHOPS", { data: res.data })
    })
    .catch(() => {
    })
}

export default {
  getShops,
  getShopComments,
  createShopComments
};
