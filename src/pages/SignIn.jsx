import React, { Component } from "react";
import styled from "styled-components";
import SignInImage from "../components/SignInImage";
import SignInForm from "../components/SignInForm";
import { Row, Col } from "antd";

const Page = styled(Row).attrs(() => ({
  type: "flex",
  align: "middle"
}))`
  height: 100vh;
`;

const Title = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  color: #642828;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Underline = styled.div`
  width: 200px;
  height: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  background: linear-gradient(to right, #803b32, #ddb49b);
`;

const Contents = styled(Row).attrs(() => ({
  type: "flex"
}))`
  margin-top: 50px;
  background-color: #f3f7f8;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

export class SignIn extends Component {
  render() {
    return (
      <Page>
        <Col span={24}>
          <Title>Eddie'S REVIEW SERVICE FOR BOOKS</Title>
          <SubTitle>
            Please share your opinion on web development books.
          </SubTitle>
          <Underline />
          <Contents>
            <SignInImage/>
            <SignInForm/>
          </Contents>
        </Col>
      </Page>
    );
  }
}

export default SignIn;
