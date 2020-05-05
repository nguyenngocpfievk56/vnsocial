// Thực hiện các tác vụ liên kết tới bên ngoài
// Nhận tác động từ bên ngoài -> truyền vào cho mutation -> update state

import axios from 'axios';

const getQas = (context) => {
  axios.get('/api/qa/get-all')
    .then((res) => {
      context.commit("SET_QAS", { qas: res.data.data })
    })
    .catch()
}

export default {
  getQas
};
