import React, { useState } from "react";
import { GrLocationPin } from "react-icons/gr";

function BlacklistComponent({companyName, companyAddress, complaint}) {
  const [showComplaint, setShowComplaint] = useState(false)
  const handleShowComplaint = ()=>{
    setShowComplaint(!showComplaint)
  }
  return (
    <div className="p-2 mb-4 transition-all border-none rounded-md w-full bg-orange-200">
      <h3 className="mb-3 text-lg font-medium capitalize text-gray-800 cursor-pointer" onClick={handleShowComplaint}>{companyName}</h3>
      <div className="flex items-center justify-start gap-5 ">
        <GrLocationPin className="text-orange-500" />
        <p>{companyAddress}</p>
      </div>
      <aside className={`bg-white shadow-lg transition-all mt-2 rounded-lg p-2 text-gray-500 ${showComplaint ? 'block' : 'hidden' }`}>
        <li className="list-none">{complaint[0]}</li>
        <li className="list-none my-2">{complaint[1]}</li>
        <li className="list-none">{complaint[2]}</li>
      </aside>
    </div>
  );
}

export default BlacklistComponent;
