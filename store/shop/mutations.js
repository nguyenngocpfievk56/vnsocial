const SET_SHOPS = (state, payload) => {
  payload.shops.map(shop => {
    if (state.shops.filter((ishop) => ishop._id == shop._id).length == 0) {
			state.shops.push(shop);
		}
  })
};

const CLEAR_SHOPS = (state) => {
  state.shops = [];
}

const SET_CURRENT_SHOP = (state, payload) => {
  state.currentShop = payload.currentShop;
  state.showDialog = true;
}

const SET_SHOW_DIALOG = (state, payload) => {
  state.showDialog = payload.showDialog;
}

export default {
  SET_SHOPS,
  CLEAR_SHOPS,
  SET_CURRENT_SHOP,
  SET_SHOW_DIALOG
};
  