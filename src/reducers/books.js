import {
  RECIEVE_BOOKS,
  DELETE_BOOK,
  UNDO_DELETE_BOOK,
  ADD_BOOK
} from "../constants/actionTypes";
import { List } from "immutable";

const initialState = [];

export default function books(state = initialState, action) {
  switch (action.type) {
    case RECIEVE_BOOKS: {
      return List(state)
        .push(...action.books)
        .toArray();
    }

    case DELETE_BOOK: {
      const list = List(state);

      return list
        .setIn(
          [list.findIndex(book => book.bookId === action.bookId), "deletedAt"],
          new Date().toISOString()
        )
        .toArray();
    }

    case UNDO_DELETE_BOOK: {
      const list2 = List(state);

      return list2
        .setIn(
          [list2.findIndex(book => book.bookId === action.bookId), "deleteAt"],
          null
        )
        .toArray();
    }
    case ADD_BOOK: {
      return List(state)
        .push(...action.book)
        .toArray();
    }

    default:
      return state;
  }
}
