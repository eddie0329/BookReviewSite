import React, { Component } from "react";
import * as axios from "axios";
import { Layout, Menu, Button, Icon } from "antd";
import BooksContainer from "../containers/BookContainer";
import { withRouter, NavLink } from "react-router-dom";
import BookMarkImage from "../images/bookmark.png";
import TopCarousel from "../components/TopCarousel";
import MyMenu from "../components/MyMenu";
import Head from "../components/Head";

const { Header, Footer } = Layout;

export class Home extends Component {
  render() {
    const { token } = this.props;
    return (
      <>
        <Head />
        <img
          src={BookMarkImage}
          style={{ position: "absolute", height: "500px", width: "200px" }}
        />
        <Layout className="layout" style={{ background: "#f5efeb" }}>
          {/* header with menu  */}
          <Header style={{ background: "#f5efeb" }}>
            <MyMenu token={token}/>
          </Header>

          {/* showcase */}
          <TopCarousel />

          {/* actual contents */}
          <BooksContainer token={token} />

          {/* footer */}
          <Footer
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
              background: "#f5efeb"
            }}
          >
            EddieSunny ©2019
          </Footer>
        </Layout>
      </>
    );
  }

  clickCancel = () => {
    this.setModal2Visible(false);
    window.location.reload();
  };
}

export default withRouter(Home);
