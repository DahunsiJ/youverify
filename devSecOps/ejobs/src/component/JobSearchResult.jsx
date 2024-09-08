import { MdLocationPin } from "react-icons/md";

function JobSearchResult({
  position,
  location,
  companyName,
  salary,
  jobType,
  experience,
  duration,
  status,
}) {
  return (
    <div className="w-3/4 mx-auto my-14 border-2 border-slate-300 rounded-md">
      {/* ---------Top element---------- */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="">
            <h1 className="text-2xl capitalize font-semibold">{position}</h1>
            <h2 className="text-slate-400 my-1">{companyName}</h2>
          </div>
          <div className="">
            <h2>{jobType}</h2>
          </div>
        </div>
        <div className="my-4 text-slate-400 font-semibold flex items-start justify-between">
          <div className="flex items-start justify-start gap-2">
            <MdLocationPin className="text-orange-500"/>
            <h2>{location}</h2>
          </div>
          <h2>Salary: {salary}</h2>
        </div>
      </div>
      {/* ----------Bottom element------------- */}
      <div className="bg-slate-200 p-4">
        <div className="mb-4 flex items-start justify-start gap-4">
          <div className="flex gap-2">
            <span className="px-1 rounded-full bg-slate-400 text-slate-700">95</span>
            <span>Applied</span>
          </div>
          <div className="flex gap-2">
            <span className="px-1 rounded-full bg-slate-400 text-slate-700">11</span>
            <span>Shortlisted</span>
          </div>
          <div className="flex gap-2">
            <span className="px-1 rounded-full bg-slate-400 text-slate-700">0</span>
            <span>Scheduled for interview</span>
          </div>
          <div className="flex gap-2">
            <span className="px-1 rounded-full bg-slate-400 text-slate-700">11</span>
            <span>Hired</span>
          </div>
          <div className="flex gap-2">
            <span className="px-1 rounded-full bg-slate-400 text-slate-700">0</span>
            <span>Rejected</span>
          </div>
          <div className="flex gap-2">
            <span className="px-1 rounded-full bg-slate-400 text-slate-700">11</span>
            <span>Shortlisted</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="px-4 py-1 border-2 border-slate-500 bg-slate-50 text-slate-900">Add skill assesment</button>
          <button className="px-4 py-1 border-2 border-slate-500 bg-slate-50 text-slate-900">Boost Job to starred</button>
        </div>
      </div>
    </div>
  );
}

export default JobSearchResult;
