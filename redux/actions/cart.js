import {ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_AMOUNT, DECREMENT_AMOUNT} from './types'

export const addToCart = obj => ({
  type: ADD_TO_CART,
  payload: obj
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const incrementAmount = obj => ({
  type: INCREMENT_AMOUNT,
  payload: obj
});

export const decrementAmount = id => ({
  type: DECREMENT_AMOUNT,
  payload: id
});