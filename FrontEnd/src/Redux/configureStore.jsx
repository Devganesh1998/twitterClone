import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./AuthReducer/reducer";
import tweetReducer from "./TweetReducer/reducer";
import profileReducer from "./ProfileReducer/reducer";
import { verifyAuth } from "./AuthReducer/action";

const thunk = (store) => (next) => (action) => {
  typeof action === "function" ? action(store.dispatch) : next(action);
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("twitterCloneState", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("twitterCloneState");
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const rootreducer = combineReducers({
  auth: authReducer,
  tweet: tweetReducer,
  profile: profileReducer,
});


let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore() {
  const store = createStore(
    rootreducer,
    loadFromLocalStorage(),
    composeEnhancers(applyMiddleware(thunk))
  );
  store.dispatch(verifyAuth());
  store.subscribe(() => saveToLocalStorage(store.getState()));

  return store;
}
