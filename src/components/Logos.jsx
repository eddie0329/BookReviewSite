import React, { Component } from "react";
import BookImage from "../images/BookImage.jpg";

export class Logos extends Component {
  render() {
    return (
      <>
        <img src={BookImage} style={{ width: "2200px", height: "400px" }}></img>
        <div>Eddie's Book Review</div>
        <div
          style={{
            width: "2200px",
            height: "1px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "black"
          }}
        />
      </>
    );
  }
}

export default Logos;
