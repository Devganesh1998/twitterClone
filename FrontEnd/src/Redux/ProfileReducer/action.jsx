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

const requestAllProfile = () => {
  return {
    type: GET_ALL_PROFILES_REQUEST,
  };
};

const AllProfileSuccess = (users) => {
  return {
    type: GET_ALL_PROFILES_SUCCESS,
    users,
  };
};

const AllProfileFailure = (error) => {
  return {
    type: GET_ALL_PROFILES_FAILURE,
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

export const getAllProfiles = () => (dispatch) => {
  dispatch(requestAllProfile());
  axios({
    method: "GET",
    url: `http://localhost:5000/user/getAllUsers`,
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => {
      const { data } = res;
      data.isUsersFetched
        ? dispatch(AllProfileSuccess(data.users))
        : dispatch(AllProfileFailure(res.errormsg));
    })
    .catch((err) => dispatch(AllProfileFailure(err)));
};
