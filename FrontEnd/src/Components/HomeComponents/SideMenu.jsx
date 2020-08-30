import React from "react";
import { Menu, Switch } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "../../Styles/Home.module.css";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      current: "1",
    };
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <>
        <div className={styles.switchCont}>
          <h3>Twitter Clone</h3>
          <Switch
            checked={this.state.theme === "dark"}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          className={styles.sideMenu}
          style={{ width: 256 }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Home">
            <Menu.Item key="1">
              <Link to="/">NewsFeed</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/listAllUsers">Explore</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Profile">
            <Menu.Item key="3">
              <Link to="/profile">My Profile</Link>
            </Menu.Item>
            <Menu.Item key="4">Profile settings</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Auth">
            <Menu.Item key="5">
              <Link to="/auth/register">Register</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/auth/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="7" onClick={this.handleLogout}>
              Logout
            </Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}
