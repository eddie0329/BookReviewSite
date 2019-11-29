import {
  START_RECIEVE_BOOKS,
  RECIEVE_BOOKS,
  ERROR_RECIEVE_BOOKS
} from "../constants/actionTypes";
import * as axios from "axios";
import { BookRequest } from "../services/RequestServices/BookRequest";

export function startRecieveBooks() {
  return {
    type: START_RECIEVE_BOOKS
  };
}

export function recieveBooks(books) {
  return {
    type: RECIEVE_BOOKS,
    books
  };
}

export function errorRecieveBooks() {
  return {
    type: ERROR_RECIEVE_BOOKS
  };
}

export function recieveBooksThunk(token) {
  return async dispatch => {
    dispatch(startRecieveBooks());
    try {
      const response = await BookRequest.getBooks(token);
      dispatch(recieveBooks(response.data));
    } catch (error) {
      console.log(error);
      dispatch(errorRecieveBooks());
    }
  };
}
