import React, { Component } from "react";
import styled from "styled-components";
import { Col, Input, message } from "antd";
import {withRouter} from 'react-router-dom';
import * as axios from "axios";

const Heading = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Roboto;
  font-size: 25px;
  line-height: 6;
`;

const EmailLabel = styled.div`
  font-weight: bold;
  margin-left: 40px;
  margin-bottom: 8px;
`;

const EmailInput = styled(Input).attrs(() => ({
  placeholder: "Email",
  type: "text"
}))`
  width: 320px;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  margin-left: 41px;
  margin-right: 40px;
  margin-bottom: 20px;
`;

const PasswordLabel = styled.div`
  font-weight: bold;
  margin-left: 41px;
  margin-bottom: 8px;
`;

const PasswordInput = styled(Input).attrs(() => ({
  placeholder: "Password",
  type: "password"
}))`
  width: 320px;
  border-radius: 1px;
  border-width: 1px;
  font-family: Roboto;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 30px;
`;

const SigninButton = styled.button`
  margin-left: 41px;
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

const Line = styled.div`
  width: 340px;
  height: 1px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  background: #b7bcbd;
`;

const SignupText = styled.div`
  margin-left: 30px;
  font-weight: bold;
`;

const SignupButton = styled.button`
  margin-left: 85px;
  margin-bottom: 25px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  color: #315366;
  background: #f3f7f8;
  border: 2px solid #315366;
`;

const RecoveryText = styled.div`
  margin-left: 30px;
  font-weight: bold;
`;

const RecoveryButton = styled.button`
  margin-left: 96px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: uppercase;
  font-size: 13px;
  color: #315366;
  font-weight: bold;
  background: #f3f7f8;
  border: 2px solid #315366;
`;
const RedStar = styled.small`
  color: red;
`;

export class SignInForm extends Component {
  state = {
    loading: false,
  };
  
  _emailInput = React.createRef();
  _passwordInput = React.createRef();
  render() {
    return (
      <Col span={12} style={{ verticalAlign: "top" }}>
        <Heading>Log in. Start Searching.</Heading>
        <EmailLabel>Email<RedStar>*</RedStar></EmailLabel>
        <div>
          <EmailInput ref={this._emailInput} value="sameddie0329@gmail.com"/>
        </div>
        <PasswordLabel>Password<RedStar>*</RedStar></PasswordLabel>
        <div>
          <PasswordInput ref={this._passwordInput} value="1234"/>
        </div>
        <SigninButton onClick={this._click}>Sign In</SigninButton>
        <Line />
        <SignupText>
          Need to create an Account?
          <SignupButton>Sign up</SignupButton>
        </SignupText>
        <RecoveryText>
          Forgot your password?
          <RecoveryButton>Recovery</RecoveryButton>
        </RecoveryText>
      </Col>
    );
  }

  _click = async () => {
    const email = this._emailInput.current.state.value;
    const password = this._passwordInput.current.state.value;
    const { history } = this.props;
    try {
      this.setState({
        loading: true,
      });
      const response = await axios.post("https://api.marktube.tv/v1/me", {
        email,
        password
      });
      console.log(response);
      localStorage.setItem('token', response.data.token);
      history.push('/');
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      });
      message.error('ERROR');
    }
  };
}

export default withRouter(SignInForm);
