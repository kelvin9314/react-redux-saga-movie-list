import { COUNTER } from "../constants";

const initalState = {
  amount: 0,
  name: "kelvin"
};

const counter = (state = initalState, action) => {
  switch (action.type) {
    case COUNTER.ADD:
      return {
        amount: action.count
      };
    case COUNTER.RESET:
      return {
        amount: action.count
      };
    default:
      return state;
  }
};

export default counter;
