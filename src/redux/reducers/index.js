import { combineReducers } from "redux";

import counter from "./counter";
import movies from "./movies";
import loading from "./loading";
import error from "./error";
import page from "./page";

const rootReducer = combineReducers({
  counter,
  movies,
  isLoading: loading,
  error,
  nextPage: page
});

export default rootReducer;
