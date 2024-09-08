import { Link, useParams, useNavigate } from "react-router-dom";
import Logo from "../assets/Images/companyName.svg";
import Header from "../component/Header";
import JobCard from "../component/JobCard";
import FooterComponent from "../component/Footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import LoadSpinner from "../component/Modals/LoadSpinner";
import { MdOutlineUpload } from "react-icons/md";
import { BiFile } from "react-icons/bi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from "react-redux";
import { addApplication } from "../redux/applicationList/applicationSlice";
import { convertToBase64 } from "../Utils/fileConverter";


function ApplyJob() {
  const jobParams = useParams().jobId;
  const baseURL = `${process.env.REACT_APP_API_URL}application/createApplication`;
  const jobSource = `${process.env.REACT_APP_API_URL}job/getAjob`;
  const currentUser = useSelector((state) => state.user);
  const [jobDetails, setJobDetails] = useState({});
  const [formDataInfo, setFormDataInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [interviewData, setInterviewData] = useState([])
  const resumeRef = useRef()
  const navigate = useNavigate()  
  const dispatch = useDispatch()
  const getAJobSeeker = "http://localhost:3003/api/v1/jobSeeker/getAjobSeeker/";



  useEffect(() => {
    const getJobDetails = async () => {
      const jobInformation = await axios.post(jobSource, {jobId: jobParams}, {withCredentials: true});
      jobInformation && setJobDetails(jobInformation.data);
    };
    getJobDetails();
  }, []);

  useEffect(() => {
    if (jobDetails._id && currentUser.currentUser._id) {
      setFormDataInfo({
        ...formDataInfo,
        job: jobDetails._id,
        applicant: currentUser.currentUser._id,
        companyId: jobDetails.employer._id,
        companyAddress: `${jobDetails.localGovernment} ${jobDetails.state}`,
        position: jobDetails.jobTitle,
        applicantName: `${currentUser.currentUser.firstName} ${currentUser.currentUser.lastName}`,
        availability: "Available to start immediately",
        ApplicantPhone: currentUser.currentUser.phoneNumber
      });
    }
  }, [jobDetails, currentUser]);


  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormDataInfo = {
      ...formDataInfo,
      additionalQuestionResponse: interviewData
    };
    setFormDataInfo(updatedFormDataInfo);
    setLoading(true) 
    try {
      const applicationResponse = await axios.post(baseURL, updatedFormDataInfo, {withCredentials: true});
      dispatch(addApplication(applicationResponse.data))
      toast.success('Applied')
      setLoading(false)
      navigate('/jobs')
    } catch (error) {
      console.log(error)
      toast.error('Error try again later')
      setLoading(false)
    }
  };

  const handleChange = async(e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const resumeFile = await convertToBase64(file)
      setFormDataInfo({ ...formDataInfo, [e.target.name]: resumeFile });
    } else {
      setFormDataInfo({ ...formDataInfo, [e.target.name]: e.target.value });
    }
  };

  const handleResumeUpload = ()=>{
    resumeRef.current.click()
  }

  const handleAdditionalQuestion = (e, index)=>{
    const newInterviewData = [...interviewData];
  newInterviewData[index] = {
    question: jobDetails.additionalInterviewQuestion[index],
    response: e.target.value
  };
  setInterviewData(newInterviewData);
  }

  return (
    <div className="">
      <Header darkMode={true} />
      <div className="flex items-start justify-center gap-4 text-sm sm:px-20 px-4 mt-8">
        <div className="border-2 border-slate-300 p-6 rounded-lg sm:w-2/3 w-full">
          <div className="">
            <div className="">
              <img className="w-36" src={Logo} alt="company logo" />
              <div className="">
                {jobDetails.jobTitle && (
                  <h1 className="text-md font-semibold">
                    {jobDetails.jobTitle}
                  </h1>
                )}
                <p>{jobDetails.employerName}</p>
                <p>{jobDetails.state}</p>
              </div>
            </div>
          </div>

          {/* ---------------------End of logo area--------------------- */}

          <form encType="multipart/form-data">
            <div className="mt-6">
              <h3 className="text-xl font-semibold capitalize mb-4">
                Job Details
              </h3>
              <div className="mb-6 flex text-[.8rem]">
                <span className="px-4 py-2 bg-slate-300 text-slate-800 rounded-3xl mr-2">
                  {jobDetails.workType}
                </span>
                {jobDetails.currency && jobDetails.salary && (
                  <span className="px-4 py-2 bg-slate-300 text-slate-800 rounded-3xl mr-2">
                    {jobDetails.salary} {jobDetails.currency.split("-")[0]}
                  </span>
                )}
              </div>
                {jobDetails.jobDescription && (
                  <div>
                  <h3 className="font-semibold text-lg mt-4 mb-2">How to survive in on this role</h3>
                  <ul>
                    {jobDetails.jobDescription.map((eachDescription, index)=><li key={index} className="list-disc ml-4">{eachDescription}</li>)}
                  </ul>
                  </div>
                )}
              {jobDetails.requireCoverLetter && (
                <div className="mt-4">
                  <h3 className="font-semibold">Why should we hire you</h3>
                  <textarea
                    className="w-full shadow-md rounded-sm border-2 border-gray-100 h-52 outline-none p-2"
                    placeholder="Cover letter"
                    name="coverLetter"
                    onChange={handleChange}
                  ></textarea>
                </div>
              )}
              <div className="my-4">
                <label className="mb-2" htmlFor="availability">
                  Availability
                </label>
                <select
                  className="block w-full rounded-sm border-2 border-gray-100 py-1"
                  name="availability"
                  id="availability"
                  onChange={handleChange}
                >
                  <option value="immediate">
                    Available to start immediately
                  </option>
                  <option value="1week">
                    Available to start within 1 week
                  </option>
                  <option value="2weeks">
                    Available to start within 2 weeks
                  </option>
                  <option value="1month">
                    Available to start within 1 month
                  </option>
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="availability" className="mb-2">
                  I will be available from
                </label>
                <input
                  className="w-full rounded-sm border-2 border-gray-1002 py-1"
                  type="date"
                  name="availabilty"
                  id="availability"
                  onChange={handleChange}
                />
              </div>

              
              {/* ---------Question area---------- */}
              <div>
                <h1 className="font-semibold text-lg">Additiona Information</h1>
                  {jobDetails.additionalInterviewQuestion &&
    jobDetails.additionalInterviewQuestion.map((eachQuestion, index) => {
      return <div key={index} className="my-4">
        <label className="mb-2" htmlFor={`Question-${index}`}>{eachQuestion}</label>
        <input 
          className="w-full outline-none rounded-sm border-2 border-gray-1002 py-1" 
          type="text" 
          onChange={(e) => handleAdditionalQuestion(e, index)} 
          name={`Qestion-${index}`} 
          id={`Qestion-${index}`}
        />
      </div>;
    })
  }
                </div>
            </div>
            <div>
              <BiFile className="w-8 h-8"/>
            </div>

            {/* ------------Resume upload section------------- */}
            <div>

            <div className="form-group">
              <label
                htmlFor="resume"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Resume/CV <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                ref={resumeRef}
                onChange={handleChange}
                accept='.pdf, .docx, .doc, .odt'
                required
                className="hidden w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              <h2 className="bg-orange-300 text-center pz-4 py-2 rounded-sm border-2 border-gray-100 shadow-md text-white">{formDataInfo.resume && formDataInfo.resume}</h2>
              <div className='flex items-center justify-center gap-10'>
                <div className='flex items-center justify-center flex-column'>
                <MdOutlineUpload onClick={handleResumeUpload} className="w-10 h-10 cursor-pointer bg-orange-300 text-white rounded-full p-1 my-4"/>
                <h3>Upload from device</h3>
                </div>
               {/* <Link to={`/${currentUser.currentUser._id}/createCV`} className='bg-orange-300 text-white text-bold px-4 py-2 rounded-sm'>Ejob CV </Link> */}
              </div>
            </div>
            </div>

            {errorMessage && <span className="px-4 py-1 bg-red-300 text-red-600 font-semibold my-4">{errorMessage}</span>}
            <div className="my-4 flex items-center justify-center gap-8">
              <Link
                to={`/jobs`}
                className="px-4 py-1.5 rounded-sm bg-red-500 text-slate-50 font-medium"
              >
                Cancel
              </Link>
              <button
                onClick={handleSubmit}
                className="px-4 py-1.5 rounded-sm bg-green-500 text-slate-50 font-medium"
              >
                {loading ? <LoadSpinner/> : "Apply"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/3 sm:block hidden">
          <JobCard data={jobDetails}/>
          <JobCard data={jobDetails}/>
          <JobCard data={jobDetails}/>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default ApplyJob;
