// ---------version 2-------------
import React from 'react';
import { MdCancel } from 'react-icons/md';

function ForgetPassword({ toggle, click, change }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-50">
      <form className="relative p-8 sm:w-1/3 w-full max-w-md bg-white rounded-lg shadow-2xl">
        <MdCancel
          onClick={toggle}
          className="absolute top-4 right-4 text-gray-400 w-6 h-6 cursor-pointer hover:text-red-500"
        />
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Forgot Password</h2>
        <div className="flex flex-col mb-6">
          <label htmlFor="email" className="text-gray-600 mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={change}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
        onClick={click}
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
