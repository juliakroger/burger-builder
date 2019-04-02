import * as actions from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.INIT_PURCHASE:
        return initialState;

      case actions.PURCHASE_BURGER:
        return {
          ...state,
          loading: true,
          error: null
        }
      case actions.PURCHASE_BURGER_SUCESS:
        const newOrder = {
          ...action.orderData,
          id: action.orderId
        }
        return {
          ...state,
          loading: false,
          orders: state.orders.concat(newOrder)
        };

      case actions.PUCHASE_BURGER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error
        };

      default:
        return state;

    }
};

export default reducer;