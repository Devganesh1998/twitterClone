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
  SELF_LIKE_TWEET_REQUEST,
  SELF_LIKE_TWEET_SUCCESS,
  SELF_LIKE_TWEET_FAILURE,
} from "./actionType";

const initialState = {
  userProfile: {},
  userTweets: [],
  userTweetsLoading: [],
  allProfiles: [],

  isGetProfSending: false,
  isGetProfSent: false,
  isGetProfError: false,
  ProfileErrorMessage: "",

  isallProfSending: false,
  isallProfSent: false,
  isallProfError: false,
  allProfileErrorMessage: "",

  likeTweetSending: false,
  likeTweetSent: false,
  likeTweetError: false,
  likeTweetErrorMessage: "",

  isUserTweetSending: false,
  isUserTweetSent: false,
  isUserTweetError: false,
  UserTweetErrorMessage: "",

  followUserLoading: [],
  followUserSending: false,
  followUserSent: false,
  followUserError: false,
  followErrorMessage: "",

  unfollowUserLoading: [],
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
        userTweetsLoading: [],
        isUserTweetSending: true,
        isUserTweetSent: false,
        isUserTweetError: false,
        UserTweetErrorMessage: "",
      };
    case GET_USER_TWEETS_SUCCESS:
      action.payload.forEach((ele) => state.userTweetsLoading.push(false));
      return {
        ...state,
        userTweets: action.payload,
        userTweetsLoading: [...state.userTweetsLoading],
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
        followUserLoading: [],
        unfollowUserLoading: [],
        isallProfSending: true,
        isallProfSent: false,
        isallProfError: false,
        allProfileErrorMessage: "",
      };
    case GET_ALL_PROFILES_SUCCESS:
      action.users.forEach((ele) => {
        state.followUserLoading.push(false);
        state.unfollowUserLoading.push(false);
      });
      return {
        ...state,
        allProfiles: action.users,
        followUserLoading: [...state.followUserLoading],
        unfollowUserLoading: [...state.unfollowUserLoading],
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
      const followIndex = state.allProfiles.findIndex(
        (ele) => ele.id === action.payload
      );
      state.followUserLoading[followIndex] = true;
      return {
        ...state,
        followUserLoading: [...state.followUserLoading],
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
      state.followUserLoading[profileIndex] = false;
      return {
        ...state,
        allProfiles: [...state.allProfiles],
        followUserLoading: [...state.followUserLoading],
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
      const unfollowIndex = state.allProfiles.findIndex(
        (ele) => ele.id === action.payload
      );
      state.unfollowUserLoading[unfollowIndex] = true;
      return {
        ...state,
        unfollowUserLoading: [...state.unfollowUserLoading],
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
      state.unfollowUserLoading[profileIndex2] = false;
      return {
        ...state,
        unfollowUserLoading: [...state.unfollowUserLoading],
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
    case SELF_LIKE_TWEET_REQUEST:
      const likeTweetIndex = state.userTweets.findIndex(
        (ele) => ele.id === action.payload
      );
      state.userTweetsLoading[likeTweetIndex] = true;
      return {
        ...state,
        userTweetsLoading: [...state.userTweetsLoading],
        likeTweetSending: true,
        likeTweetSent: false,
        likeTweetError: false,
        likeTweetErrorMessage: "",
      };
    case SELF_LIKE_TWEET_SUCCESS:
      const { id, likes } = action.payload;
      const tweetIndex = state.userTweets.findIndex(
        (element) => element.id === id
      );
      state.userTweets[tweetIndex].likes = likes;
      state.userTweetsLoading[tweetIndex] = false;
      return {
        ...state,
        userTweetsLoading: [...state.userTweetsLoading],
        userTweets: [...state.userTweets],
        likeTweetSending: false,
        likeTweetSent: true,
      };
    case SELF_LIKE_TWEET_FAILURE:
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
