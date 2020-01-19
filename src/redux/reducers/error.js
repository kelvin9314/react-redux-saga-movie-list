import { MOVIES } from "../constants";

const error = (state = null, action) => {
  switch (action.type) {
    case MOVIES.LOAD_FAIL:
      return action.err;
    case MOVIES.LOAD:
    case MOVIES.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default error;
