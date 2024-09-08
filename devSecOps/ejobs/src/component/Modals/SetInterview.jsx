import React from "react";

function SetInterview() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="px-10 py-8 shadow-lg ">
        <h3 className="text-center font-semibold mb-4 text-2xl">Set interview</h3>
        <p className="py-2">
          This Our deliverable system helps you set the right interview at the
          best time and date
        </p>
        <div className="py-2 flex items-center justify-start">
          <h4 className="mr-40">Type of interview</h4>
          <button className="mr-10 border-2 border-gray-300 px-4 py-1">virtual</button>
          <button className=" border-2 border-gray-300 px-4 py-1">On site</button>
        </div>
        <div className="py-2 flex items-center justify-start">
          <h4 className="mr-40">Date</h4>
          <input className="border-2 border-gray-200 px-2" type="date" name="interviewDate" id="interviewDate" />
        </div>
        <div className="py-2 flex items-center justify-start">
          <h4 className="mr-40">Time</h4>
          <input className="border-2 border-gray-200 px-2" type="time" name="interviewTime" id="interviewTime" />
        </div>
        <p className="py-2">
          Any information you want to pass accross to the applicant concerning
          the interview (optional)
        </p>
        <textarea
        className="w-full h-60 p-2 outline-none border-2 border-gray-300"
          name="interviewRemark"
          id="interviewRemark"
          placeholder="Any information you want to pass accross to the applicant concerning the interview (optional)
"
        ></textarea>
        <div className='py-2 flex items-center justify-center gap-10'>
            <button className="px-6 py-2 font-semibold bg-gray-300 text-gray-400">Back</button>
            <button className="px-6 py-2 font-semibold bg-orange-500 text-white">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default SetInterview;
