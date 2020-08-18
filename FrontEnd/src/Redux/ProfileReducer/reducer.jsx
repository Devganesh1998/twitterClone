import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_USER_TWEETS_REQUEST,
  GET_USER_TWEETS_SUCCESS,
  GET_USER_TWEETS_FAILURE,
} from "./actionType";

const initialState = {
  userProfile: {},
  userTweets: [],

  isGetProfSending: false,
  isGetProfSent: false,
  isGetProfError: false,
  ProfileErrorMessage: "",

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
    default:
      return state;
  }
};

export default Reducer;
