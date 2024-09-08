import { useEffect, useState } from "react";
import axios from "axios";
import { jobFunctions, jobIndustries, workTypes, jobSkills } from "../assets/jobData";
import { MdCancel } from "react-icons/md";
import SearchComponent from "../component/SearchComponent";
import JobPostJobPage from "../component/JobPostJobPage";
import Header from "../component/Header";
import { useLocation, useNavigate } from "react-router-dom";
import qs from 'query-string'

function JobPage() {
  const apiRoute = process.env.REACT_APP_API_URL;
  const [errorMessage, setErrorMessage] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [mainSearchForm, setMainSearchForm] = useState({});
  const baseURL = `${apiRoute}job/allJob`;
  const location = useLocation();
  const navigate = useNavigate();

  const { jobTitle, workType, state } = qs.parse(location.search);

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const fetchJobs = await axios.get(baseURL, {
          withCredentials: true
        });
        setAllJobs(fetchJobs.data);
        applyFilters(fetchJobs.data, { jobTitle, workType, state });
      } catch (error) {
        setErrorMessage("Error fetching jobs");
      }
    };
    getAllJobs();
  }, [jobTitle, workType, state]);

  const applyFilters = (jobs, filters) => {
    let filteredResults = jobs;
    
    if (filters.jobTitle) {
      filteredResults = filteredResults.filter(job => 
        job.jobTitle.toLowerCase().includes(filters.jobTitle.toLowerCase())
      );
    }
    
    if (filters.workType) {
      filteredResults = filteredResults.filter(job => 
        job.workType.toLowerCase() === filters.workType.toLowerCase()
      );
    }
    
    if (filters.state) {
      filteredResults = filteredResults.filter(job => 
        job.state.toLowerCase() === filters.state.toLowerCase()
      );
    }

    setFilteredJobs(filteredResults);
  };

  const handleClearFilter = () => {
    setFilterList([]);
    setFilteredJobs(allJobs);
    navigate('/jobs');
  };

  const addFilterElement = (e) => {
    const selectedElement = e.target.value;
    const title = e.target.name;
    if(title === 'workOrder'){
      if (selectedElement === 'latest') {
        setFilteredJobs([...filteredJobs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      } else if (selectedElement === 'oldest') {
        setFilteredJobs([...filteredJobs].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
      }
      return;
    }
    const updatedFilteredJobs = filteredJobs.filter(
      (eachJob) => eachJob[title].toLowerCase() === selectedElement.toLowerCase()
    );
    setFilteredJobs(updatedFilteredJobs);
    setFilterList([...filterList, { title, selectedElement }]);
  };

  const removeFilterElement = (selectedElement) => {
    const newFilterList = filterList.filter(
      (filter) => filter.selectedElement !== selectedElement
    );
    setFilteredJobs(allJobs);
    setFilterList(newFilterList);
  };

  const handleChange = (e) => {
    setMainSearchForm({ ...mainSearchForm, [e.target.name]: e.target.value });
  };

  const searchByFilter = (e) => {
    e.preventDefault();
    applyFilters(allJobs, mainSearchForm);
    navigate(`/jobs?${qs.stringify(mainSearchForm)}`);
  };

  return (
    <div className="text-sm">
      <Header darkMode={true} />
      <SearchComponent handleSearch={searchByFilter} handleChange={handleChange} />
      <div className="flex flex-col items-start text-sm justify-center sm:flex-row sm:px-24 px-4 gap-8">
        <div className="w-full sm:w-2/3">
          {filteredJobs.map((eachJob) => (
            <JobPostJobPage
              key={eachJob._id}
              position={eachJob.jobTitle}
              companyName={eachJob.employerName}
              location={eachJob.state}
              salary={eachJob.salary}
              jobType={eachJob.workType}
              experience={eachJob.experienceLength}
              duration={eachJob.vacancyDuration}
              jobId={eachJob._id}
              status="Apply now"
            />
          ))}
        </div>
    <div className="hidden w-1/3 sm:block text-sm">
      <div className="p-4 mb-10 text-sm border-2 border-gray-300 rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-600 capitalize">Jobs in Nigeria</h2>
        <div className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
          <span className="text-gray-600">Filter Applied</span>
          <button onClick={handleClearFilter} className="text-sm text-orange-500 hover:underline animate-bounce">Clear all</button>
        </div>
        <div className="flex flex-wrap items-center gap-4 py-4">
          {filterList.map((filter, index) => (
            <span key={index} className="relative px-4 py-2 bg-gray-200 text-gray-800 rounded-3xl">
              {filter.selectedElement}
              <MdCancel onClick={() => removeFilterElement(filter.selectedElement)} className="absolute text-red-300 cursor-pointer -top-2 right-0 hover:text-red-400" />
            </span>
          ))}
        </div>
        <span className="font-bold text-orange-500">{allJobs.length} jobs found</span>
      </div>


      <form className="p-4 border-2 border-gray-300 rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-600 capitalize">Filter Results</h2>
        <div className="flex items-center justify-between pl-2 mb-4 py-1 bg-gray-100 rounded-md">
          <span className="text-gray-600">Filter Applied</span>
          <button className="px-4 py-1.5 text-sm text-white bg-orange-500 rounded-md hover:bg-orange-600">Search</button>
        </div>


        <div className="space-y-3">
          <select name="jobFunction" onChange={addFilterElement} className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500">
            <option value="" disabled selected>Job function</option>
            {jobFunctions.map((func, index) => (
              <option key={index} value={func}>{func}</option>
            ))}
          </select>


          <select name="industry" onChange={addFilterElement} className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500">
            <option value="" disabled selected>Industry</option>
            {jobIndustries.map((industry, index) => (
              <option key={index} value={industry}>{industry}</option>
            ))}
          </select>


          <select name="state" onChange={addFilterElement} className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500">
            <option value="" disabled selected>Work type</option>
            {workTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>


          <select name="workType" onChange={addFilterElement} className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500">
            <option value="" disabled selected>Job Skills</option>
            {jobSkills.map((skill, index) => (
              <option key={index} value={skill}>{skill}</option>
            ))}
          </select>


          <select name="workOrder" onChange={addFilterElement} className="w-full p-2 border-2 border-gray-300 rounded-md outline-none focus:border-blue-500">
            <option value="Order by" disabled>Order by</option>
            <option value="Latest">Latest</option>
            <option value="Starred">Starred</option>
            <option value="Popular">Popular</option>
          </select>
          <button className="w-full py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">Reset Filter</button>
        </div>
      </form>
    </div>
      </div>
    </div>
  );
}

export default JobPage;
