import React, { useState } from "react";
import { MdAdd, MdCheckBox } from "react-icons/md";
import ProfileData from "./ProfileData";

function EducationCard({data, handleChange, update, deleteEducation}) {
  const [stillSchooling, setStillSchooling] = useState(false);
  const [schoolData, setSchoolData] = useState({});

  const toggleSchoolStatus = () => {

    setStillSchooling(!stillSchooling);
    if(stillSchooling) setSchoolData({...schoolData, stillSchooling: true})
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
                <ProfileData
                  data="school"
                  placeholder={data.school}
                  tagName="Institution"
                  formData={schoolData}
                  setFormData={setSchoolData}
                  handleChange={handleChange}
                  />
                <ProfileData
                  data="certificate"
                  placeholder={data.certificate}
                  tagName="Certificate"
                  formData={schoolData}
                  setFormData={setSchoolData}
                  handleChange={handleChange}
                  />
                <ProfileData
                  data="course"
                  placeholder={data.course}
                  tagName="Course"
                  formData={schoolData}
                  setFormData={setSchoolData}
                  handleChange={handleChange}
                  />
              </div>
              <div className="sm:w-1/2 w-full">
                <ProfileData
                  data="state"
                  placeholder={data.state}
                  tagName="State"
                  formData={schoolData}
                  setFormData={setSchoolData}
                  handleChange={handleChange}
                  />
                <ProfileData
                  data="country"
                  placeholder={data.country}
                  tagName="Country"
                  formData={schoolData}
                  setFormData={setSchoolData}
                  handleChange={handleChange}
                  />
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
              <div className="border-2 border-gray-300 px-1.5 py-1">
                <label htmlFor="startYear" className="">
                  Start year
                </label>
                <input type="date" name="startYear" placeholder={data.startYear} onChange={handleChange}/>
              </div>
              <div
                className={`${
                  stillSchooling ? "hidden" : "inline"
                } border-2 border-gray-300 px-1.5 py-1`}
              >
                <label htmlFor="finishYear" className="" placeholder={data.finishYear}>
                  Finish year
                </label>
                <input type="date" name="finishYear" onChange={handleChange}/>
              </div>
              <div>
              <button className="bg-green-500 cursor-pointer text-white px-4 py-1 rounded-sm font-semibold" onClick={(e)=>{update(e, data._id)}}>Update</button>
              <button className="bg-red-500 text-white cursor-pointer px-4 py-1 rounded-sm font-semibold ml-4" onClick={(e)=>{deleteEducation(e, data._id)}}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EducationCard;
