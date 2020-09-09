import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function Child() {
  let counterValue = useContext(CounterContext);
  return (
    <div>
      <h1>This is first child Using Counter Context</h1>

      <h1>Counter value of contextApi is : {counterValue[0]}</h1>

      <button onClick={() => counterValue[1](++counterValue[0])}>
        Increment Context
      </button>
    </div>
  );
}

export default Child;
