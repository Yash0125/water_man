import React from "react";
import { useSelector } from "react-redux";

const ComponentC = () => {
  const value = useSelector((state) => state.value); // Assuming 'value' is the key used in the Redux store

  return (
    <div>
      <h2>Component C</h2>
      <p>Value from Redux store: {value}</p>
    </div>
  );
};

export default ComponentC;
