import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_USER_TWEETS_REQUEST,
  GET_USER_TWEETS_SUCCESS,
  GET_USER_TWEETS_FAILURE,
  GET_ALL_PROFILES_REQUEST,
  GET_ALL_PROFILES_SUCCESS,
  GET_ALL_PROFILES_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UN_FOLLOW_USER_REQUEST,
  UN_FOLLOW_USER_SUCCESS,
  UN_FOLLOW_USER_FAILURE,
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

  followUserSending: false,
  followUserSent: false,
  followUserError: false,
  followErrorMessage: "",

  unfollowUserSending: false,
  unfollowUserSent: false,
  unfollowUserError: false,
  unfollowErrorMessage: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        userProfile: {},
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
      const profileIndex = state.allProfiles.findIndex(
        (element) => element.id === action.payload.id
      );
      state.allProfiles[profileIndex] = action.payload;
      return {
        ...state,
        allProfiles: [...state.allProfiles],
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
      const profileIndex2 = state.allProfiles.findIndex(
        (element) => element.id === action.payload.id
      );
      state.allProfiles[profileIndex2] = action.payload;
      return {
        ...state,
        allProfiles: [...state.allProfiles],
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
    default:
      return state;
  }
};

export default Reducer;
