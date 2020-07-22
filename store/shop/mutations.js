const SET_SHOPS = (state, payload) => {
  payload.data.data.map(shop => {
    if (state.shops.filter((ishop) => ishop._id == shop._id).length == 0) {
			state.shops.push(shop);
		}
  })
  state.minId = payload.data.minId;
  console.log("minID", state.minId, payload.data.minId)
  state.maxId = payload.data.maxId;
  console.log("maxId", state.maxId, payload.data.maxId)
};

const CLEAR_SHOPS = (state) => {
  state.shops = [];
}

const SET_CURRENT_SHOP = (state, payload) => {
  state.currentShop = payload.currentShop;
}

const SET_SHOW_DIALOG = (state, payload) => {
  state.showDialog = payload.showDialog;
}

const SET_LOADING = (state, payload) => {
  state.loading = payload.loading
}

export default {
  SET_SHOPS,
  CLEAR_SHOPS,
  SET_CURRENT_SHOP,
  SET_SHOW_DIALOG,
  SET_LOADING
};
