import React from "react";
import { Tabs } from "antd";
import LoginForm from "../Components/authComponents/LoginForm";
import RegisterForm from "../Components/authComponents/RegisterForm";
import { loginUser } from "../Redux/AuthReducer/action";
import { registerUser } from "../Redux/AuthReducer/action";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const AuthPage = ({ loginUser, registerUser, is_auth, ...rest }) => {
  return is_auth ? (
    <Redirect to="/" {...rest} />
  ) : (
    <Tabs defaultActiveKey="1" onChange={callback} {...rest}>
      <TabPane tab="Login" key="1">
        <LoginForm loginUser={loginUser} />
      </TabPane>
      <TabPane tab="Register" key="2">
        <RegisterForm registerUser={registerUser} />
      </TabPane>
    </Tabs>
  );
};

const mapStateToProps = (state) => ({
  is_auth: state.auth.isAuthenticated
});
const mapDispatchToProps = (dispatch) => ({
  loginUser: (datas) => dispatch(loginUser(datas)),
  registerUser: (datas) => dispatch(registerUser(datas)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
