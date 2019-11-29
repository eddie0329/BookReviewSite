import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BookContainer from "./BookContainer";
Enzyme.configure({ adapter: new Adapter() });

describe("BookContainer", () => {
  it("render sucessfully", () => {
    const mockStore = configureMockStore([thunk]);

    let store = mockStore({
      books: [],
      loading: false
    });
    const component = mount(<BookContainer token={null} store={store} />);
    expect(component).toMatchSnapshot();
  });

  it("including books render sucessfully", () => {
    const mockStore = configureMockStore([thunk]);
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
    let store = mockStore({
      books: booksMock,
      loading: false
    });
    const component = mount(<BookContainer token={null} store={store} />);
    expect(component).toMatchSnapshot();
  });
});
