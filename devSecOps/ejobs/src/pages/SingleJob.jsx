import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaUserGroup } from "react-icons/fa6";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import Logo from "../assets/Images/companyName.svg";
import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";
import JobCard from "../component/JobCard";
import FooterComponent from "../component/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadSpinner from "../component/Modals/LoadSpinner";

function SingleJob() {
  // ------------Params-----------------
  const jobParam = useParams().jobId
  const baseURL = `${process.env.REACT_APP_API_URL}job/getAjob`
  const createJobReportURL = `${process.env.REACT_APP_API_URL}jobReport/createjobReport`
  
  // ------------Redux states--------------
  const loggedInUser = useSelector(state=>state.user)
  const allJob = useSelector(state=>state.jobListSlice.jobList)
  const [showReport, setShowReport] = useState(false)
  
  // -----------states--------------
  const [jobDetails, setJobDetails]  = useState({})
  const [loadingReport, setLoadingReport] = useState(false)
  const [similarJobs, setSimilarJobs] = useState([])
  const [jobReport, setJobReport] = useState({
    jobId: jobParam
  })

  useEffect(()=>{
    window.scrollTo(0, 0)
    const getJobDetails = async()=>{
      try {
        const jobInfomation = await axios.post(baseURL, {jobId: jobParam}, {withCredentials: true})
        if(!jobInfomation) return 
        setJobDetails(jobInfomation.data)
      } catch (error) {
        console.log(error)
      }
    }
    getJobDetails()
  },[])


  // -----------Similar jobs-------------
  useEffect(()=>{
    const topSimilarJobs = allJob.filter(eachJobs=>{
      return (eachJobs.jobTitle === jobDetails.jobTitle).slice(0, 4)
    })
  },[allJob])


  const handleJobReport = async ()=>{
    setLoadingReport(true)
    try{
      await axios.post(createJobReportURL, jobReport, {withCredentials: true})
      toast.success('Report sent')
      setShowReport(false)
      setLoadingReport(false)
    }catch(error){
      toast.error('Error try again')
      setLoadingReport(false)
    }
  }


  const ReportDetails = (e)=>{
    setJobReport({...jobReport, 
      [e.target.name]: e.target.value,
      applicantId: loggedInUser?.currentUser._id
    })
  }


  return (
    <div className="">
      <Header darkMode={true}/>
      <div className="flex sm:flex-row flex-col items-start justify-center gap-4 sm:px-20 px-4 text-sm mt-8">
        <div className="border-2 text-sm border-slate-300 p-6 rounded-lg sm:w-2/3 w-full">
          <div className="flex start items-start justify-between">
            <div className="">
              <img className="w-36" src={Logo} alt="company logo" />
              <div className="font-semibold mb-4">
                <h1 className="capitalize text-xl">{jobDetails.jobTitle}</h1>
                <p className="mt-2 text-base">{jobDetails.employerName}</p>
                <p>{jobDetails.state}</p>
              </div>
            </div>
            <div className="">
              {loggedInUser?.currentUser?.userType === 'jobSeeker' ? <button className="px-4 text-sm rounded-sm py-2 bg-blue-700 text-slate-50 font-semibold">
                <Link to={`/job/apply/${jobDetails._id}`}>Apply</Link>
              </button>: <Link to="/signin" className="px-4 text-sm rounded-sm sm:py-2 py-1 w-fit bg-blue-700 text-slate-50 font-semibold">Signin</Link>}
            </div>
          </div>
          {/* End of logo area */}
          <div className="mt-6 text-sm">
            <h3 className="text-lg font-semibold capitalize mb-4">Job Details</h3>
            <div className="mb-6">
              <span className="px-4 py-2 bg-slate-300 text-slate-800 rounded-3xl mr-2">{jobDetails.workType}</span>
              <span className="px-4 py-2 bg-slate-300 text-slate-800 rounded-3xl">{jobDetails.salary}</span>
            </div>
            <div className="my-6 flex items-center justify-start gap-2">
              <FaUserGroup className="text-slate-600"/>
              <h3 className="">
                <span>{jobDetails?.applications?.length}</span> Applicants
              </h3>
            </div>
            <div className="my-4">
              <h3 className="font-semibold">Line of Service</h3>
              <p>{jobDetails.jobFunction}</p>
            </div>
            <div className="my-4">
              <h3 className="font-semibold">Industry/Sector</h3>
              <p>{jobDetails.industry}</p>
            </div>
            <div className="my-4">
              <h3 className="font-semibold">Specialism</h3>
              <p>{jobDetails.industry}</p>
            </div>
            <div className="my-4">
              <h3 className="font-semibold">Management Level</h3>
              <p>{jobDetails.jobLevel}</p>
            </div>
          </div>

          {/* ----------------Job description section----------------- */}
          <div className="my-4">
            <h2 className="font-bold mb-3">Job Description & summary</h2>
            <p>
              {
              jobDetails.jobSummary
              }
            </p>
            <ul>
              {
                jobDetails.jobDescription && jobDetails.jobDescription.map((eachDescription, index)=>{
                  return(
                    <li key={index}>{eachDescription}</li>
                  )
                })
              }
            </ul>
          </div>

          {/* --------------Education requirements---------------- */}
          <div className="">
            <div className="my-2">
              <h3 className="font-semibold">Education</h3>
              <div className="">
                <span>{jobDetails.minimumQualification}</span>
              </div>
            </div>
            {jobDetails.certificates?
            <h2>Show certificates</h2>
            :<div className="my-2">
              <h3 className="font-semibold">Certifictions (if blank, certifiations not specified)</h3>
              <div className=""></div>
            </div>}
            {jobDetails.jobDescription && <div className="my-2">
              <h3 className="font-semibold my-2">What it takes to succeed in this role</h3>
              <ul className="">
                {jobDetails.jobDescription.map((eachSkills, index)=>{
                  return(
                    <li key={index} className="list-disc ml-6">{eachSkills}</li>
                  )
                })}
              </ul>
            </div>}
            <div className="my-2">
              <h3 className="font-semibold mb-2 mt-4">Required Skills</h3>
              <ul className="">
                {jobDetails.jobSkills && jobDetails.jobSkills.map((eachSkills, index)=>{
                  return(
                    <li key={index} className="list-disc ml-6">{eachSkills}</li>
                  )
                })}
              </ul>
            </div>
            {jobDetails.languages? <h2>Show langauges</h2> : <div className="my-2">
              <h3 className="font-semibold mb-2 mt-4">
                Desired Languages (If blank, desired languages not specifield)
              </h3>
              <div className=""></div>
            </div>}
            {jobDetails.travelRequirement ? 
            <div>
            <span>Up to 20%</span>
            </div>
            : <div className="my-2">
              <h3 className="font-semibold">Travel Requirements (If blank, desired travel requirement&apos;s not specifield)</h3>
            </div>}
            {jobDetails.visaSponsorship ? <div className="my-2">
              <h3 className="font-semibold mb-2 mt-4">Available for Work Visa Sponsorship</h3>
              <div className="">
                <span>No</span>
              </div>
            </div> : ""}
            <div className="my-2">
              <h3 className="font-semibold mb-2 mt-4">Government Clearance Required?</h3>
              <div className="">
                <span>No</span>
              </div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold mb-2 mt-4">Job Posting End Date</h3>
              <div className="">
                <span>December 18, 2023</span>
              </div>
            </div>
            <div className="my-2">
              <button onClick={()=>{setShowReport(!showReport)}} className="px-6 py-2 bg-red-500 text-white rounded-sm active:bg-red-200 hover:bg-red-300">Report Job</button>
            </div>
            <div className={`${showReport ? "block" : "hidden"} shadow-lg p-2 mt-4 rounded-sm border-gray-400 flex flex-col`}>
            <textarea className="p-2 border-2 border-gray-300" name="reportDetails" id="reportDetails" onChange={ReportDetails} placeholder="Report this job border-2 border-gray-300"></textarea>
           {loggedInUser.currentUser ? <button className="mt-4 p-2 bg-green-500 active:bg-green-200 hover:bg-green-400 hover:text-white mx-auto text-gray-700 rounded-sm" onClick={handleJobReport}>{loadingReport ? <LoadSpinner/> : "Send Report"}</button> : <Link to='/signin' className="mt-4 p-2 bg-green-500 active:bg-green-200 hover:bg-green-400 mx-auto text-gray-700 rounded-sm">Sign in to report</Link>}
            </div>
          </div>


          <div className="mb-2 mt-4">
            <h2 className="text-xl font-semibold">Share Job</h2>
            <div className="flex items-center justify-start my-4 gap-4">
              <FaLinkedin className="w-6 h-6" style={{ color: "#0a66c2" }} />
              <BsTwitterX className="w-6 h-6" />
              <FaFacebook className="w-6 h-6" style={{ color: "#1877F2" }} />
              <BsWhatsapp className="w-6 h-6" style={{ color: "#075e54" }} />
            </div>
          </div>
        </div>


        {/* ------------------Right hand side details------------------- */}
        
        
        <div className="sm:w-1/3 sm:block hidden">
          {allJob.map((eachJob, index)=>{
            return(
              <JobCard key={index} data={eachJob} jobId={eachJob._id}/>
            )
          })}
        </div>
        <div className="sticky sm:hidden w-full text-center py-4 bottom-0 sm:px-4 text-xs rounded-sm sm:py-2 bg-blue-700 text-slate-50 font-semibold">
              {loggedInUser?.currentUser?.userType === 'jobSeeker' ? <button className="px-4 text-sm rounded-sm py-2 bg-blue-700 text-slate-50 font-semibold">
                <Link to={`/job/apply/${jobDetails._id}`}>Apply</Link>
              </button>: <Link to="/signin" className="px-4 text-sm rounded-sm py-2 bg-blue-700 text-slate-50 font-semibold">Signin To Apply</Link>}
            </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default SingleJob;
