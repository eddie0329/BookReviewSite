import books from "./books";
import loading from "./loading";
import {
  recieveBooks,
  deleteBook,
  undoDeleteBook,
  addBook,
  startRecieveBooks,
  errorRecieveBooks
} from "../actions";

describe("reducer", () => {
  describe("book", () => {
    let state = null;

    beforeEach(() => {
      state = books(undefined, {});
    });

    afterEach(() => {
      state = null;
    });
    it("should return initialState", () => {
      expect(state).toEqual([]);
    }); // end of test 'should return initialState'

    it("recieveBooks(books)can change the state", () => {
      const booksMock = [
        {
          bookId: 1,
          ownerId: "7d26db27-168c-4c6a-bd9a-9e20677b60b8",
          title: "모던 자바스크립트 입문",
          message: "모던하군요",
          author: "서재원",
          url:
            "http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc=",
          createdAt: "2019-05-15T07:18:14.000Z",
          updatedAt: "2019-06-07T22:56:50.000Z",
          deletedAt: null
        }
      ];
      state = books(state, recieveBooks(booksMock));
      expect(state).toEqual(booksMock);
    }); // end of "recieveBooks(books)can change the state"

    it("deleteBooks(bookId)can change the deleteAt: date", () => {
      const booksMock = [
        {
          bookId: 1,
          ownerId: "7d26db27-168c-4c6a-bd9a-9e20677b60b8",
          title: "모던 자바스크립트 입문",
          message: "모던하군요",
          author: "서재원",
          url:
            "http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc=",
          createdAt: "2019-05-15T07:18:14.000Z",
          updatedAt: "2019-06-07T22:56:50.000Z",
          deletedAt: null
        }
      ];
      state = books(state, recieveBooks(booksMock));
      state = books(state, deleteBook(1));
      expect(state[0].deletedAt).not.toEqual(null);
    }); // end of "deleteBooks(bookId)can change the deleteAt: date"

    it("undoDeleteBooks(bookId)can change the deleteAt: date", () => {
      const booksMock = [
        {
          bookId: 1,
          ownerId: "7d26db27-168c-4c6a-bd9a-9e20677b60b8",
          title: "모던 자바스크립트 입문",
          message: "모던하군요",
          author: "서재원",
          url:
            "http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc=",
          createdAt: "2019-05-15T07:18:14.000Z",
          updatedAt: "2019-06-07T22:56:50.000Z",
          deletedAt: null
        }
      ];
      state = books(state, recieveBooks(booksMock));
      state = books(state, undoDeleteBook(1));
      expect(state[0].deletedAt).toEqual(null);
    }); // end of "undoDeleteBooks(bookId)can change the deleteAt: date"

    it("addBook(book)can change state", () => {
      const booksMock = [
        {
          bookId: 1,
          ownerId: "7d26db27-168c-4c6a-bd9a-9e20677b60b8",
          title: "모던 자바스크립트 입문",
          message: "모던하군요",
          author: "서재원",
          url:
            "http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc=",
          createdAt: "2019-05-15T07:18:14.000Z",
          updatedAt: "2019-06-07T22:56:50.000Z",
          deletedAt: null
        }
      ];
      state = books(state, addBook(booksMock));
      expect(state).toEqual(booksMock);
    }); // end of "addBook(book)can change state"

    describe("loading", () => {
      let state = false;

      it("when START_RECIEVE_BOOKS return loading state == true", () => {
        state = loading(state, startRecieveBooks());
        expect(state).toEqual(true);
      }); // end of "when START_RECIEVE_BOOKS return loading state == true"

      it("when RECIEVE_BOOKS return loading state == true", () => {
        state = loading(state, recieveBooks());
        expect(state).toEqual(false);
      }); // end of "when RECIEVE_BOOKS return loading state == false"

      it("when ERROR_RECIEVE_BOOKS return loading state == true", () => {
        state = loading(state, errorRecieveBooks());
        expect(state).toEqual(false);
      }); // end of "when ERROR_RECIEVE_BOOKS return loading state == false"
      
    }); //end of loading
  }); // end of books
}); // end of reducers
