import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import LoginForm from "../Components/authComponents/LoginForm";
import RegisterForm from "../Components/authComponents/RegisterForm";
import { loginUser } from "../Redux/AuthReducer/action";
import { registerUser } from "../Redux/AuthReducer/action";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const { TabPane } = Tabs;

const AuthPage = ({ loginUser, registerUser, is_auth, ...rest }) => {
  const [currTab, setCurrTab] = useState(rest.match.params.type);
  const callback = (key) => {
    setCurrTab(key);
    console.log(key, currTab, rest.match.params);
  };

  useEffect(() => {
    setCurrTab(rest.match.params.type);
  }, [rest.match.params.type]);

  return is_auth ? (
    <Redirect to="/" {...rest} />
  ) : (
    <Tabs
      defaultActiveKey="login"
      onChange={callback}
      activeKey={currTab}
      {...rest}
    >
      <TabPane tab="Login" key="login">
        <LoginForm loginUser={loginUser} />
      </TabPane>
      <TabPane tab="Register" key="register">
        <RegisterForm registerUser={registerUser} />
      </TabPane>
    </Tabs>
  );
};

const mapStateToProps = (state) => ({
  is_auth: state.auth.isAuthenticated,
});
const mapDispatchToProps = (dispatch) => ({
  loginUser: (datas) => dispatch(loginUser(datas)),
  registerUser: (datas) => dispatch(registerUser(datas)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
