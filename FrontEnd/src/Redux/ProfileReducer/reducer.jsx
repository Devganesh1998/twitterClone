import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_USER_TWEETS_REQUEST,
  GET_USER_TWEETS_SUCCESS,
  GET_USER_TWEETS_FAILURE,
  GET_ALL_PROFILES_REQUEST,
  GET_ALL_PROFILES_SUCCESS, 
  GET_ALL_PROFILES_FAILURE
} from "./actionType";

const initialState = {
  userProfile: {},
  userTweets: [],
  allProfiles: [],

  isGetProfSending: false,
  isGetProfSent: false,
  isGetProfError: false,
  ProfileErrorMessage: "",

  isallProfSending: false,
  isallProfSent: false,
  isallProfError: false,
  allProfileErrorMessage: "",


  isUserTweetSending: false,
  isUserTweetSent: false,
  isUserTweetError: false,
  UserTweetErrorMessage: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        userProfile:{},
        isGetProfSending: true,
        isGetProfSent: false,
        isGetProfError: false,
        ProfileErrorMessage: "",
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.user,
        isGetProfSending: false,
        isGetProfSent: true,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        isGetProfSending: false,
        isGetProfError: true,
        ProfileErrorMessage: action.error,
      };
    case GET_USER_TWEETS_REQUEST:
      return {
        ...state,
        userTweets: [],
        isUserTweetSending: true,
        isUserTweetSent: false,
        isUserTweetError: false,
        UserTweetErrorMessage: "",
      };
    case GET_USER_TWEETS_SUCCESS:
      return {
        ...state,
        userTweets: action.payload,
        isUserTweetSending: false,
        isUserTweetSent: true,
      };
    case GET_USER_TWEETS_FAILURE:
      return {
        ...state,
        isUserTweetSending: false,
        isUserTweetError: true,
        UserTweetErrorMessage: action.error,
      };
    case GET_ALL_PROFILES_REQUEST:
      return {
        ...state,
        allProfiles: [],
        isallProfSending: true,
        isallProfSent: false,
        isallProfError: false,
        allProfileErrorMessage: "",
      };
    case GET_ALL_PROFILES_SUCCESS:
      return {
        ...state,
        allProfiles: action.users,
        isallProfSending: false,
        isallProfSent: true,
      };
    case GET_ALL_PROFILES_FAILURE:
      return {
        ...state,
        isallProfError: true,
        allProfileErrorMessage: action.error,
      };
    default:
      return state;
  }
};

export default Reducer;
