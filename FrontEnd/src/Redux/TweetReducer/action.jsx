import {
  GET_ALL_TWEETS_REQUEST,
  GET_ALL_TWEETS_SUCCESS,
  GET_ALL_TWEETS_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  ADD_NEW_TWEET_REQUEST,
  ADD_NEW_TWEET_SUCCESS,
  ADD_NEW_TWEET_FAILURE
} from "./actionType";

import axios from "../axoisInstance";

const requestAllTweets = () => {
  return {
    type: GET_ALL_TWEETS_REQUEST,
  };
};

const getAllTweetsSuccess = (tweets) => {
  return {
    type: GET_ALL_TWEETS_SUCCESS,
    tweets,
  };
};

const getAllTweetsFailure = (error) => {
  return {
    type: GET_ALL_TWEETS_FAILURE,
    error,
  };
};

const requestAddNewTweet = () => {
  return {
    type: ADD_NEW_TWEET_REQUEST,
  };
};

const addNewTweetSuccess = (user) => {
  return {
    type: ADD_NEW_TWEET_SUCCESS,
    user,
  };
};

const addNewTweetFailure = (error) => {
  return {
    type: ADD_NEW_TWEET_FAILURE,
    error,
  };
};

const requestFollow = () => {
  return {
    type: FOLLOW_USER_REQUEST,
  };
};

const FollowSuccess = (payload) => {
  return {
    type: FOLLOW_USER_SUCCESS,
    payload,
  };
};

const FollowFailure = (error) => {
  return {
    type: FOLLOW_USER_FAILURE,
    error,
  };
};

export const fetchAllTweets = (payload) => (dispatch) => {
  dispatch(requestAllTweets());
  axios({
    method: "POST",
    url: "http://localhost:5000/tweet/getall",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      const { data } = res;
      if (data.isTweetFetched) {
        dispatch(getAllTweetsSuccess(data.tweets));
      } else {
        dispatch(getAllTweetsFailure(res.errormsg));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(getAllTweetsFailure(err));
    });
};

export const addNewTweet = (payload) => (dispatch) => {
  dispatch(requestAddNewTweet());
  axios({
    method: "POST",
    url: "http://localhost:5000/tweet/add",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      const { data } = res;
      data.isTweetAdded
        ? dispatch(addNewTweetSuccess(data))
        : dispatch(addNewTweetFailure(res.errormsg));
    })
    .catch((err) => dispatch(loginFailure(err)));
};

export const FollowUser = (payload) => (dispatch) => {
  dispatch(requestFollow());
  axios({
    method: "GET",
    url: "http://localhost:5000/user/logout",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => {
      const { data } = res;
      data.isLogoutSuccess
        ? dispatch(FollowSuccess(data))
        : dispatch(FollowFailure(res.errormsg));
    })
    .catch((err) => dispatch(logoutFailure(err)));
};
