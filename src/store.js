import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import books from "./reducers/books"
import reducer from "./reducers";


const store = createStore(reducer, applyMiddleware(thunk));

console.log(store.getState());

export default store;