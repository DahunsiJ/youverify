// import { BsStar, BsTwitterX, BsWhatsapp } from "react-icons/bs";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import Header from "../component/Header";
// import JobProfile from "../component/JobProfile";
// import FooterComponent from "../component/Footer";
// import { useState } from "react";
// import InterviewQuestion from "../component/InterviewQuestion";
// import { currencies, experienceLengths, jobFunctions, jobIndustries, jobLevels, jobSkills, jobTag, minimumRequirements, nigeriaStates, workTypes } from "../assets/jobData";
// import { jobCategories } from "../assets/data";
// import { MdCancel } from "react-icons/md";

// function PostJob() {
//   const [jobProfile, setJobProfile] = useState({})
//   const [jobType, setJobType] = useState("basic")
//   const [interviewQuestions, setInterviewQues] = useState([])
//   const [additionalQuestions, setAdditional] = useState([])
//   const [additionalInterviewQuestions, setAdditionalInterviewQuestion] = useState([])
//   const [coverLetterOption, setCoverLetter] = useState('yes')
//   const [documentsOption, setDocumentOption] = useState('yes')
//   const [firstPrequisite, setFirstPrerequisite] = useState(true)
//   const [titleCount, setTitleCount] = useState(0)
//   const [addSkills, setAddSkills] = useState([])
//   const [addTags, setAddTags] = useState([])
//   const [questionCount, setQuestionCount] = useState(1)
//   const [currentQuestion, setCurrentQuestion] = useState("")



//   const handleChange=(e)=>{
//     setJobProfile({...jobProfile, [e.target.name]:e.target.value})
//   }

//   const removeQuestion = (e)=>{
//     const questList = additionalQuestions.filter(eachQues => eachQues !== e);
//     setAdditional(questList);
//   }

//   const handleUpdateQuestion = ()=>{

//   }

//   const addInterviewQuestion = ()=>{
//     if(currentQuestion === "") return
//     setInterviewQues([...interviewQuestions, currentQuestion])
//   }

//   const handleAddQuestion = ()=>{
//     addInterviewQuestion()
//     const currentQuestion = questionCount + 1
//     setQuestionCount(currentQuestion)
//     setAdditional([...additionalQuestions, currentQuestion])
//   }

//   const handleCoverLetter = (e)=>{
//     setCoverLetter(e)
//     if(e === 'no'){
//       setJobProfile({...jobProfile, requireCoverLetter: false})
//     }else{
//       setJobProfile({...jobProfile, requireCoverLetter: true})
//     }
//   }

//   const handleDocument = (e)=>{
//     setDocumentOption(e)
//     if(e === 'no'){
//       setJobProfile({...jobProfile, requiredocumentUpload: false})
//     }else{
//       setJobProfile({...jobProfile, requiredocumentUpload: true})
//     }
//     // console.log(jobProfile);
//   }

//   const handleAddSkills = (e)=>{
//     const currentTarget = e.target.value;
//     if (addSkills.includes(currentTarget)) return;
//     const newSkillList = [...addSkills, currentTarget];
//     setAddSkills(newSkillList);
//   }

//   const handleRemoveSkills = (e)=>{
//     const newSkillList = addSkills.filter(eachSkill => eachSkill !== e);
//     setAddSkills(newSkillList);
//   }

//   const handleAddTag = (e)=>{
//     const currentTag = e.target.value;
//     if (addTags.includes(currentTag)) return;
//     const newTagList = [...addTags, currentTag];
//     setAddTags(newTagList);
//   }

//   const handleRemoveTag = (e)=>{
//     const newTagList = addTags.filter(eachTag => eachTag !== e);
//     setAddTags(newTagList);
//   }

//   const updateInterviewQues = ()=>{
//     setJobProfile({...jobProfile, additionalInterviewQuestions: interviewQuestions})
//   }

//   const updateTag = ()=>{
//     setJobProfile({...jobProfile, jobTag: addTags})
//   }
//   const updateSkills = ()=>{
//     setJobProfile({...jobProfile, jobSkills: addSkills})
//     console.log(addSkills);
//   }


//   const handleSubmit = ()=>{
//     updateInterviewQues()
//     updateSkills()
//     updateTag()
//     console.log(jobProfile)
//   }

