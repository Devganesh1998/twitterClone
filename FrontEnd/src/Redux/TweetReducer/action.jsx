import {
  GET_ALL_TWEETS_REQUEST,
  GET_ALL_TWEETS_SUCCESS,
  GET_ALL_TWEETS_FAILURE,
  ADD_NEW_TWEET_REQUEST,
  ADD_NEW_TWEET_SUCCESS,
  ADD_NEW_TWEET_FAILURE,
  LIKE_TWEET_REQUEST,
  LIKE_TWEET_SUCCESS,
  LIKE_TWEET_FAILURE,
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

const requestLikeTweet = (payload) => {
  return {
    type: LIKE_TWEET_REQUEST,
    payload,
  };
};

const LikeTweetSuccess = (payload) => {
  return {
    type: LIKE_TWEET_SUCCESS,
    payload,
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
    url: "https://twittercloneserver.herokuapp.com/tweet/getall",
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
    url: "https://twittercloneserver.herokuapp.com/tweet/add",
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

export const likeTweet = (payload) => (dispatch) => {
  dispatch(requestLikeTweet(payload.tweetId));
  axios({
    method: "POST",
    url: "https://twittercloneserver.herokuapp.com/tweet/like",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    data: payload,
  })
    .then((res) => {
      console.log(res);
      const { data } = res;
      data.isTweetLiked
        ? dispatch(LikeTweetSuccess({ likes: data.likes, id: data.id }))
        : dispatch(LikeTweetFailure(res.errormsg));
    })
    .catch((err) => {
      console.log(err);
      dispatch(LikeTweetFailure(err));
    });
};
