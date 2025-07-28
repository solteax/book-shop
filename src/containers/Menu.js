import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cartActions from '../redux/actions/cart'
import uniqBy from 'lodash/uniqBy'

import Menu from '../components/Menu'

const mapStateToProps = ({ cart })=>{

  // console.log(cart.amountItems)
  
  return {
    totalPrice: cart.items.reduce((total, book)=>total+book.price, 0),
    totalBooks: cart.items.length,
    items: uniqBy(cart.items, o=>o.id),
    amountItems: cart.amountItems
  }
}

// const mapStateToProps = (state)=>{
//   console.log(state);
  
//   return {
//     totalPrice: state.cart.items.reduce((total, book)=>total+book.price, 0),
//     totalBooks: state.cart.items.length,
//     items: uniqBy(state.cart.items, o=>o.id)
//   }
// }

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);