//   return (
//     <div className="">
//       <div className="sm:px-24 px-6">
//         <Header darkMode={true} />
//         <div className="">
//           <div className="w-1/3 mx-auto flex items-center justify-center my-10">
//             <span className="p-2 rounded-full text-slate-50 bg-orange-600">
//               1
//             </span>
//             <hr className="border-2 border-orange-500 w-1/3" />
//             <span className="p-2 rounded-full text-slate-50 bg-orange-600">
//               2
//             </span>
//             <hr className="border-2 border-gray-500 w-1/3" />
//             <span className="p-2 rounded-full text-slate-50 bg-gray-600">
//               3
//             </span>
//           </div>
//           <h3 className="my-2 font-semibold text-lg capitalize">
//             Please select your job type
//           </h3>
//           <span className="text-slate-600">
//             Please select what type of job you would like to post.{" "}
//           </span>
//           <div className="">
//             <div className="flex items-start justify-center flex-wrap my-4 gap-4">
//               <JobProfile
//                 logo={<BsStar className="text-blue-400" />}
//                 jobType="Basic Job"
//                 typeDescription="Effortlessly filter and select 
//                   relevant canditate from a pre
//                   sorted applicant pool"
//                 price="free"
//                 type={setJobType}
//                 mainType="free"
//                 currentType={jobType}
//                 profile={jobProfile}
//                 setProfile={setJobProfile}
//               />
//               <JobProfile
//                 logo={<BsStar className="text-yellow-400" />}
//                 jobType="Standard Job"
//                 typeDescription="Effortlessly filter and select 
//                   relevant canditate from a pre
//                   sorted applicant pool"
//                 price="N 50,000"
//                 type = {setJobType}
//                 mainType="basic"
//                 currentType={jobType}
//                 profile={jobProfile}
//                 setProfile={setJobProfile}
//               />
//               <JobProfile
//                 logo={<BsStar className="text-orange-400" />}
//                 jobType="Premium Job"
//                 typeDescription="Effortlessly filter and select 
//                   relevant canditate from a pre
//                   sorted applicant pool"
//                 price="N 100,000"
//                 type = {setJobType}
//                 mainType="premium"
//                 currentType={jobType}
//                 profile={jobProfile}
//                 setProfile={setJobProfile}
//               />
//               <JobProfile
//                 logo={<BsStar className="text-red-400 shadow-lg" />}
//                 jobType="Partner with ejob"
//                 typeDescription="Effortlessly filter and select 
//                   relevant canditate from a pre
//                   sorted applicant pool"
//                 price="free"
//                 type = {setJobType}
//                 mainType="partner"
//                 currentType={jobType}
//                 profile={jobProfile}
//                 setProfile={setJobProfile}
//               />
//             </div>
//           </div>
//           {/* ---------------- job description -------------------- */}
//           <div className="mt-24">
//             <h3 className="font-semibold text-sm  uppercase my-4">
//               Job Description and breakdown
//             </h3>
//             <p className="font-medium text-md my-4 text-slate-400">
//               Please fill the form below to vividly explain the job opening and
//               to attract the right candidate
//             </p>
//             <div className="border-2 w-full bg-orange-100 border-slate-300 p-4 rounded-lg">
//               <div className="w-full">
//                 <h2>Job Title</h2>
//                 <input
//                   className="w-full border-2 mt-2 p-0.5 rounded-sm "
//                   type="text"
//                   placeholder="seach by LGA"
//                   name="jobType"
//                   onChange={handleChange}
//                 />
//                 <span className="text-sm text-slate-400 mb-2">
//                   {titleCount}/100 character limit
//                 </span>
//               </div>
//                   {/* -------------Job Function------------ */}
//               <div className="my-4 flex items-center justify-center gap-4">
//                 <div className="w-full my-2">
//                   <label className="block my-2" htmlFor="">
//                     Job Function
//                   </label>
//                   <select className="p-1 border-2 border-slate-300 w-full" 
//                   onChange={handleChange}
//                   name="jobFunction"
//                   >
//                     <option selected={true}>Select</option>
//                     {jobFunctions.map(eachFunction=>{
//                       return(
//                         <option value={eachFunction}>{eachFunction}</option>
//                       )
//                     })}
                    
