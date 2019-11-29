import { RECIEVE_BOOK } from "../constants/actionTypes";
import { Map } from "immutable";

const initialState = null;

export default function book(state = initialState, action) {
  switch (action.type) {
    case RECIEVE_BOOK: {
      return Map(state).toObject();
    }
    default:
      return state;
  }
}
