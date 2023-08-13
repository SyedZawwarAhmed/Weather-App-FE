import React from "react";
import { Puff } from "react-loader-spinner";

function Loader({height, width, radius}) {
  return (
    <Puff
      height={height}
      width={width}
      radius={radius}
      color="#f1f1f1"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
