
// --------version2 ---------
import React, { useState } from 'react';
import { MdCancel, MdMessage } from 'react-icons/md';

function VerifyEmail({toggle}) {
  

  return (
    <div className="w-full text-gray-600 h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-50">
      <div className="relative p-6 sm:w-1/3 w-full max-w-md h-auto flex flex-col items-center justify-center bg-white rounded-lg shadow-xl">
        <MdCancel
          onClick={toggle}
          className="absolute top-4 right-4 text-gray-400 w-6 h-6 cursor-pointer hover:text-red-500"
        />
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="p-3 rounded-full bg-blue-100">
            <MdMessage className="text-blue-600" />
          </div>
          <h2 className="text-gray-800 text-lg font-semibold capitalize">Verify Email system</h2>
        </div>
        <div
          className="relative flex items-center justify-between gap-5 px-4 py-2 border-2 border-blue-300 rounded-full cursor-pointer"
        >
          <p>Dontknow</p>
        </div>
        <div className="w-full mt-4">
          
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
