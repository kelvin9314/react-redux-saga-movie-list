import { takeEvery, take, put, call, select } from "redux-saga/effects";
import { MOVIES } from "../constants";
import { fetchMovies } from "../../lib/api";
import { setError, setMovies } from "../actions";

const getPage = state => state.nextPage;

// worker saga
function* handleMoviesLoad() {
  try {
    const page = yield select(getPage);
    console.log(`page : ${page}`);
    const { data } = yield call(fetchMovies, page);
    // console.log(data.results);
    yield put(setMovies(data.results));
  } catch (err) {
    // dispatch error
    console.log(err.toString());
    yield put(setError(err.toString()));
  }
}

// watcher saga
function* watchMoviesLoad() {
  yield takeEvery(MOVIES.LOAD, handleMoviesLoad);
}

// watcher saga -> actions -> worker saga

export default watchMoviesLoad;
