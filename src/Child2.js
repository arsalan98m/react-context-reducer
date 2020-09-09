import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

function Child2() {
  let [state, dispatch] = useReducer(CounterReducer, 1);
  return (
    <div>
      <h1>This is second child using useReducer </h1>

      <h1>Counter value of useReducer is : {state}</h1>

      <button onClick={() => dispatch("INCREMENT")}>Increment Reducer</button>
    </div>
  );
}

export default Child2;
