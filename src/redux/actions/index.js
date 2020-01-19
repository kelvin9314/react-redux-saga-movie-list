import { COUNTER, MOVIES, STATS } from "../constants";

let count = 0;

export const addCounter = () => {
  return {
    type: COUNTER.ADD,
    count: ++count
  };
};

export const resetCounter = () => {
  count = 0;
  return {
    type: COUNTER.RESET,
    count: 0
  };
};

export const loadMovies = () => ({
  type: MOVIES.LOAD
});

export const setMovies = movies => ({
  type: MOVIES.LOAD_SUCCESS,
  movies
});
export const setError = err => ({
  type: MOVIES.LOAD_FAIL,
  err
});
