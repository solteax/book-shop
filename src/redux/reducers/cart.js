import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_AMOUNT, DECREMENT_AMOUNT } from '../actions/types'

const initialState = {
  items: [],
  amountItems: []
};

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      }
    case INCREMENT_AMOUNT:      
      const isNewItem = !(state.amountItems && state.amountItems.some(item=>item.id===action.payload.id))
      
      return {
        ...state,
        amountItems: isNewItem? [
          ...state.amountItems,
          action.payload
        ]:[
          ...state.amountItems.map(item=>item.id===action.payload.id?{id:action.payload.id, amount:action.payload.amount+1}:item)
        ]
      }
    case DECREMENT_AMOUNT :
      return {
        ...state,
        amountItems:[
          ...state.amountItems.map(item=>item.id===action.payload?{id:item.id,amount:item.amount-1}:item)
        ]
      }
    case REMOVE_FROM_CART:
      return{
        ...state,
        items: state.items.filter(item=>item.id!==action.payload),
        amountItems: state.amountItems.filter(item=>item.id!==action.payload)
      }
    default: 
      return state;
  }
}