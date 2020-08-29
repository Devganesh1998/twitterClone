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
  UN_FOLLOW_USER_REQUEST,
  UN_FOLLOW_USER_SUCCESS,
  UN_FOLLOW_USER_FAILURE,
  LIKE_TWEET_REQUEST,
  LIKE_TWEET_SUCCESS,
  LIKE_TWEET_FAILURE
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

  unfollowUserSending: false,
  unfollowUserSent: false,
  unfollowUserError: false,
  unfollowErrorMessage: "",

  addTweetSending: false,
  addTweetSent: false,
  addTweetError: false,
  addTweetErrorMessage: "",

  likeTweetSending: false,
  likeTweetSent: false,
  likeTweetError: false,
  likeTweetErrorMessage: "",

  isFollowSuccess: false,
  isUnFollowSuccess: false,
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
        tweets: [
          ...state.tweets,
          ...action.tweets
        ],
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
        isFollowSuccess: false,
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        followUserSending: false,
        followUserSent: true,
        isFollowSuccess: true,
      };
    case FOLLOW_USER_FAILURE:
      return {
        ...state,
        followUserSending: false,
        followUserError: true,
        followErrorMessage: action.error,
      };
    case UN_FOLLOW_USER_REQUEST:
      return {
        ...state,
        unfollowUserSending: true,
        unfollowUserSent: false,
        unfollowUserError: false,
        unfollowErrorMessage: "",
        isUnFollowSuccess: false,
      };
    case UN_FOLLOW_USER_SUCCESS:
      return {
        ...state,
        unfollowUserSending: false,
        unfollowUserSent: true,
        isUnFollowSuccess: true,
      };
    case UN_FOLLOW_USER_FAILURE:
      return {
        ...state,
        unfollowUserSending: true,
        unfollowUserError: true,
        unfollowErrorMessage: action.error,
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
    case LIKE_TWEET_REQUEST:
      return {
        ...state,
        likeTweetSending: true,
        likeTweetSent: false,
        likeTweetError: false,
        likeTweetErrorMessage: "",
      };
    case LIKE_TWEET_SUCCESS:
      return {
        ...state,
        likeTweetSending: false,
        likeTweetSent: true,
      };
    case LIKE_TWEET_FAILURE:
      return {
        ...state,
        likeTweetSending: false,
        likeTweetSent: false,
        likeTweetError: true,
        likeTweetErrorMessage: action.error,
      };
    default:
      return state;
  }
};

export default Reducer;
