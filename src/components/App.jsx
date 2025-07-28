import React from "react"
// import {useSelector, useDispatch} from 'react-redux'
import axios from "axios"

import { Container, Card } from "semantic-ui-react"

import BookCard from "../containers/BookCard"
import Filter from "../containers/Filter"
import Menu from "../containers/Menu"

function App(props) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      const { setBooks } = props

      setIsError(false)
      try {
        // TODO: update to dynamic path
        const res = await axios(`/book-shop/books.json`)

        setBooks(res.data)
      } catch (error) {
        console.log("Fetch Error: ", error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const { books } = props //, isLoading

  // The same with react hooks
  // const books = useSelector(state=>state.items && sortBy(books.items, filter.filterBy, filter.searchQuery));
  // const isLoading = useSelector(state=>state.isLoading)
  // const dispatch = useDispatch()

  return (
    <Container>
      <Menu />
      <Filter />
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        "Загрузка..."
      ) : (
        <Card.Group itemsPerRow={4}>
          {books.map((book) => (
            <BookCard key={book.title + book.author} {...book}></BookCard>
          ))}
        </Card.Group>
      )}
    </Container>
  )
}

export default App
