// Để cập nhật lại giá trị của state
const SET_USER = (state, payload) => {
	state.info = Object.assign({}, state.info, payload.user);
};

const SET_IS_LOADING = (state, payload) => {
  state.isLoading = payload.isLoading;
}

const SET_MESSAGE = (state, payload) => {
  state.message = payload.message;
}

const CLEAR_USER = (state) => {
  state.info = {};
}

export default {
  SET_USER,
  SET_IS_LOADING,
  SET_MESSAGE,
  CLEAR_USER,
};
