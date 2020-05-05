// Để cập nhật lại giá trị của state
const SET_QAS = (state, payload) => {
  payload.qas.map(qa => {
    if (state.qas.filter((iqa) => iqa._id == qa._id).length == 0) {
			state.qas.push(qa);
		}
  })
};

const CLEAR_QAS = (state) => {
  state.qas = [];
}

export default {
  SET_QAS,
  CLEAR_QAS,
};
