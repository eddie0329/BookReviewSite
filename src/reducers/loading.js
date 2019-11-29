import {
  START_RECIEVE_BOOKS,
  RECIEVE_BOOKS,
  ERROR_RECIEVE_BOOKS
} from "../constants/actionTypes";


const initialState = false;

export default function loading(state = initialState, action) {
    switch(action.type) {
        case START_RECIEVE_BOOKS: {
            return true;
        }

        case RECIEVE_BOOKS: {
            return false;
        }

        case ERROR_RECIEVE_BOOKS: {
            return false;
        }

        default: {
            return state;
        }
    }
}