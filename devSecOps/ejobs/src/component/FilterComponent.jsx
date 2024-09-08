// -------------Version 2-----------

import { jobFunctions, jobIndustries, workTypes } from "../assets/jobData";
import FooterComponent from "./Footer";

const handleClear = ()=>{

}

function FilterComponent() {
  return (
    <div className="border border-slate-300 rounded-lg p-4 w-full max-w-lg mx-auto">
      <div className="bg-slate-100 text-sm p-3 flex items-center justify-between mb-4 rounded-md">
        <div className="">
          <span className="text-gray-700">Filter Applied</span>
        </div>
        <button onClick={handleClear} className="py-1.5 px-3 bg-orange-500 text-white hover:bg-red-500 rounded-md">
          Clear all
        </button>
      </div>
      <div className="">

    {/* ----------Job function----------- */}
      <select className="w-full px-3 py-2 mb-3 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500" name="jobFunction" id="jobFunction">
                 <option value="web developer" disabled>Job function</option>
                 {
                   jobFunctions.map((eachFunction, index)=>{
                     return (<option key={index} value={eachFunction}>{eachFunction}</option>)
                   })
                 }
      </select>

      {/* ------------Job industry-------------- */}
      <select className="w-full px-3 py-2 mb-3 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500" name="jobFunction" id="jobFunction">
                 <option value="web developer" disabled>Industry</option>
                 {
                   jobIndustries.map((eachIndustry, index)=>{
                     return (<option key={index} value={eachIndustry}>{eachIndustry}</option>)
                   })
                 }
      </select>

      {/* -------------Work type----------------- */}
      <select className="w-full px-3 py-2 mb-3 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500" name="jobFunction" id="jobFunction">
                 <option value="web developer" disabled>Work type</option>
                 {
                   workTypes.map((eachWorkType, index)=>{
                     return (<option key={index} value={eachWorkType}>{eachWorkType}</option>)
                   })
                 }
      </select>
        <button className='py-2 w-full bg-orange-500 text-slate-50'>Filter</button>
             </div>
           </div>
  )
}

export default FilterComponent