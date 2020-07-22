import * as booksActions from '../redux/actions/books' 
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux' // Imperative

import App from '../components/App'

import orderBy from 'lodash/orderBy' // Deklarative

const sortBy = (books, filterBy, searchQuery) => {

  books = books.filter(o=>
    o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 ||
    o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
  )

  
  switch(filterBy){
    case 'all':
      return books;
    case 'price_high':
      return orderBy(books, 'price', 'desc')
    case 'price_low':
      return orderBy(books, 'price', 'asc')
    case 'author':
      return orderBy(books, 'author', 'asc')
    default:
      return books;
  }
}

const mapStateToProps = ({books, filter}) => ({
  books: books.items && sortBy(books.items, filter.filterBy, filter.searchQuery),
  // isLoading: books.isLoading
})

// const mapDispatchToProps = dispatch => ({
//   setBooks: books => dispatch(setBooks(books))
// })

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
