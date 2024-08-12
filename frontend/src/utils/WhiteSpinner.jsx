import React from "react";
import { ClipLoader } from "react-spinners";
const WhiteSpinner = () => {
  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <div style={spinnerStyle}>
      <ClipLoader color="#ffffff" size={25} />
    </div>
  );
};

export default WhiteSpinner;
