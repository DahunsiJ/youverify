import React from "react";

function CvInfo({title, data, third}) {
  return (
    <div className={`flex ${third ? "flex-col items-start" : "items-center"} justify-start `}>
      <h3 className="font-semibold inline w-1/3 mr-5">{title}:</h3>
      <span>{data}</span>
    </div>
  );
}

export default CvInfo;
