import React, { useState } from "react";
import { MdAdd, MdCheckBox } from "react-icons/md";

function EducationTemplate({form, setForm, handleChange, submit}) {
  const [stillSchooling, setStillSchooling] = useState(false);

  const toggleSchoolStatus = () => {
    setStillSchooling(!stillSchooling);
    setForm({...form, finishYear: "still schooling"})
  };


  return (
    <div>
      <form className="mb-10 w-full">
        {/* -----------form data------------- */}
        <div>
          {/* top education section */}
          <div className="border-2 border-gray-300 py-6 px-4 rounded-sm">
            <div className="flex sm:flex-row flex-col items-start justify-center gap-2 sm:gap-10">
              <div className="sm:w-1/2 w-full">
                <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                  <label htmlFor="school" className="absolute -top-4 bg-white">
                    School
                  </label>
                  <input
                    onChange={handleChange}
                    name="school"
                    className="w-full border-none outline-none"
                    type="text"
                    placeholder=""
                  />
                  <span className={`${form.school ? "hidden" : "block"} text-red-500 absolute top-0 right-0 text-xl`}>*</span>
                </div>
                <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                  <label htmlFor="certificate" className="absolute -top-4 bg-white">
                    Certificate
                  </label>
                  <input
                    onChange={handleChange}
                    name="certificate"
                    className="w-full border-none outline-none"
                    type="text"
                    placeholder=""
                  />
                  <span className={`${form.certificate ? "hidden" : "block"} text-red-500 absolute top-0 right-0 text-xl`}>*</span>
                </div>

                <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                  <label htmlFor="course" className="absolute -top-4 bg-white">
                    Course
                  </label>
                  <input
                    onChange={handleChange}
                    name="course"
                    className="w-full border-none outline-none"
                    type="text"
                    placeholder=""
                  />
                  <span className={`${form.course ? "hidden" : "block"} text-red-500 absolute top-0 right-0 text-xl`}>*</span>
                </div>
                
              </div>
              <div className="sm:w-1/2 w-full">
                <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                  <label htmlFor="state" className="absolute -top-4 bg-white">
                    State
                  </label>
                  <input
                    onChange={handleChange}
                    name="state"
                    className="w-full border-none outline-none"
                    type="text"
                    placeholder=""
                  />
                  <span className={`${form.state ? "hidden" : "block"} text-red-500 absolute top-0 right-0 text-xl`}>*</span>
                </div>
                <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                  <label htmlFor="country" className="absolute -top-4 bg-white">
                    Country
                  </label>
                  <input
                    onChange={handleChange}
                    name="country"
                    className="w-full border-none outline-none"
                    type="text"
                    placeholder=""
                  />
                  <span className={`${form.country ? "hidden" : "block"} text-red-500 absolute top-0 right-0 text-xl`}>*</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MdCheckBox
                    className={`${
                      stillSchooling ? "text-red-500" : "text-gray-600"
                    } cursor-pointer transition-all`}
                    onClick={toggleSchoolStatus}
                  />
                  <span className="">Still schooling here</span>
                </div>
              </div>
            </div>
            {/* bottom education section */}
            <div className="flex items-center justify-between sm:justify-start sm:gap-10 gap-2 mt-1 flex-wrap">
              <div className="border-2 border-gray-300 px-1.5 py-1 relative">
                <label htmlFor="startYear" className="">
                  Start year
                </label>
                <input type="date" name="startYear" onChange={handleChange} />
                <span className={`${form.startYear ? "hidden" : "block"} text-red-500 absolute top-0 right-0 text-xl`}>*</span>
              </div>
              <div
                className={`${
                  stillSchooling ? "hidden" : "inline"
                } border-2 border-gray-300 px-1.5 py-1 relative`}
              >
                <label htmlFor="finishYear" className="">
                  Finish year
                </label>
                <input type="date" name="finishYear" onChange={handleChange} />
                <span className={`${form.finishYear ? "hidden" : "block"} text-red-500 absolute top-0 right-0 text-xl`}>*</span>
              </div>
              <button
                className="bg-orange-500 text-white px-4 py-1 rounded-sm font-semibold"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EducationTemplate;
