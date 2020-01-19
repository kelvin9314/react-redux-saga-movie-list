import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, resetCounter } from "./redux/actions/index";

const Counter = () => {
  const { amount } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h4>{amount}</h4>
      <button onClick={handleAdd}> ADD </button>
      <button onClick={handleReset}> RESET </button>
    </div>
  );
};

export default Counter;
