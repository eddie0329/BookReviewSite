import React, { Component } from "react";
import Book from "./Book";
import { Card, Icon, Button, Modal } from "antd";
import * as axios from 'axios';
import { blockStatement } from "@babel/types";

export class Books extends Component {
  state = {
    modal1Visible: false,
    modal2Visible: false
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {
    const { recieveBookThunk, book } = this.props;
    const title = this.props.title;
    const comment = this.props.message;
    const author = this.props.author;
    const url = this.props.url;

    return (
      <div
        style={{
          background: "#ebe5da",
          padding: "30px",
          marginRight: "auto",
          marginLeft: "auto",
          display: "flex"
        }}
      >
        <Card
          hoverable
          title={title}
          onClick={() => this.setModal2Visible(true)}
          extra={
            <Button
              size="small"
              onClick={this.deleteCard}
              style={{ float: "right", border: "2px solid #ff4d52", color: "#ff4d52" }}
            >
              <Icon type="close" />
            </Button>
          }
          bordered={true}
          style={{ width: 1000 }}
        >
          <p style={{display: "block", overflow: "hidden", whiteSpace: "nowrap"}}>AUTHOR: {author}</p>
          <p style={{display: "block", overflow: "hidden", whiteSpace: "nowrap"}}>
            URL: <a herf={url}>{url}</a>
          </p>
          <p style={{display: "block", overflow: "hidden", whiteSpace: "nowrap"}}>COMMENT: {comment}</p>
        </Card>
        <Modal
          title={title}
          centered
          visible={this.state.modal2Visible}
          footer={null}
          width={800}
          onCancel={() => this.setModal2Visible(false)}
        >
          <Book
            bookId={this.props}
            token={this.props.token}
            recieveBookThunk={recieveBookThunk}
            book={this.props.book}
            books={this.props.books}
          />
        </Modal>
      </div>
    );
  }
  deleteCard = async () => {
    const bookId = this.props.bookId;
    const token = this.props.token;
    const { deleteBookThunk } = this.props;

    deleteBookThunk(token, bookId);
    this.setModal2Visible(false)
  };
}

export default Books;
