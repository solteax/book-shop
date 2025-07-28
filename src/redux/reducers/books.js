import { SET_BOOKS } from '../actions/types'

const initialState = {
  items: null
};

export default (state = initialState, action) => {
  switch(action.type){
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload,
      }
    default: 
      return state;
  }
}