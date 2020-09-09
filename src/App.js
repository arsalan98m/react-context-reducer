import React, { useState } from "react";
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  let state = useState(1);
  return (
    <CounterContext.Provider value={state}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
