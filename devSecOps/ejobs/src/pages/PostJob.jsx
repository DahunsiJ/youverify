// -----------Imported React components-------------
import React, { useState, useEffect } from "react";


// -----------Imported icons-------------------
import { BsStar } from "react-icons/bs";
import { FaCheckDouble, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


// ---------Imported Components----------------
import Header from "../component/Header";
import JobProfile from "../component/JobProfile";
import FooterComponent from "../component/Footer";
import InterviewQuestion from "../component/InterviewQuestion";


// ---------Imported Data------------------
import { lgaData } from "../assets/localGov";
import {
  currencies,
  experienceLengths,
  jobFunctions,
  jobIndustries,
  jobLevels,
  jobSkills,
  jobTag,
  minimumRequirements,
  nigeriaStates,
  workTypes,
} from "../assets/jobData";


// -----------------Imported dependencies---------------
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { usePaystackPayment } from 'react-paystack';
import { toast } from "react-toastify";
import { addNewEmployerJob } from "../redux/employerJob/employerJobSlice";
import PaymentHandler from "../component/PaymentHandler";
import { BiCheck } from "react-icons/bi";



function PostJob() {
  const [jobProfile, setJobProfile] = useState({});
  const [jobType, setJobType] = useState("basic");
  const [interviewQuestions, setInterviewQuestions] = useState([]);
  const [addSkills, setAddSkills] = useState([]);
  const [addTags, setAddTags] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [localGovernment, setLocalGovernemnt] = useState([]);
  const loggedinUser = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentDescription, setCurrentDescription] = useState("")
  const [jobDescriptionList, setJobDescriptionlist]  = useState([])
  const [loading, setLoading] = useState(false);
  const [paymentMade, setPaymentMade] = useState(false)
  const [config, setConfig] = useState({})
  const [currentPrice, setCurrentPrice] = useState(null)
  const [categorySelection, setCategorySelection] = useState(null)
  const dispatch = useDispatch()
  const baseURL = `${process.env.REACT_APP_API_URL}job/createJob`;


  useEffect(() => {
    setJobProfile((prevProfile) => ({
      ...prevProfile,
      jobSkills: addSkills,
      jobType: "",
      jobTag: addTags,
      jobDescription: jobDescriptionList,
      additionalInterviewQuestion: interviewQuestions,
      employer: loggedinUser.currentUser._id,
      employerName: loggedinUser.currentUser.companyName,
      paymentRefrence: "N/A"
    }));
  }, [addSkills, addTags, interviewQuestions, loggedinUser.currentUser._id, loggedinUser.currentUser.companyName, jobDescriptionList]);


// -----------------Payment selection handler-----------------
const handleCategorySelection = (index, type, isPaid = false) => {
  console.log('today', categorySelection);
  setCategorySelection(index);
  setJobProfile(prev => ({...prev, jobType: type}));
};


//  --------Payment setups-------------
  const checkPayment = ()=>{
    if(jobProfile.jobType === 'standard' || jobProfile.jobType === 'premium'){
      if(jobProfile.paymentRefrence === 'N/A') return false
    }
    return true
  }


  // ------------------Handle job form data----------------------
  const handleChange = (e) => {
    setJobProfile({ ...jobProfile, [e.target.name]: e.target.value });
  };


// -----------------Skill handlers--------------------
  const handleAddSkills = (e) => {
    const currentTarget = e.target.value;
    if (!addSkills.includes(currentTarget)) {
      setAddSkills([...addSkills, currentTarget]);
    }
  };

  const handleRemoveSkills = (skill) => {
    const newSkillList = addSkills.filter((eachSkill) => eachSkill !== skill);
    setAddSkills(newSkillList);
  };


// ----------------Tag Handlers--------------------
  const handleAddTag = (e) => {
    const currentTag = e.target.value;
    if (!addTags.includes(currentTag)) {
      setAddTags([...addTags, currentTag]);
    }
  };

  const handleRemoveTag = (tag) => {
    const newTagList = addTags.filter((eachTag) => eachTag !== tag);
    setAddTags(newTagList);
  };



  // ----------------Job description handlers------------------
  const handleAddJobDescription = (e) => {
    e.preventDefault();
    if (currentDescription === "") return;
    setJobDescriptionlist([...jobDescriptionList, currentDescription]);
    setCurrentDescription("");
  };


  const handleRemoveJobDescription = (description) => {
    const newDescription = jobDescriptionList.filter((eachDescription)=>eachDescription !== description)
    setJobDescriptionlist(newDescription)
  };



// ---------------Job additional question handlers----------------------
  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (currentQuestion === "") return;
    setInterviewQuestions([...interviewQuestions, currentQuestion]);
    setCurrentQuestion("");
  };

  
  const handleRemoveQuestion = (selectedQuetion) => {
    alert(selectedQuetion)
    const newQuestions = interviewQuestions.filter((eachDescription)=>eachDescription !== selectedQuetion)
    setInterviewQuestions(newQuestions)
  };


  // ------------------Local government handler-----------------
  const handleLGA = (e) => {
    const currentState = e.target.value;
    const LGovArea = lgaData[currentState];
    setLocalGovernemnt(LGovArea);
  };


  // -------------------Submit job handler----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setErrorMessage("")
