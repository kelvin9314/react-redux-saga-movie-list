import { MOVIES } from "../constants";

const loading = (state = false, action) => {
  switch (action.type) {
    case MOVIES.LOAD:
      return true;
    case MOVIES.LOAD_SUCCESS:
      return false;
    case MOVIES.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

export default loading;