//                   </select>
//                 </div>
//                   {/* -------------Job Industry------------ */}
//                 <div className="w-full my-4">
//                   <label className="block my-2" htmlFor="">
//                     Industry
//                   </label>
//                   <select className="p-1 border-2 border-slate-300 w-full"
//                   onChange={handleChange}
//                   name="industry"
//                   >
//                     <option selected={true}>Select</option>
//                     {jobIndustries.map(eachIndustry=>{
//                       return(
//                         <option value={eachIndustry}>{eachIndustry}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//                   {/* -------------Job type------------ */}
//                 <div className="w-full my-4">
//                   <label className="block my-2" htmlFor="">
//                     Work type
//                   </label>
//                   <select className="p-1 border-2 border-slate-300 w-full"
//                   onChange={handleChange}
//                   name="workType"
//                   >
//                     <option selected={true}>Select</option>
//                     {workTypes.map(eachWork=>{
//                       return(
//                         <option value={eachWork}>{eachWork}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//               </div>
//                   {/* -------------Job Location------------ */}
//               <div className="my-4 flex items-center justify-center gap-4">
//                 <div className="w-full my-4">
//                   <label className="block my-2" htmlFor="">
//                     Location
//                   </label>
//                   <select className="p-1 border-2 border-slate-300 w-full" 
//                   onChange={handleChange}
//                   name="location"
//                   >
//                     <option selected={true}>Select</option>
//                     {nigeriaStates.map(eachType=>{
//                       return(
//                         <option value={eachType}>{eachType}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//                   {/* -------------Minimum qualification------------ */}
//                 <div className="w-full">
//                   <label className="block my-2" htmlFor="">
//                     Minimum Qualification
//                   </label>
//                   <select className="p-1 border-2 border-slate-300 w-full" 
//                   onChange={handleChange}
//                   name="minimumQualification"
//                   >
//                     <option selected={true}>Select</option>
//                     {minimumRequirements.map(eachRequirement=>{
//                       return(
//                         <option value={eachRequirement}>{eachRequirement}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//                     {/* -------------Experience level------------ */}
//                 <div className="w-full">
//                   <div >
//                     <label className="block my-2" htmlFor="">Experience Length</label>
//                     <select className="p-1 border-2 border-slate-300 w-full"
//                     onChange={handleChange}
//                     name="experienceLength"
//                     >
//                     <option selected={true}>Select</option>
//                     {experienceLengths.map(eachExperience=>{
//                       return(
//                         <option value={eachExperience}>{eachExperience}</option>
//                       )
//                     })}
//                   </select>
//                   </div>
//                 </div>
//               </div>
//               {/* ----------job level--------------- */}
//               <div className="my-4 flex items-center justify-center gap-4">
//                 <div className="w-full my-4">
//                   <label className="block my-2" htmlFor="">
//                     Job Level
//                   </label>
//                   <select className="p-1 border-2 border-slate-300 w-full"
//                   onChange={handleChange}
//                   name="jobLevel"
//                   >
//                     <option selected={true}>Select</option>
//                     {jobLevels.map(eachCategory=>{
//                       return(
//                         <option value={eachCategory}>{eachCategory}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//                     {/* ----------Select currency--------------- */}
//                 <div className="w-full">
//                   <label className="block my-2" htmlFor="">
//                     Select Currency
//                   </label>
//                   <select className="p-1 border-2 border-slate-300 w-full"
//                   onChange={handleChange}
//                   name="currency"
//                   >
//                     <option selected={true}>Select</option>
//                     {currencies.map(eachCurrency=>{
//                       return(
//                         <option value={eachCurrency}>{eachCurrency}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//                     {/* ----------Select salary--------------- */}
//                 <div className="w-full">
//                   <div >
//                     <label className="block my-2" htmlFor="">Monthly Salary</label>
//                     <input className="p-1 w-full border-2 border-slate-300" type="text" placeholder="Type figure here"
//                     onChange={handleChange}
//                     name="salary"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center justify-start gap-4">
//                 <div className="w-full my-4 flex sm:flex-row flex-col border-2 border-slate-300 items-start justify-center">
//                   <h4 className="sm:w-3/4 w-full text-sm sm:text-md">
//                     How many Days should this job be aired
//                   </h4>
//                   <input
//                     className="outline-none sm:w-1/4 w-full p-1 bg-slate-200"
//                     type="text"
//                     placeholder="0"
//                     onChange={handleChange}
//                     name="vacancyDuration"
//                   />
//                 </div>
//                 <div className="w-full my-4 flex sm:flex-row flex-col border-2 border-slate-300 items-start justify-center">
//                   <h4 className="sm:w-3/4 w-full text-sm sm:text-md">How many openings are available</h4>
//                   <input
//                     className="outline-none sm:w-1/4 w-full p-1 bg-slate-200"
//                     type="text"
//                     placeholder="0"
//                     onChange={handleChange}
//                     name="numberOfOpenings"
//                   />
//                 </div>
//               </div>
//               <button className="px-14 py-1 font-semibold bg-orange-500 text-slate-50 mx-auto text-center">
//                 Saved
//               </button>
//             </div>
//           </div>
//           {/* ----------- more description details ---------------- */}
//           <div className="mt-14">
//             <h3 className="font-semibold text-sm  uppercase my-4"> Job Description and breakdown</h3>
//             <p className="font-medium text-md my-4 text-slate-400">
//               Please fill the form below to vividly explain the job opening and
//               to attract the right candidate
//             </p>
//             <div className="border-2 border-slate-300 rounded-lg p-4">
//               <div className="">
//                 <h2 className="font-semibold text-sm  uppercase my-4">Job Summary</h2>
//                 <textarea className="w-full p-2 rounded-sm border-slate-300 border-2 h-56"
//                  placeholder=" the Summary helps you attract the right candidate only include the most important information to grab the attention of the job seekers. Keep it as short as possible"
//                  onChange={handleChange}
//                   name="jobSummary"
//                  ></textarea>
//                 <span className="text-sm text-slate-400 mb-2">0/100 character limit</span>
//               </div>
//               {/* ---------job description------------ */}
//               <div className="my-4">
//                 <div className="">
//                   <label className="block mb-1" htmlFor="">Job Description</label>
//                   <textarea
//                   className="w-full p-2 border-slate-300 border-2 rounded-sm h-52"
//                     name="jobDescription"
//                     id=""
//                     onChange={handleChange}
//                     placeholder=" the Summary helps you attract the right candidate only include the most important information to grab the attention of the job seekers. Keep it as short as possible...|"
//                   ></textarea>
//                 </div>
//                 {/* --------------add a question-------------- */}
//                 <div>
//                 <div className="my-2">
//                   <h2>Add at least one interview question</h2>
//                   <textarea onChange={handleChange} name="interviewQuestion" className="w-full p-2 border-slate-300 border-2 rounded-sm h-52" placeholder=" the Summary helps you attract the right candidate only include the most important information to grab the attention of the job seekers. Keep it as short as possible"></textarea>
//                   <span className="text-sm text-slate-400 mb-2">0/100 character limit</span>
//                 </div>
//                 <div className="border-2 border-gray-400 px-2 flex sm:flex-row flex-col sm:items-center items-start sm:justify-between justify-start w-full">
//                   <li>Set to prerequisite</li>
//                   <div className="flex gap-4 items-center">
//                     <span onClick={()=>{setFirstPrerequisite(true)}} className={`${firstPrequisite ? "bg-green-500 text-white" : "bg-slate-200"} px-4 py-1 rounded-sm cursor-pointer hover:bg-green-300 hover:text-white`}>Yes</span>
//                     <span onClick={()=>{setFirstPrerequisite(false)}} className={`${!firstPrequisite ? "bg-red-500 text-white" : "bg-slate-200"} px-4 py-1 rounded-sm cursor-pointer hover:bg-red-300 hover:text-white`}>No</span>
//                   </div>
//                 </div>
//                 </div>
//                 {/* -----------Additional interview questions------------- */}
//                 <div>
//                   {additionalQuestions.map(eachQuetion=>{
//                     return(
//                       <InterviewQuestion currentQues={currentQuestion} setQues={setCurrentQuestion} remove={removeQuestion} value={eachQuetion}/>
//                     )
//                   })}
//                 </div>
//                 <button onClick={handleAddQuestion} className="bg-slate-200 rounded-sm px-2 py-1 mt-4 mb-2 hover:bg-gray-600 hover:text-white">Add another question +</button>   
//                 {/* ------------Cover letter option----------- */}
                
