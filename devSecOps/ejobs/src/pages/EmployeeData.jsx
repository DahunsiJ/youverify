import { MdArrowDropDown, MdCheckBox } from "react-icons/md";
import Header from "../component/Header";
import ProfileData from "../component/ProfileData";
import FooterComponent from "../component/Footer";
import TableComponent from "../component/TableComponent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function EmployeeData() {
  const jobId= useParams().jobId
  const employeeId= useParams().employeeId

  useEffect(()=>{
    
  }, [])

  return (
    <div className="w-full">
      <div className="px-24">
        <Header darkMode={true} />
        <div className="mt-4 w-3/4 mx-auto text-sm">
          <p className="mb-4">Worker review &gt; Company Name</p>
          <div className="flex items-start justify-between gap-10 border-2 border-slate-400 rounded-lg p-4">
            <div className="w-full">
              <ProfileData data="Company" tagName='Start Date'/>
              <div className="flex items-center justify-start gap-20">
                <div className="flex items-center gap-4">
                <span>Start year</span>
                <button className="flex items-center gap-2 px-2 py-1 border-2 border-slate-300 rounded-sm">
                  <span>yyyy</span> <MdArrowDropDown />
                </button>
                </div>
                <div className="flex items-center gap-4">
                <span>End year</span>
                <button className="flex items-center gap-2 px-2 py-1 border-2 border-slate-300 rounded-sm">
                  <span>yyyy</span> <MdArrowDropDown />
                </button>
                </div>
              </div>
              <div className="my-5 flex items-center gap-4">
                <MdCheckBox />
                <span>worker is still working here</span>
              </div>
            </div>
            <div className="w-full">
              <ProfileData data="position" tagName="position"/>
              <ProfileData data="country" tagName="country"/>
              <ProfileData data="Salary" tagName="Salary" placeholder="1,200,000 NGN" />
            </div>
          </div>
          <div className="">
            <div className="w-full my-8">
              <textarea className="w-full border-2 border-slate-300 p-2 rounded-lg h-40 outline-none bg-orange-100" placeholder="job description"></textarea>
            </div>
            <div className="w-full my-8">
              <textarea className="w-full border-2 border-slate-300 p-2 rounded-lg h-40 outline-none bg-orange-100" placeholder="Reason for leaving"></textarea>
            </div>
            <div className="">
              <h3 className="text-lg text-slate-700 mb-4">Rate worker</h3>
              {/* -------------------Beginning to table element------------------- */}
              <table className="my-8">
            <thead>
              <tr>
                <th colSpan="2"></th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Poor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fair
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Good
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Very Good
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Excellent
                </th>
              </tr>
            </thead>
            <tbody>
              <TableComponent title="Punctuality" />
              <TableComponent title="Time Managment" />
              <TableComponent title="Communication" />
              <TableComponent title="Customer service" />
              <TableComponent title="Commited" />
              <TableComponent title="Attendance" />
              <TableComponent title="Dres code/Appearance" />
            </tbody>
          </table>
              {/* ----------------End of table element---------------- */}
              <div className="my-8">
                <div className="flex items-center justify-between">
                  <span>Can you re-employ?</span>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <span>Yes</span>
                      <div className="cursor-pointer w-4 h-4 rounded-full border-2 border-slate-400"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>No</span>
                      <div className="cursor-pointer w-4 h-4 rounded-full border-2 border-slate-400"></div>
                    </div>
                  </div>
                </div>
              </div>
              <textarea
              className="w-full p-4 border-2 border-slate-300 rounded-md h-40 outline-none"
                name="reason"
                placeholder="if no, why?"
                id=""
              ></textarea>
            </div>
          </div>
          <div className="my-4">
            <h3>Employer&apos;s Feedback</h3>
            <textarea className="w-full p-4 border-2 border-slate-300 rounded-md h-40 outline-none" name="" placeholder="company reference" id=""></textarea>
          </div>
          <div className="">
            <div className="flex items-center justify-center gap-10">
              <button className="px-4 py-1 bg-orange-500 text-slate-50">Request for Resignation</button>
              <button className="px-4 py-1 bg-orange-500 text-slate-50">Report</button>
            </div>
            <div className="my-10">
              <button className="px-4 py-1 bg-red-500 text-slate-50">Back</button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default EmployeeData;
