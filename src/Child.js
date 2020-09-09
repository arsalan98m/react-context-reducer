import React from "react";

function Child(props) {
  return (
    <div>
      <h1>This is first child component</h1>
      <h2>This is {props.name}</h2>
    </div>
  );
}

export default Child;
