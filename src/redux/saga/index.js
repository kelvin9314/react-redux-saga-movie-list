import { takeEvery, take, put, call } from "redux-saga/effects";
import { MOVIES } from "../constants";

// console.log(process.env.REACT_APP_API_TOEKN);

// worker saga
function* handleMoviesLoad() {
  console.log("fetching movies from api");
}

// watcher saga
function* rootSaga() {
  yield takeEvery(MOVIES.LOAD, handleMoviesLoad);
}

// watcher saga -> actions -> worker saga

export default rootSaga;
