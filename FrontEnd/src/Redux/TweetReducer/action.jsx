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
  LIKE_TWEET_FAILURE,
} from "./actionType";
import { getAllProfiles } from "../ProfileReducer/action";

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

const FollowSuccess = () => {
  return {
    type: FOLLOW_USER_SUCCESS,
  };
};

const FollowFailure = (error) => {
  return {
    type: FOLLOW_USER_FAILURE,
    error,
  };
};

const requestunFollow = () => {
  return {
    type: UN_FOLLOW_USER_REQUEST,
  };
};

const unFollowSuccess = () => {
  return {
    type: UN_FOLLOW_USER_SUCCESS,
  };
};

const unFollowFailure = (error) => {
  return {
    type: UN_FOLLOW_USER_FAILURE,
    error,
  };
};

const requestLikeTweet = () => {
  return {
    type: LIKE_TWEET_REQUEST,
  };
};

const LikeTweetSuccess = () => {
  return {
    type: LIKE_TWEET_SUCCESS,
  };
};

const LikeTweetFailure = (error) => {
  return {
    type: LIKE_TWEET_FAILURE,
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
      dispatch(
        fetchAllTweets({
          page: 1,
          email: payload.email,
        })
      );
      const { data } = res;
      data.isTweetAdded
        ? dispatch(addNewTweetSuccess(data))
        : dispatch(addNewTweetFailure(res.errormsg));
    })
    .catch((err) => dispatch(addNewTweetFailure(err)));
};

export const FollowUser = (payload) => (dispatch) => {
  dispatch(requestFollow());
  axios({
    method: "POST",
    url: "http://localhost:5000/profile/follow",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      const { data } = res;
      dispatch(getAllProfiles());
      data.isProfileFollowed
        ? dispatch(FollowSuccess())
        : dispatch(FollowFailure(res.errormsg));
    })
    .catch((err) => dispatch(FollowFailure(err)));
};

export const unFollowUser = (payload) => (dispatch) => {
  dispatch(requestunFollow());
  axios({
    method: "POST",
    url: "http://localhost:5000/profile/unfollow",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      dispatch(getAllProfiles());
      const { data } = res;
      data.isProfileUnfollowed
        ? dispatch(unFollowSuccess())
        : dispatch(unFollowFailure(res.errormsg));
    })
    .catch((err) => dispatch(unFollowFailure(err)));
};

export const likeTweet = (payload) => (dispatch) => {
  dispatch(requestLikeTweet());
  axios({
    method: "POST",
    url: "http://localhost:5000/tweet/like",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      dispatch(
        fetchAllTweets({
          page: 1,
          email: payload.likedUserMail,
        })
      );
      const { data } = res;
      data.isTweetLiked
        ? dispatch(LikeTweetSuccess())
        : dispatch(LikeTweetFailure(res.errormsg));
    })
    .catch((err) => dispatch(LikeTweetFailure(err)));
};
