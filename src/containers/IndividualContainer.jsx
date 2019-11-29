import { connect } from 'react-redux';
import { recieveBook, recieveBookThunk } from '../actions';
import Book from "../components/Book";

const mapStateToProps = state => ({
    book: state.book,
});

const mapDispatchToProps = dispatch => ({
    recieveBook: book => {
        dispatch(recieveBook(book));
    },
    recieveBookThunk: (token, bookId) => {
        dispatch(recieveBookThunk(token, bookId));
    },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Book);
