const SET_SHOP = (state, payload) => {
    state.info = Object.assign({}, state.info, payload.shop);
  };
  const CLEAR_SHOP = (state) => {
    state.shops = [];
};
  
  export default {
    SET_SHOP,
    CLEAR_SHOP ,
  
  };
  