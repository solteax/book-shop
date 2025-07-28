import {SET_BOOKS} from './types'

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books
})