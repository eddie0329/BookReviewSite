import React, { Component } from "react";

export class Book extends Component {
  async componentDidMount() {
    const { token, recieveBookThunk } = this.props;
    const bookId = this.props.bookId.bookId;
    recieveBookThunk(token, bookId);
    console.log(this.props.book);
  }

  render() {
    const book = this.props.book;
    return (
      <div
        style={{
          overflowX: "hidden",
          overflowY: "auto",
          height: "550px",
          paddingRight: "10px"
        }}
      >
        <h6 style={{textAlign: "right"}}>id: {book.ownerId}</h6>
        <h6 style={{textAlign: "right"}}>Created: {book.createdAt}</h6>
        <h6 style={{textAlign: "right"}}>Updated: {book.updatedAt}</h6>
        <h1 style={{textAlign: "center", fontWeight: "bold"}}>{book.title}</h1>
        <h3 style={{textAlign: "right"}}>Author: {book.author}</h3>
        <h3 style={{textAlign: "right"}}>URL:{book.url}</h3>
        <p> Comments: {book.message}</p>
      </div>
    );
  }
}

export default Book;
