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

const SET_CURRENT_QA = (state, payload) => {
  state.currentQa = payload.currentQa;
}

const SET_SHOW_DIALOG = (state, payload) => {
  state.showDialog = payload.showDialog;
}

export default {
  SET_QAS,
  CLEAR_QAS,
  SET_CURRENT_QA,
  SET_SHOW_DIALOG
};
