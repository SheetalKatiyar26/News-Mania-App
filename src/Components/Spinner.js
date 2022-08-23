import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img style={{ height: "50px" }} src={loading} alt="" />
    </div>
  );
};

export default Spinner;
