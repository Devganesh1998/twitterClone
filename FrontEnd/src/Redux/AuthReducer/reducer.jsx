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

const initialState = {
  username: "",
  email: "",

  isRegisterSending: false,
  isRegisterSent: false,
  isRegisterError: false,
  registerErrorMessage: "",

  isLoginSending: false,
  isLoginSent: false,
  isLoginError: false,
  loginErrorMessage: "",

  isLogoutSending: false,
  isLogoutSent: false,
  isLogoutError: false,
  logoutErrorMessage: "",

  isVerifyAuthSending: false,
  isVerifyAuthSent: false,
  isVerifyAuthError: false,
  verifyAuthErrorMessage: "",

  isUserLoggedIn: false,
  isUserRegistered: false,
  isAuthenticated: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isRegisterSending: true,
        isRegisterSent: false,
        isRegisterError: false,
        registerErrorMessage: "",
        username: "",
        email: "",
        isUserRegistered: false,
        isAuthenticated: false,
      };
    case REGISTER_SUCCESS:
      const { Rusername, Remail } = action.payload;
      return {
        ...state,
        isRegisterSending: false,
        isRegisterSent: true,
        username: Rusername,
        email: Remail,
        isUserRegistered: true,
        isAuthenticated: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegisterSending: false,
        isRegisterError: true,
        registerErrorMessage: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoginSending: true,
        isLoginSent: false,
        isLoginError: false,
        loginErrorMessage: "",
        username: "",
        email: "",
        isUserLoggedIn: false,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      const { Lusername, Lemail } = action.payload;
      return {
        ...state,
        isLoginSending: false,
        isLoginSent: true,
        username: Lusername,
        email: Lemail,
        isUserLoggedIn: true,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoginSending: false,
        isLoginError: true,
        isAuthenticated: false,
        loginErrorMessage: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogoutSending: true,
        isLogoutSent: false,
        isLogoutError: false,
        logoutErrorMessage: "",
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogoutSending: false,
        isLogoutSent: true,
        isUserLoggedIn: false,
        isUserRegistered: false,
        isAuthenticated: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLogoutSending: false,
        isLogoutError: true,
        logoutErrorMessage: action.payload,
      };
    case VERIFY_AUTH_REQUEST:
      return {
        ...state,
        isVerifyAuthSending: true,
        isVerifyAuthSent: false,
        isVerifyAuthError: false,
        verifyAuthErrorMessage: "",
      };
    case VERIFY_AUTH_SUCCESS:
      let { Vusername, Vemail } = action.payload;
      return {
        ...state,
        isVerifyAuthSending: false,
        isVerifyAuthSent: true,
        username: Vusername,
        email: Vemail,
        isAuthenticated: true,
      };
    case VERIFY_AUTH_FAILURE:
      return {
        ...state,
        isVerifyAuthSending: false,
        isVerifyAuthError: false,
        verifyAuthErrorMessage: action.payload,
        username: "",
        email: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default Reducer;
