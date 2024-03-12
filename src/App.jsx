import { useState } from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  const [onCount, setOnCount] = useState(0);

  const updateOnCount = (isOn) => {
    setOnCount((prevCount) => (isOn ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div>
      <h1>Cells Count: {onCount}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 100px)",
          gridGap: "5px",
        }}
      >
        <Cell updateOnCount={updateOnCount} />
        <Cell updateOnCount={updateOnCount} />
        <Cell updateOnCount={updateOnCount} />
        <Cell updateOnCount={updateOnCount} />
      </div>
    </div>
  );
}

export default App;
