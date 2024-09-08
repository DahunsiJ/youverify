import { FaLocationPin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function JobCard({data}) {
const navigate = useNavigate()
  const handleNavigation = (id)=>{
    navigate(`/job/${id}`)
  }

  return (
    <div className="border-2 border-slate-300 p-6 rounded-lg mb-4">
      <div className="flex items-start justify-between">
        <h2 className="font-semibold text-lg cursor-pointer" onClick={()=>{handleNavigation(data._id)}}>{data.jobTitle}</h2>
        <div className="flex items-center gap-2">
          <FaLocationPin className="text-orange-500"/>
          <span>{data.state}</span>
        </div>
      </div>
      <span>{data.employerName}</span>
      <div className="flex gap-2">
        <span className="px-2 py-1 bg-slate-300 rounded-2xl text-slate-600">{data.workType}</span>
        <span className="px-2 py-1 bg-slate-300 rounded-2xl text-slate-600">{data.salary}</span>
      </div>
      <p className="text-slate-700 mt-2">
        {data.jobSummary}
      </p>
    </div>
  );
}

export default JobCard;
