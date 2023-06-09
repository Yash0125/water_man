import React from "react";
import { useDispatch } from "react-redux";
import { updateValue } from "../redux/actions"; 
const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(updateValue(value));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
