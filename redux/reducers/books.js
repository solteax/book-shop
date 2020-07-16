import { SET_BOOKS } from '../actions/types'

const initialState = {
  // isLoading: false,
  items: null
};

export default (state = initialState, action) => {
  switch(action.type){
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload,
        // isLoading: true,
      }
    default: 
      return state;
  }
}