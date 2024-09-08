import FilterComponent from "../component/FilterComponent";
import Header from "../component/Header";
import JobPostJobPage from "../component/JobPostJobPage";
import SearchComponent from "../component/SearchComponent";
import BackgroundImage from "../assets/Images/location.jpg";
import FooterComponent from "../component/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { lgaData } from "../assets/localGov";

function SearchByLocation() {

  const allJob = useSelector(state=>state.jobListSlice.jobList)
  const loggedInUser = useSelector(state=>state.user.currentUser)
  const location = useParams()
  const [jobList, setJobList] = useState(allJob)
  const [locationName, setLocationName] = useState('')
  const [searchData, setSearchData] = useState({})


  //  scroll to the top
  useEffect(()=>{
    window.scroll(0,0)
    console.log();
    const capitalizeString = (aString)=>{
    let capitalizeString = ''
    const newString = aString.split('')
    const strLength = aString.length
    const firstLetter = newString[0].toUpperCase()
    capitalizeString += firstLetter
    const remainingLetter = newString.splice(1, strLength).join('')
    capitalizeString += remainingLetter
    setLocationName(capitalizeString)
  }
  capitalizeString(location.locationId)
},[])


// -----------Fetch joblist by location-------
useEffect(()=>{
  setJobList(allJob.filter(eachJob=>eachJob.state.toLocaleLowerCase() === location.locationId.toLocaleLowerCase()))
},[])
  


const handleLGA = (e)=>{
  const selectedOption = e.target.value
  setJobList(allJob.filter(eachJob=>eachJob.localGovernment.toLocaleLowerCase() === selectedOption.toLocaleLowerCase()))
}


// ------------Search input changes-------------
const handleChange = (e)=>{
  setSearchData({...searchData, [e.target.name]: e.target.value})
}

const handleSearch = ()=>{
  console.log({data: searchData})
}


  return (
    <div className="">
      <div className="">
        <div className="mx-20">
          <Header darkMode={true} />
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
          {loggedInUser && !loggedInUser.userType === "jobSeeker" && <h2 className="absolute right-8 top-8 px-4 py-1 bg-red-600 text-slate-50 cursor-pointer">
            Post a Job in this location
          </h2>}
          <div className="absolute left-8 top-8 text-slate-50 ">
            <span>Home &gt; Location</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-slate-50 font-semibold mb-2 capitalize">{location.locationId}</h1>
            <form>
              <select
                name="LGA"
                id="LGA"
                onChange={handleLGA}
                className="px-3 py-1 bg-transparent text-slate-50 border-2 border-slate-50 outline-none"
              >
                {lgaData[locationName] && lgaData[locationName].map(eachLocalGov=>{
                  return(
                    <option value={eachLocalGov} className="bg-gray-500">
                  {eachLocalGov}
                </option>
                  )
                })}
                
              </select>
            </form>
          </div>
        </div>
        {/* ------------Filter Component----------------- */}
        <div className="sm:mx-20 mx-4">
          <SearchComponent handleChange={handleChange} handleSearch={handleSearch}/>
          <div className="flex items-start gap-6">
            <div className="sm:w-3/5 w-full">
            <div className="w-full">

              {jobList.map((eachResult, index) => {
                return (
                  <JobPostJobPage
                    key={index}
                    position={eachResult.jobTitle}
                    companyName={eachResult.employerName}
                    location={`${eachResult.localGovernment} ${eachResult.state}`}
                    salary={`${eachResult.salary}`}
                    jobType={eachResult.workType}
                    experience={eachResult.experienceLength}
                    duration={eachResult.vacancyDuration}
                    status='Apply'
                    jobId={eachResult._id}
                    />
                  );
                })}
                </div>
            </div>
            <div className="w-2/5 sm:block hidden">
              <FilterComponent/>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default SearchByLocation;
