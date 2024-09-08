import React from "react";
import Logo from "../../assets/Images/ejobs-logo.svg";

function AddNote() {
  return (
    <div>
      <div className="py-6 px-10">
        <img className="w-32" src={Logo} alt="" />
        <div className="w-full flex flex-col mt-20 items-center justify-center">
          <textarea
            placeholder="write a note about James Johnaon that you noticed this month that you want us to know about and we would call him to order if need be"
            className="w-2/3 h-60 p-2 outline-none border-gray-300 border-2"
            name=""
            id=""
          ></textarea>
          <div className="mt-4 flex items-center gap-8">
            <button className="px-4 py-1 border-2 border-gray-400">Back</button>
            <button className="px-4 py-1 bg-orange-500 text-white">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
