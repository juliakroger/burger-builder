import * as act from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSucess = (id, orderData) => {
  return {
    type: act.PURCHASE_BURGER_SUCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: act.PUCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurger = () => {
  return {
    type: act.PURCHASE_BURGER
  }
}

export const purchaseBurgerStart = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurger())
    axios.post('/orders.json', orderData)
        .then(response => {
          console.log(response.data)
          dispatch(purchaseBurgerSucess(response.data, orderData))
        })
        .catch(error => {
          dispatch(purchaseBurgerFail(error))
        })
  }
}
