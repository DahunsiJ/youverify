import FilterComponent from "../component/FilterComponent";
import Header from "../component/Header";
import JobPostJobPage from "../component/JobPostJobPage";
import SearchComponent from "../component/SearchComponent";
import BackgroundImage from "../assets/Images/company.webp";
import FooterComponent from "../component/Footer";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function SearchByCategory() {
  // ----------variable decarations------------
  const loggedInUser = useSelector(state=>state.user.currentUser)
  const params = useParams()
  const allJobs = useSelector(state=>state.jobListSlice.jobList)
  const [searchData, setSearchData] = useState({})
  const [filteredJobs, setFilteredJobs] = useState([])
  // --------- states--------------
  
  // ----------Function handlers--------------
  const handleChange = (e)=>{
    setSearchData({...searchData, [e.target.name]: e.target.value})
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    const applyFilter = allJobs.filter((eachJob) => {
      return (
        (!searchData.jobTitle || eachJob.jobTitle.toLowerCase().includes(searchData.jobTitle.toLowerCase())) &&
        (!searchData.industry || eachJob.industry.toLowerCase() === searchData.industry.toLowerCase()) &&
        (!searchData.state || eachJob.state.toLowerCase() === searchData.state.toLowerCase()) &&
        (!searchData.workType || eachJob.workType.toLowerCase() === searchData.workType.toLowerCase())
      );
    });
    setFilteredJobs(applyFilter);
    console.log({ filteredJobs: applyFilter });
  };

  return (
    <div className="">
      <div className="">
          <Header darkMode={true} />
        <div className="mx-20">
        </div>
        <div
          style={{
            background: `url(${BackgroundImage})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundSize: "100%",
            backgroundPosition: "center",
          }}
          className="border-2 h-80 relative flex flex-col items-center justify-center"
        >
          {loggedInUser && loggedInUser?.userType === 'jobEmployer' && <h2 className="absolute right-8 top-8 px-4 py-1 bg-red-600 text-slate-50 cursor-pointer">
            <Link to={`/${loggedInUser?._id}/postJob`}>Post a Job in this Category</Link>
          </h2>}
          <div className="absolute left-8 top-8 text-slate-50 ">
            <span>Home &gt; Category</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-slate-50 font-semibold mb-2">{params.categoryName}</h1>
          </div>
        </div>
        <div className="sm:mx-20 mx-10">
          <SearchComponent handleChange={handleChange} handleSearch={handleSearch}/>
          <div className="flex flex-col sm:flex-row w-full items-start gap-10">
            <div className="sm:w-3/4 w-full">
              { allJobs.map((eachResult, index) => {
                return (
                  <JobPostJobPage
                    key={index}
                    position={eachResult.jobTitle}
                    companyName={eachResult.employer.companyName}
                    location={`${eachResult.employer.state} ${eachResult.employer.localGovernment}`}
                    salary={eachResult.salary}
                    jobType={eachResult.workType}
                    experience={eachResult.experienceLength}
                    duration = {'10 days'}
                    status="Apply now"
                  />
                );
              })}
            </div>
            <div className='sm:inline-block hidden'>
              <FilterComponent />
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default SearchByCategory;
