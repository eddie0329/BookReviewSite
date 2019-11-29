import {
  startRecieveBooks,
  recieveBooks,
  errorRecieveBooks,
  recieveBook,
  startRecieveBook,
  errorRecieveBook,
  addBook,
  deleteBook,
  undoDeleteBook
} from ".";

describe("book", () => {
  describe("recieveBooks_action", () => {
    it("startRecieveBooks() should create action", () => {
      expect(startRecieveBooks()).toEqual({ type: "START_RECIEVE_BOOKS" });
    });
    it("recieveBooks() should create action", () => {
      const books = {};
      expect(recieveBooks(books)).toEqual({ type: "RECIEVE_BOOKS", books });
    });
    it("errorRecieveBooks() should create action", () => {
      expect(errorRecieveBooks()).toEqual({ type: "ERROR_RECIEVE_BOOKS" });
    });
  });

  describe("recieveBook_action", () => {
    it("startRecieveBook() should create action", () => {
      expect(startRecieveBook()).toEqual({ type: "START_RECIEVE_BOOK" });
    });
    it("recieveBook() should create action", () => {
      const book = {};
      expect(recieveBook(book)).toEqual({ type: "RECIEVE_BOOK", book });
    });
    it("errorRecieveBook() should create action", () => {
      expect(errorRecieveBook()).toEqual({ type: "ERROR_RECIEVE_BOOK" });
    });
  });

  describe("addBook_action", () => {
    it("addBook() should create action", () => {
      const book = {};
      expect(addBook(book)).toEqual({ type: "ADD_BOOK", book });
    });
  });

  describe("deleteBook_action", () => {
    it("deleteBook() should create action", () => {
      const bookId = 1;
      expect(deleteBook(bookId)).toEqual({ type: "DELETE_BOOK", bookId });
    });
  });

  describe("undoDeleteBook_action", () => {
    it("undoDeleteBook() should create action", () => {
      const bookId = 1;
      expect(undoDeleteBook(bookId)).toEqual({
        type: "UNDO_DELETE_BOOK",
        bookId
      });
    });
  });

  
});
