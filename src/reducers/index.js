import { combineReducers } from 'redux';
import books from './books';
import loading from './loading';
import select from './select';

const reducer = combineReducers({
    books,
    loading,
    select,
})

export default reducer;