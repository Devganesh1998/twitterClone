import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_USER_TWEETS_REQUEST,
  GET_USER_TWEETS_SUCCESS,
  GET_USER_TWEETS_FAILURE,
} from "./actionType";

import axios from "../axoisInstance";

const requestUserTweets = () => {
  return {
    type: GET_USER_TWEETS_REQUEST,
  };
};

const getUserTweetsSuccess = (payload) => {
  return {
    type: GET_USER_TWEETS_SUCCESS,
    payload,
  };
};

const getUserTweetsFailure = (error) => {
  return {
    type: GET_USER_TWEETS_FAILURE,
    error,
  };
};

const requestGetProfile = () => {
  return {
    type: GET_PROFILE_REQUEST,
  };
};

const GetProfileSuccess = (user) => {
  return {
    type: GET_PROFILE_SUCCESS,
    user,
  };
};

const GetProfileFailure = (error) => {
  return {
    type: GET_PROFILE_FAILURE,
    error,
  };
};

export const fetchUserTweets = (payload) => (dispatch) => {
  dispatch(requestUserTweets());
  axios({
    method: "GET",
    url: `http://localhost:5000/profile/getTweets?userEmail=${payload.email}`,
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => {
      const { data } = res;
      if (data.isTweetFetched) {
        dispatch(getUserTweetsSuccess(data.tweets));
      } else {
        dispatch(getUserTweetsFailure(res.errormsg));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(getUserTweetsFailure(err));
    });
};

export const getProfile = (payload) => (dispatch) => {
  dispatch(requestGetProfile());
  axios({
    method: "GET",
    url: `http://localhost:5000/profile?userEmail=${payload.email}`,
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => {
      const { data } = res;
      data.isProfileFetched
        ? dispatch(GetProfileSuccess(data.profile[0]))
        : dispatch(GetProfileFailure(res.errormsg));
    })
    .catch((err) => dispatch(GetProfileFailure(err)));
};
