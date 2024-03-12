import React, { useState } from "react";

const Cell = ({ updateOnCount }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    updateOnCount(!isOn);
    setIsOn((prevState) => !prevState);
  };

  return (
    <div
      className="cell"
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid grey",
        backgroundColor: isOn ? "black" : "white",
      }}
      onClick={handleClick}
    ></div>
  );
};

export default Cell;
