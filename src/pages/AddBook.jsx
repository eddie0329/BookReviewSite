import React, { Component } from "react";
import styled from "styled-components";
import { Col, Input, message, Row } from "antd";
import * as axios from "axios";
import {withRouter} from 'react-router-dom';

const Heading = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Roboto;
  font-size: 25px;
  line-height: 6;
`;

const TextLabel = styled.div`
  font-weight: bold;
  margin-left: 40px;
  margin-bottom: 8px;
`;

const TextInput = styled(Input).attrs(() => ({
  type: "text"
}))`
  width: 420px;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  margin-left: 41px;
  margin-right: 40px;
  margin-bottom: 20px;
`;

const SigninButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  background: #315366;
  color: #f2f6f7;
`;
const Contents = styled(Row).attrs(() => ({
  type: "flex"
}))`
  margin-top: 15px;
  background-color: #f5efeb;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
`;

const RedStar = styled.small`
  color: red;
`;
export class AddBook extends Component {

  _titleInput = React.createRef();
  _commentInput = React.createRef();
  _authorInput = React.createRef();
  _urlInput = React.createRef();
  render() {
    return (
      <Contents>
        <Col span={24} style={{ verticalAlign: "top" }}>
          <Heading>Add Books</Heading>
          <TextLabel>
            Title<RedStar>*</RedStar>
          </TextLabel>
          <div>
            <TextInput ref={this._titleInput} placeholder="Title" />
          </div>
          <TextLabel>
            Comment<RedStar>*</RedStar>
          </TextLabel>
          <div>
            <TextInput ref={this._commentInput} placeholder="Comment" />
          </div>
          <TextLabel>Author</TextLabel>
          <div>
            <TextInput ref={this._authorInput} placeholder="Author" />
          </div>
          <TextLabel>URL</TextLabel>
          <div>
            <TextInput ref={this._urlInput} placeholder="URL" />
          </div>
          <SigninButton onClick={this.submit}>Submit</SigninButton>
        </Col>
      </Contents>
    ); // end of return
  } //end of render

  submit = async () => {
    const { token } = this.props;
    const title = this._titleInput.current.state.value;
    const comment = this._commentInput.current.state.value;
    const author = this._authorInput.current.state.value;
    const url = this._urlInput.current.state.value;
    const body = { title: title, message: comment, author: author, url: url };
    try {
      await axios.post('https://api.marktube.tv/v1/book', body, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // this.props.add(title, comment, author, url);
      
    } catch (error) {
      console.log(error);
    }
    // this.props.addBookThunk(token, body);
    if(title === "" || title === undefined || comment === "" || comment === undefined) {
      message.warning("Fill Out the Form");
      return;
    }

    message.success(`${title} is added`);

    
    // setInterval(() => {
    //   window.close();
    // } ,600);
  };
}

export default withRouter(AddBook);