//--------Check type and payment made--------------
    if (!checkPayment()) return toast.error('Payment required')
    try {
      const processJob = await axios.post(
        baseURL, 
        jobProfile,
        {withCredentials: true}
      );
      dispatch(addNewEmployerJob(processJob.data))
      setLoading(false)
      toast.success('Success')
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
      toast.error('Error pls try again')
      setLoading(false)
    }
  };



  return (
    <div className="sm:px-24 px-6 bg-gray-100">
      <Header darkMode={true} />
      <div className="text-sm">
        <h3 className="my-2 font-semibold text-lg capitalize">
          Please select your job type
        </h3>
        <span className="text-slate-600">
          Please select what type of job you would like to post.{" "}
        </span>

        {/* ----------------------Job category section---------------------- */}
        <section className="">
          <div className="flex items-start justify-center flex-wrap my-4 gap-4">
            <div className={`${categorySelection === '0' ? 'bg-blue-100' : "bg-white"} hover:bg-orange-200 border-2 p-4 rounded-lg border-slate-300 flex flex-col items-center justify-center w-52 shadow-lg`}>
              <BsStar className="text-blue-400" />
              <h2 className="font-semibold text-md my-2">Basic</h2>
              <p className="text-sm text-slate-500">Effortlessly filter and select relevant candidates from a pre-sorted applicant pool</p>
              <h4 className="mt-2 font-bold">Free</h4>
              <button onClick={()=>{handleCategorySelection('0', 'basic')}} className={`w-full py-2 px-2 ${jobProfile.jobType === 'basic' ? 'bg-green-400 text-white': 'bg-red-500 text-slate-50'} my-2 rounded-sm`}>{jobProfile.jobType === 'basic' ? <BiCheck className="mx-auto font-semibold text-white text-xl"/> : 'Continue'}</button>
            </div>
            
            
            <div className={`${categorySelection === '1' ? 'bg-yellow-100' : "bg-white"} hover:bg-orange-200 border-2 p-4 rounded-lg border-slate-300 flex flex-col items-center justify-center w-52 shadow-lg`}>
              <BsStar className="text-yellow-400" />
              <h2 className="font-semibold text-md my-2">Standard</h2>
              <p className="text-sm text-slate-500">Effortlessly filter and select relevant candidates from a pre-sorted applicant pool</p>
              <h4 className="mt-2 font-bold">N 50,000</h4>
              <PaymentHandler profile={jobProfile} profileHandler={setJobProfile} email={loggedinUser.currentUser.email} amount='50000' change={()=>{handleCategorySelection('1', 'standard')}} item='1' type='standard'/>
            </div>
            
            
            <div className={`${categorySelection === '2' ? 'bg-orange-100' : "bg-white"} hover:bg-orange-200 border-2 p-4 rounded-lg border-slate-300 flex flex-col items-center justify-center w-52 shadow-lg`}>
              <BsStar className="text-orange-400" />
              <h2 className="font-semibold text-md my-2">Premium</h2>
              <p className="text-sm text-slate-500">Effortlessly filter and select relevant candidates from a pre-sorted applicant pool</p>
              <h4 className="mt-2 font-bold">N 100,000</h4>
              <PaymentHandler profile={jobProfile} profileHandler={setJobProfile} email={loggedinUser.currentUser.email} amount='100000' change={()=>{handleCategorySelection('2', 'premium')}} item='2' type="premium"/>
            </div>


            <div className={`${categorySelection === '3' ? 'bg-red-100' : "bg-white"} hover:bg-orange-200 border-2 p-4 rounded-lg border-slate-300 flex flex-col items-center justify-center w-52 shadow-lg`}>
              <BsStar className="text-red-400" />
              <h2 className="font-semibold text-md my-2">Partner with e-Job</h2>
              <p className="text-sm text-slate-500">Effortlessly filter and select relevant candidates from a pre-sorted applicant pool</p>
              <h4 className="mt-2 font-bold">Free</h4>
              <button onClick={()=>{handleCategorySelection('3', 'partner')}} className={`w-full py-2 px-2 ${jobProfile.jobType === 'partner' ? 'bg-green-400 text-white': 'bg-red-500 text-slate-50'} my-2 rounded-sm`}>{jobProfile.jobType === 'partner' ? <BiCheck className="mx-auto font-semibold text-white text-xl"/> : 'Continue'}</button>
            </div>
          </div>
        </section>


{/* ---------------------Job form section--------------------------- */}
        <form className="mt-24 bg-white p-4">
          <h3 className="font-semibold text-sm  uppercase my-4">
            Job Description and breakdown
          </h3>
          
          <p className="font-medium text-md my-4 text-slate-400">
            Please fill the form below to vividly explain the job opening and to
            attract the right candidate
          </p>

          <div className="border-2 w-full border-slate-300 p-4 rounded-lg">
            
            {/* ---------job title------------- */}
            <div className="w-full">
              <h2>Job Title</h2>
              <input
                className="w-full border-2 mt-2 p-0.5 rounded-sm"
                type="text"
                placeholder="Position"
                name="jobTitle"
                onChange={handleChange}
              />
            </div>

            {/* ----------------job Function------------------------*/}
            
            <div className="my-4 flex items-center justify-center gap-4">
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="jobFunction">
                  Job Function
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="jobFunction"
                >
                  <option selected={true}>Select</option>
                  {jobFunctions.map((eachFunction) => {
                    return <option value={eachFunction}>{eachFunction}</option>;
                  })}
                </select>
              </div>

              <div className="w-full my-4">
                <label className="block my-2" htmlFor="industry">
                  Industry
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="industry"
                >
                  <option selected={true}>Select</option>
                  {jobIndustries.map((eachIndustry) => {
                    return <option value={eachIndustry}>{eachIndustry}</option>;
                  })}
                </select>
              </div>
              
              <div className="w-full my-4">
                <label className="block my-2" htmlFor="workType">
                  Work type
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="workType"
                >
                  <option selected={true}>Select</option>
                  {workTypes.map((eachWorkType) => {
                    return <option value={eachWorkType}>{eachWorkType}</option>;
                  })}
                </select>
              </div>
            </div>

            {/* ------------------------job experirience length------------------------*/}
            <div className="my-4 flex items-center justify-center gap-4">
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="experienceLength">
                  Experience Length
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="experienceLength"
                >
                  <option selected={true}>Select</option>
                  {experienceLengths.map((eachExperienceLength) => {
                    return (
                      <option value={eachExperienceLength}>
                        {eachExperienceLength}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="currency">
                  Salary Currency
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="currency"
                >
                  <option selected={true}>Select</option>
                  {currencies.map((eachCurrency) => {
                    return <option value={eachCurrency}>{eachCurrency}</option>;
                  })}
                </select>
              </div>
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="salary">
                  Salary Range
                </label>
                <input
                  className="w-full border-2 mt-2 p-0.5 rounded-sm"
                  type="text"
                  placeholder="Salary range"
                  name="salary"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ---------------------Minimum Qualification and State--------------------- */}
            <div className="my-4 flex items-center justify-center gap-4">
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="minimumQualification">
                  Minimum qualification
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="minimumQualification"
                >
                  <option selected={true}>Select</option>
                  {minimumRequirements.map((eachReq) => {
                    return <option value={eachReq}>{eachReq}</option>;
                  })}
                </select>
              </div>
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="state">
                  State
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={(e) => {
                    handleChange(e);
                    handleLGA(e);
                  }}
                  name="state"
                >
                  <option selected={true}>Select</option>
                  {nigeriaStates.map((eachState) => {
                    return <option value={eachState}>{eachState}</option>;
                  })}
                </select>
              </div>
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="localGovernment">
                  Local Government
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="localGovernment"
                >
                  <option selected={true}>Select</option>
                  {localGovernment.map((eachState) => {
                    return <option value={eachState}>{eachState}</option>;
                  })}
                </select>
              </div>
            </div>

            {/* -------------------------Job Description------------------------- */}
            <div className="my-2">
              <label className="block my-2" htmlFor="jobDescription">
                Job Description
              </label>
              <textarea
                className="w-full border-2 mt-2 p-0.5 rounded-sm"
                name="jobDescription"
                placeholder="Job Description"
                onChange={(e)=>{setCurrentDescription(e.target.value)}}
                value={currentDescription}
              />
              <button onClick={handleAddJobDescription} className="bg-gray-400 text-gray-50 px-4 py-2 rounded-lg">Add description</button>
              <div className="my-2 w-full flex flex-wrap items-center justify-start gap-2">
                {jobDescriptionList.map(eachDescription=>{
                  return (<span className="bg-gray-400 text-gray-100 rounded-lg px-2 py-1 w-fit relative">{eachDescription} <MdCancel onClick={()=>{handleRemoveJobDescription(eachDescription)}} className="text-red-300 absolute -top-2 right-0 cursor-pointer hover:text-red-600"/></span>)
                })}
              </div>
            </div>
            <div className="my-2">
              <label className="block my-2" htmlFor="jobSummary">
                Job Summary
              </label>
              <textarea
                className="w-full border-2 mt-2 p-0.5 rounded-sm"
                name="jobSummary"
                placeholder="Job Summary"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* --------------------Job durations-------------------- */}
          <div className="my-4">
            <h3 className="text-lg font-semibold my-4">
              Job duration & Number of openings
            </h3>
            <p className="font-medium text-md my-4 text-slate-400">
              Please provide the job durations
            </p>
            <div className="border-2 w-full border-slate-300 p-4 rounded-lg">
              <div>
                <label className="block my-2" htmlFor="numberOfOpenings">
                  Number of Opening
                </label>
                <input
                  className="w-full border-2 mt-2 p-0.5 rounded-sm"
                  type="text"
                  name="numberOfOpenings"
                  placeholder="Number of opening"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block my-2" htmlFor="vacancyDuration">
                  Vacancy Duration/Valid till
                </label>
                <input
                  className="w-full border-2 mt-2 p-0.5 rounded-sm"
                  type="date"
                  name="vacancyDuration"
                  placeholder="Duration in days"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* -----------------------Skills and Tags----------------------- */}
          <div className="my-4">
            <h3 className="text-lg font-semibold my-4">Skills and Tags</h3>
            <p className="font-medium text-md my-4 text-slate-400">
              Add relevant skills and tags to attract the best candidates.
            </p>
            <div className="border-2 w-full border-slate-300 p-4 rounded-lg">
              {/* Add Skills */}
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="jobSkills">
                  Skills
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleAddSkills}
                  name="jobSkills"
                >
                  <option selected={true}>Select</option>
                  {jobSkills.map((skill) => {
                    return (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    );
                  })}
                </select>
                <div className="flex flex-wrap mt-2">
                  {addSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-200 text-gray-600 rounded-full px-3 py-1 mr-2 mb-2"
                      onClick={() => handleRemoveSkills(skill)}
                    >
                      {skill} &times;
                    </span>
                  ))}
                </div>
              </div>
              {/* Add Tags */}
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="jobTag">
                  Tags
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleAddTag}
                  name="jobTag"
                >
                  <option selected={true}>Select</option>
                  {jobTag.map((tag) => {
                    return (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    );
                  })}
                </select>
                <div className="flex flex-wrap mt-2">
                  {addTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-600 rounded-full px-3 py-1 mr-2 mb-2"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      {tag} &times;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------Interview Questions--------------------------- */}
          <div className="my-4">
            <h3 className="text-lg font-semibold my-4">Interview Questions</h3>
            <p className="font-medium text-md my-4 text-slate-400">
              Add interview questions to help screen candidates.
            </p>
            <div className="border-2 w-full border-slate-300 p-4 rounded-lg">
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="interviewQuestion">
                  Interview Questions
                </label>
                <input
                  className="w-full border-2 mt-2 p-0.5 rounded-sm"
                  type="text"
                  placeholder="Enter interview question"
                  value={currentQuestion}
                  name="interviewQuestion"
                  onChange={(e) => setCurrentQuestion(e.target.value)}
                />
                <button
                  className="mt-2 bg-gray-500 text-white p-2 rounded-md"
                  onClick={handleAddQuestion}
                >
                  Add Question
                </button>
                <div className="flex flex-wrap mt-2">
                  {interviewQuestions.map((question, index) => (
                    <div
                      key={index}
                      onClick={()=>{handleRemoveQuestion(question)}}
                      className="bg-gray-200 text-gray-600 rounded-full px-3 py-1 mr-2 mb-2"
                    >
                      {question} &times;
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------Cover Letter and Additional Documents--------------------------- */}
          <div className="my-4">
            <h3 className="text-lg font-semibold my-4">
              Cover Letter and Additional Documents
            </h3>
            <p className="font-medium text-md my-4 text-slate-400">
              Do you require a cover letter or additional documents from
              applicants?
            </p>
            <div className="border-2 w-full border-slate-300 p-4 rounded-lg">
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="requireCoverLetter">
                  Cover Letter Required?
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="requireCoverLetter"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="requiredocumentUpload">
                  Additional Documents Required?
                </label>
                <select
                  className="p-1 border-2 border-slate-300 w-full"
                  onChange={handleChange}
                  name="requiredocumentUpload"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
          </div>

          {/* ----------------Submission and errors--------------- */}
          <div>
          <span
            className={`mt-4 mb-2 ${
              error ? "block" : "hidden"
            } w-full bg-red-300 text-red-600 font-semibold p-2 text-center`}
          >
            Kindly fill are fields
          </span>
          <span
            className={`mt-4 mb-2 ${
              errorMessage ? "block" : "hidden"
            } w-full bg-red-300 text-red-600 font-semibold p-2 text-center`}
          >
            {errorMessage}
          </span>
          <div className="flex items-center justify-center gap-5 mb-10">
            <Link to={`/employer/${loggedinUser.currentUser._id}`}
              className="mt-8 bg-white-500 border-2 border-gray-300 text-gray-500 py-2 px-4 rounded-md"
              onClick={(e) => {
              }}
            >
              Return
            </Link>
            <button
              className="mt-8 bg-orange-500 text-white py-2 px-4 rounded-md"
              onClick={handleSubmit}
            >
              {loading ? "...loading" : "Submit"}
            </button>
          </div>

          </div>
        </form>
      </div>
      <FooterComponent />
    </div>
  );
}

export default PostJob;
