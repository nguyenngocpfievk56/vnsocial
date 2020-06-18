// Thực hiện các tác vụ liên kết tới bên ngoài
// Nhận tác động từ bên ngoài -> truyền vào cho mutation -> update state

import axios from 'axios';

const getQas = (context, params) => {
  axios.get(`/api/qa/get-all`, { params })
    .then((res) => {
      console.log(res);
      context.commit("SET_QAS", { data: res.data })
    })
    .catch()
}

export default {
  getQas
};
