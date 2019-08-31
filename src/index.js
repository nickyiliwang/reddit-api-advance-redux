import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunkMiddleWare from "redux-thunk";
import { createLogger } from "redux-logger";
import { selectSubreddit, fetchPosts } from "./actions";
import rootReducer from "./reducers";
import { applyMiddleware } from "redux";

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleWare, loggerMiddleware)
);

store.dispatch(selectSubreddit("reactjs"));
store.dispatch(fetchPosts("reactjs")).then(() => console.log(store.getState()));

ReactDOM.render(<App />, document.getElementById("root"));
