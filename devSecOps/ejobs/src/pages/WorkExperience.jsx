import Header from "../component/Header";
import ProfileData from "../component/ProfileData";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiCheckbox } from "react-icons/bi";
import TableComponent from "../component/TableComponent";
import FooterComponent from "../component/Footer";

function WorkExperience() {
  return (
    <div>
      <div className="mx-24 mb-10">
        <Header />
        <h3 className="font-semibold my-8">Work Experience &gt; Essential</h3>
        <div className="border-2 boder-slate-300 w-3/4 rounded-lg p-6">
          <div className="flex items-start gap-8">
            <div className="w-1/2 h-48 flex flex-col items-start justify-between">
              <ProfileData data="Country" placeholder="James" />
              <div className="flex items-center justify-start gap-8">
                <div className="flex items-center gap-4">
                  <span>Start Year</span>
                  <button className="flex items-center gap-2 border-2 border-slate-300 px-2 py-1 rounded-md">
                    yyyy <IoMdArrowDropdown />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <span>End Year</span>
                  <button className="flex items-center gap-2 border-2 border-slate-300 px-2 py-1 rounded-md">
                    yyyy <IoMdArrowDropdown />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BiCheckbox className="bg-gray-600" />
                <h3>He still work here</h3>
              </div>
            </div>
            <div className="w-1/2 h-48 flex flex-col items-start justify-between">
              <ProfileData data="Web developer" placeholder="position" />
              <ProfileData data="Nigeria" placeholder="Country" />
              <ProfileData data="#360,000" placeholder="Salary" />
            </div>
          </div>
          <div className="border-2 border-slate-200 bg-gray-100 rounded-lg p-4 mt-8">
            <span>job description and salary</span>
            <h3>
              15, Iyala street Akindedun, off Shoprite, Alausa, Ikeja Lagos
              state Nigeria off Shoprite, Alausa, Ikeja Lagos state Nigeria
            </h3>
          </div>
          <div className="border-2 border-slate-200 bg-gray-100 rounded-lg p-4 mt-8">
            <span>Reason for leaving</span>
            <h3>She wanted to move to another</h3>
          </div>
          <h3 className="font-semibold px-6 mt-8">Rate worker</h3>
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
          <div className="flex items-center gap-24">
            <h3>can you re-employ?</h3>
            <div className="flex items-center justify-between gap-10">
              <div className="flex items-center gap-2">
                Yes{" "}
                <button className="w-3 h-3 rounded-full border-2 border-slate-400"></button>
              </div>
              <div className="flex items-center gap-2">
                No{" "}
                <button className="w-3 h-3 rounded-full border-2 border-slate-400"></button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 mt-8 w-80 p-2 rounded-lg h-16 border-2 border-gray-300">
            If no, why?
          </div>
          <div className="mt-4">
            <span className="text-sm">Employer Feedback</span>
            <div className="bg-gray-100 rounded-lg border-gray-300 mt-2 p-2">
              <span className="text-xs block">Company reference</span>
              <h3 className="font-normal">
                she is very diligent and prompt to work. she has a kin eye to
                aesthetics and she would be a great asset in any organization
                she finds herself in
              </h3>
            </div>
          </div>
          <div className="w-full flex items-center justify-between my-4">
            <button className="px-2 py-1 bg-gray-500 text-slate-50 rounded-lg">
              Accept Resignation
            </button>
            <button className="px-4 py-1 bg-orange-500 text-slate-50 rounded-lg">
              Back
            </button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default WorkExperience;
