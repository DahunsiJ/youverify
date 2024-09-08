import React from "react";

function GuarantorComponent({title}) {
  return (
    <div className="flex flex-col items-start justify-start">
      <label className="" htmlFor="">
        {title}
      </label>
      <input className="border-2 border-slate-400 p-1 rounded-sm outline-none" type="text" />
    </div>
  );
}

export default GuarantorComponent;
