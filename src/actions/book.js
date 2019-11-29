import {
  RECIEVE_BOOK,
  ERROR_RECIEVE_BOOK,
  START_RECIEVE_BOOK,
  ADD_BOOK,
  DELETE_BOOK,
  UNDO_DELETE_BOOK
} from "../constants/actionTypes";
import { BookRequest } from "../services/RequestServices/BookRequest";

// recieve book
export function startRecieveBook() {
  return {
    type: START_RECIEVE_BOOK
  };
}

export function recieveBook(book) {
  return {
    type: RECIEVE_BOOK,
    book
  };
}

export function recieveBookThunk(token, bookId) {
  return async dispatch => {
    dispatch(startRecieveBook());
    try {
      const response = BookRequest.getBook(token, bookId);
      dispatch(recieveBook(response.data));
    } catch (error) {
      console.log(error);
      dispatch(errorRecieveBook());
    }
  };
}

export function errorRecieveBook() {
  return {
    type: ERROR_RECIEVE_BOOK
  };
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book
  };
}

export function addBookThunk(token, body) {
  return async dispatch => {
    try {
      BookRequest.addBook(token, body);
      dispatch(addBook(body));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteBook(bookId) {
  return {
    type: DELETE_BOOK,
    bookId
  };
}

export function deleteBookThunk(token, bookId) {
  return async dispatch => {
    try {
      BookRequest.deleteBook(token, bookId);
      dispatch(deleteBook(bookId));
    } catch (error) {
      console.log(error);
      undoDeleteBook(bookId);
    }
  };
}

export function undoDeleteBook(bookId) {
  return {
    type: UNDO_DELETE_BOOK,
    bookId
  };
}
