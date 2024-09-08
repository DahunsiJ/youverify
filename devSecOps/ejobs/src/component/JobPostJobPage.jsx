import { MdLocationPin, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';

function JobPostJobPage({ position, location, companyName, salary, jobType, experience, duration, status, jobId }) {
  return (
    <div className="sm:p-5 p-4 bg-white shadow-md text-sm border border-gray-200 rounded-lg mb-6 relative overflow-hidden transition-transform transform hover:scale-105">
      <div className="bg-orange-500 absolute -top-[14px] -left-[65px] w-[200px] h-[100px] rotate-[314.5deg]"></div>
      <div className="relative z-10">
        <div className="z-10 absolute -top-2 right-2 bg-yellow-400 p-2 rounded-full">
          <MdStar className="relative text-white w-5 h-5 z-10" />
        </div>
        <div className="mb-4">
          <h1 className="text-2xl relative z-30 font-bold text-gray-800 capitalize">{position}</h1>
          <h2 className="text-xl capitalize text-gray-600">{companyName}</h2>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <MdLocationPin className="text-orange-500 mr-2" />
            <span>{location}</span>
          </div>
          <div className="text-gray-600">
            <span>Salary: {salary}</span>
          </div>
        </div>
        <div className="text-gray-600 mb-4">
          <span className="font-semibold">Job Type: {jobType}</span>
        </div>
        <div className="flex items-center justify-between border-t pt-4 text-gray-600">
          <div>
            <p>Experience Level: {experience}</p>
            <p>Posted: {duration}</p>
          </div>
          <div className="text-orange-500 font-semibold">
            <Link to={`/job/${jobId}`} className="hover:underline">
              {status}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPostJobPage;
