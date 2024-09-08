import React, { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";

function BlacklistUser({username, email, complaint}) {
  const [showComplaint, setShowComplaint] = useState(false)
  const handleShowComplaint = ()=>{
    setShowComplaint(!showComplaint)
  }
  return (
    <div className={`${showComplaint ? 'overflow-visible bg-orange-200 border-none' : 'overflow-hidden border-2 border-slate-400'} p-2 transition-all relative my-4 rounded-md w-full`}>
      <div onClick={handleShowComplaint} className="text-md font-semibold cursor-pointer hover:text-gray-900">
        <span>Name:</span>
        <span>{username}</span>
      </div>
      <div className="text-md font-semibold">
        <span>Email:</span>
        <span>{email}</span>
      </div>
      <aside className={`bg-white absolute -bottom-20 right-5 z-30 shadow-lg p-4 transition-all mt-2 rounded-lg text-gray-600 ${showComplaint ? 'block' : 'hidden' }`}>
        <li className="list-none">{complaint[0]}</li>
        <li className="list-none my-2">{complaint[1]}</li>
        <li className="list-none">{complaint[2]}</li>
      </aside>
    </div>
  );
}

export default BlacklistUser;
