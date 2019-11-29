import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Button, Icon } from "antd";
import * as axios from "axios";
const { SubMenu } = Menu;

export class MyMenu extends Component {
  state = {
    userName: "",
  }
  async componentDidMount() {
    const { token } = this.props;
    try {
      const response = await axios.get(`https://api.marktube.tv/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(`me: ${response.data.name}`);
      this.setState({userName: response.data.name});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px", background: "#f5efeb" }}
          onClick={{ textDecoration: "none" }}
        >
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="user" />
                {this.state.userName}
              </span>
            }
            style={{ float: "right" }}
          >
            <Menu.ItemGroup>
              <Menu.Item key="setting:1">Profile</Menu.Item>
              <Menu.Item key="setting:2" onClick={this.logout}>
                <Icon type="logout" />
                Log out
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <Menu.Item
            key="1"
            style={{
              color: "black",
              fontWeight: "bold",
              float: "right",
              marginRight: "50px"
            }}
          >
            <NavLink
              exact
              to="/"
              style={{
                fontFamily: "Roboto",
                textDecoration: "none",
                color: "black"
              }}
            >
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item
            // key="0"
            style={{
              color: "black",
              fontWeight: "bold",
              float: "",
              marginRight: "50px",
              textTransform: "uppercase",
              fontFamily: "Roboto",
              textAlign: "center",
              fontSize: "20px"
            }}
          >
            <Icon type="radar-chart" />
            Eddie Sunny's
          </Menu.Item>
        </Menu>
      </>
    );
  }
  logout = async () => {
    try {
      await axios.del("https://api.marktube.tv/v1/me", {
        headers: { Authorization: `Bearer ${this.props.token}` }
      });
    } catch (error) {}
    localStorage.removeItem("token");
    window.location.reload();
  };
}

export default MyMenu;
