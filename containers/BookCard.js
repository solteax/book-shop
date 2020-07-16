import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cartActions from '../redux/actions/cart'

import BookCard from '../components/BookCard'

const mapStateToProps = ({ cart }, {id})=>{ // cart - returns from redux, id - props from BookCard component

  const curItem = cart.amountItems?cart.amountItems.find(item=>item.id===id):0

  return { 
    amount: curItem?curItem.amount:0
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);