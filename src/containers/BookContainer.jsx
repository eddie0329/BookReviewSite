import { connect } from "react-redux";
import {
  recieveBooks,
  deleteBook,
  undoDeleteBook,
  recieveBooksThunk,
  deleteBookThunk,
  addBookThunk,
  recieveBook,
  recieveBookThunk
} from "../actions";
import BookList from "../components/BookList";

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading,
  book: state.select,
});

const mapDispatchToProps = dispatch => ({
  recieveBooks: books => {
    dispatch(recieveBooks(books));
  },
  deleteBook: bookId => {
    dispatch(deleteBook(bookId));
  },
  undoDeleteBook: bookId => {
    dispatch(undoDeleteBook(bookId));
  },
  recieveBooksThunk: token => {
    dispatch(recieveBooksThunk(token));
  },
  deleteBookThunk: (token, bookId) => {
    dispatch(deleteBookThunk(token, bookId));
  },
  addBookThunk: (token, book) => {
    dispatch(addBookThunk(token, book));
  },
  recieveBook: book => {
    dispatch(recieveBook(book));
  },
  recieveBookThunk: (token, bookId) => {
    dispatch(recieveBookThunk(token, bookId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
