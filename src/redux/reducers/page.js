import { MOVIES } from "../constants";

const page = (state = 1, action) => {
  switch (action.type) {
    case MOVIES.LOAD_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};

export default page;
