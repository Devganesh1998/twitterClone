import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  VERIFY_AUTH_REQUEST,
  VERIFY_AUTH_SUCCESS,
  VERIFY_AUTH_FAILURE,
} from "./actionType";

import axios from "../axoisInstance";

const requestRegister = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    user,
  };
};

const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    error,
  };
};

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const logoutSuccess = (payload) => {
  return {
    type: LOGOUT_SUCCESS,
    payload,
  };
};

const logoutFailure = (error) => {
  return {
    type: LOGOUT_FAILURE,
    error,
  };
};

const requestVerifyAuth = () => {
  return {
    type: VERIFY_AUTH_REQUEST,
  };
};

const VerifyAuthSuccess = (payload) => {
  return {
    type: VERIFY_AUTH_SUCCESS,
    payload,
  };
};

const VerifyAuthFailure = (error) => {
  return {
    type: VERIFY_AUTH_FAILURE,
    error,
  };
};

export const registerUser = (payload) => (dispatch) => {
  dispatch(requestRegister());
  axios({
    method: "POST",
    url: "https://twittercloneserver.herokuapp.com/user/register",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      const { data } = res;
      if (data.isRegisterSuccess) {
        dispatch(registerSuccess(data));
      } else {
        dispatch(registerFailure(res.errormsg));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(registerFailure(err));
    });
};

export const loginUser = (payload) => (dispatch) => {
  dispatch(requestLogin());
  axios({
    method: "POST",
    url: "https://twittercloneserver.herokuapp.com/user/login",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      const { data } = res;
      data.isLoginSuccess
        ? dispatch(loginSuccess(data))
        : dispatch(loginFailure(res.errormsg));
    })
    .catch((err) => dispatch(loginFailure(err)));
};

export const logoutUser = (payload) => (dispatch) => {
  dispatch(requestLogout());
  axios({
    method: "GET",
    url: "https://twittercloneserver.herokuapp.com/user/logout",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => {
      const { data } = res;
      data.isLogoutSuccess
        ? dispatch(logoutSuccess(data))
        : dispatch(logoutFailure(res.errormsg));
    })
    .catch((err) => dispatch(logoutFailure(err)));
};

export const verifyAuth = (payload) => (dispatch) => {
  dispatch(requestVerifyAuth());
  axios({
    method: "GET",
    url: "https://twittercloneserver.herokuapp.com/user/verifyAuth",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      const { data } = res;
      data.isAuthenticated
        ? dispatch(VerifyAuthSuccess(data))
        : dispatch(VerifyAuthFailure(res.errormsg));
    })
    .catch((err) => dispatch(VerifyAuthFailure(err)));
};
