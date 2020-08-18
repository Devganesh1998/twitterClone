import {
  GET_ALL_TWEETS_REQUEST,
  GET_ALL_TWEETS_SUCCESS,
  GET_ALL_TWEETS_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  ADD_NEW_TWEET_REQUEST,
  ADD_NEW_TWEET_SUCCESS,
  ADD_NEW_TWEET_FAILURE,
} from "./actionType";

const initialState = {
  tweets: [],

  isGetAllTweetsSending: false,
  isGetAllTweetsSent: false,
  isGetAllTweetsError: false,
  getTweetErrorMessage: "",

  followUserSending: false,
  followUserSent: false,
  followUserError: false,
  followErrorMessage: "",

  addTweetSending: false,
  addTweetSent: false,
  addTweetError: false,
  addTweetErrorMessage: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS_REQUEST:
      return {
        ...state,
        tweets: [],
        isGetAllTweetsSending: true,
        isGetAllTweetsSent: false,
        isGetAllTweetsError: false,
        getTweetErrorMessage: "",
      };
    case GET_ALL_TWEETS_SUCCESS:
      return {
        ...state,
        tweets: action.tweets,
        isGetAllTweetsSending: false,
        isGetAllTweetsSent: true,
      };
    case GET_ALL_TWEETS_FAILURE:
      return {
        ...state,
        isGetAllTweetsSending: false,
        isGetAllTweetsError: true,
        getTweetErrorMessage: action.error,
      };
    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        followUserSending: true,
        followUserSent: false,
        followUserError: false,
        followErrorMessage: "",
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        followUserSending: false,
        followUserSent: true,
        followUserError: false,
        followErrorMessage: "",
      };
    case FOLLOW_USER_FAILURE:
      return {
        ...state,
        followUserSending: false,
        followUserSent: false,
        followUserError: true,
        followErrorMessage: action.error,
      };
    case ADD_NEW_TWEET_REQUEST:
      return {
        ...state,
        addTweetSending: true,
        addTweetSent: false,
        addTweetError: false,
        addTweetErrorMessage: "",
      };
    case ADD_NEW_TWEET_SUCCESS:
      return {
        ...state,
        addTweetSending: false,
        addTweetSent: true,
        addTweetError: false,
        addTweetErrorMessage: "",
      };
    case ADD_NEW_TWEET_FAILURE:
      return {
        ...state,
        addTweetSending: false,
        addTweetSent: false,
        addTweetError: true,
        addTweetErrorMessage: action.error,
      };
    default:
      return state;
  }
};

export default Reducer;