//                 <div className="border-2 border-gray-400 px-2 flex sm:flex-row flex-col sm:items-center items-start sm:justify-between justify-between w-full my-4">
//                   <li>
//                     Would you like applicants to apply with cover letter?
//                   </li>
//                   <div className="flex items-center gap-2">
//                     <span onClick={()=>{handleCoverLetter('yes')}} className={`${coverLetterOption === 'yes' ? "bg-green-500 text-white" : "bg-slate-200"} px-4 py-1 rounded-sm cursor-pointer hover:bg-green-300 hover:text-white`}>Yes</span>
//                     <span onClick={()=>{handleCoverLetter('no')}} className={`${coverLetterOption === 'no' ? "bg-red-500 text-white" : "bg-slate-200"} px-4 py-1 rounded-sm cursor-pointer hover:bg-red-300 hover:text-white`}>No</span>
//                     <span onClick={()=>{handleCoverLetter('option')}} className={`${coverLetterOption === 'option' ? "bg-gray-800 text-white" : "bg-slate-200"} px-4 py-1 rounded-sm cursor-pointer hover:bg-gray-500 hover:text-white`}>Optional</span>
//                   </div>
//                 </div>
                
//                 {/* ------------Additional documents option----------- */}
//                 <div className="border-2 border-gray-400 px-2 flex sm:flex-row flex-col sm:items-center items-start sm:justify-between my-4 justify-between w-full">
//                   <li> Should applicant upload other documents?</li>
//                   <div className="flex items-center gap-2">
//                     <span onClick={()=>{handleDocument('yes')}} className={`${documentsOption === 'yes' ? "bg-green-500 text-white" : "bg-slate-200"} px-4 py-1 rounded-sm cursor-pointer hover:bg-green-300 hover:text-white`}>Yes</span>
//                     <span onClick={()=>{handleDocument('no')}} className={`${documentsOption === 'no' ? "bg-red-500 text-white" : "bg-slate-200"} px-4 py-1 rounded-sm cursor-pointer hover:bg-red-300 hover:text-white`}>No</span>
//                     <span onClick={()=>{handleDocument('option')}} className={`${documentsOption === 'option' ? "bg-gray-800 text-white" : "bg-slate-200"} px-4 py-1 rounded-sm cursor-pointer hover:bg-gray-500 hover:text-white`}>Optional</span>
//                   </div>
//                 </div>
//               </div>
//               {/* ----------Add skills------------ */}
//               <div className="my-4">
//                 <div className="flex items-start flex-col justify-start w-2/3 px-1 py-1 mb-2">
//                   <label htmlFor="">Add required skills</label>
//                   <select onChange={handleAddSkills} className="outline-none border-2 border-slate-300 mt-1 p-1 w-2/3">
//                     <option selected={true}>Select</option>
//                     {jobSkills.map(eachSkills=>{
//                       return(
//                         <option value={eachSkills}>{eachSkills}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//                 {/* --------------skills list-------------- */}
//                 <div className="py-4 w-full flex items-center gap-5 flex-wrap">
//                   {addSkills.map(eachSkills=>{
//                     return(
//                       <div className="relative w-fit">
//                         <MdCancel onClick={()=>{handleRemoveSkills(eachSkills)}} className="text-red-500 cursor-pointer hover:text-red-300 absolute top-0 right-0"/>
//                         <span className="px-4 py-1 rounded-full bg-gray-600 text-white">{eachSkills}</span>
//                       </div>
//                     )
//                   })}
//                 </div>
//                     {/* ----------Add skills------------ */}
//                 <div className="flex items-start flex-col justify-start w-2/3 px-1 py-1 mb-2">
//                   <label htmlFor="">Add tags</label>
//                   <select onChange={handleAddTag} className="outline-none border-2 border-slate-300 mt-1 p-1 w-2/3">
//                     <option selected={true}>Select</option>
//                     {jobTag.map(eachTag=>{
//                       return(
//                         <option value={eachTag}>{eachTag}</option>
//                       )
//                     })}
//                   </select>
//                 </div>
//                     {/* ----------Add tags------------ */}
//                     <div className="py-4 w-full flex items-center gap-5 flex-wrap">
//                     {addTags.map(eachTag=>{
//                     return(
//                       <div className="relative w-fit">
//                         <MdCancel onClick={()=>{handleRemoveTag(eachTag)}} className="text-red-500 cursor-pointer hover:text-red-300 absolute top-0 right-0"/>
//                         <span className="px-4 py-1 rounded-full bg-gray-600 text-white">{eachTag}</span>
//                       </div>
//                     )
//                   })}
//                     </div>
//               </div>
//             </div>
//             {/* -------Social media area------- */}
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold mb-2">Share to other platforms</h3>
//               <div className="flex justify-start items-start gap-3">
//                 <FaLinkedin className="w-6 h-6" style={{ color: "#0a66c2" }} />
//                 <BsTwitterX className="w-6 h-6" />
//                 <FaFacebook className="w-6 h-6" style={{ color: "#1877F2" }} />
//                 <BsWhatsapp className="w-6 h-6" style={{ color: "#075e54" }} />
//               </div>
//             </div>
//             <div className="w-full flex iems-center justify-center gap-4 my-4">
//               <button className="px-4 py-1 border-slate-300 border-2">Boost Job to starred</button>
//               <button onClick={handleSubmit} className="px-4 py-1 bg-orange-500 text-slate-50"> Send for approval</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FooterComponent/>
//     </div>
//   );
// }

// export default PostJob;