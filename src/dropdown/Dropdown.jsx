import React from "react";
import "./Dropdown.css";

const Dropdown = ({ data, setDifficultyChange }) => {
  return (
    <div className="dropdown">
      <select name="" id="">
        {data.map((dt, i) => (
          <option value=""></option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
