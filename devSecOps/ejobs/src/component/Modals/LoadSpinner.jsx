import React from "react";
import {TailSpin} from 'react-loader-spinner'

function LoadSpinner() {
  return (
    <div className="mx-auto w-full flex items-center justify-center">
      <TailSpin
        visible={true}
        height="25"
        width="25"
        color="#fff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default LoadSpinner;
