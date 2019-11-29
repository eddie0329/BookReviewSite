import React, { Component } from "react";
import { Col } from "antd";
import styled from "styled-components";
import Image from "../images/bg_signin.png";

export class SignInImage extends Component {
  render() {
    return (
      <Col span={12}>
        <img src={Image} style={{ width: "100%" }} alt="SignIn" />
      </Col>
    );
  }
}

export default SignInImage;
