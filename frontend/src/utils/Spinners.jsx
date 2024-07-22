import React from "react";
import { ScaleLoader } from "react-spinners";
const Spinners = () => {
  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <div style={spinnerStyle}>
      <ScaleLoader color={"#123abc"} loading={true} />
    </div>
  );
};

export default Spinners;
