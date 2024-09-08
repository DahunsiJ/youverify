
import Logo from "../assets/Images/ejobs-logo.svg";
import Essential from "../assets/Images/companyName.svg";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Header from "../component/Header";
import FooterComponent from "../component/Footer";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BsEye } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentApplication } from "../redux/currentApplication/currentApplicationSlice";
import { toast } from "react-toastify";
import { addNotification } from "../redux/notification/notificationSlice";


function ApplicantionStatus() {
  const [currentApplicant, setCurrentApplicant] = useState(0);
  const { jobId } = useParams();
  const dispatch = useDispatch()
  const currentUserDetails = useSelector((state) => state.user.currentUser);
  const currentApplication = useSelector((state) => state.currentApplication.currentApplication);
  const currentUserId = currentUserDetails?._id || "";
  const [allowCheck, setAllowCheck] = useState(false)
  const [interviewData, setInterviewData] = useState({
    job: jobId,
    additionalInformation: 'N/A',
  });

  const [formData, setFormData] = useState({
    status: "Rejected"

  });

  const [notificationData, setNotificationData] = useState({
    sender: currentUserId,
    message: "Sorry"
  });

  const [jobDetails, setJobDetails] = useState({});
  const [applications, setApplications] = useState([]);
  const [appResponse, setAppResponse] = useState('Rejected');
  const [allApplicant, setAllApplicant] = useState([]);
  
  const fetchJobURL = `${process.env.REACT_APP_API_URL}job/getAJob`;
  const updateApplication = `${process.env.REACT_APP_API_URL}application/updateApplication`;
  const createNotificationUrl = `${process.env.REACT_APP_API_URL}notification/createNotification`;
  const createInterviewURL = `${process.env.REACT_APP_API_URL}interview/createInterview`;

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.post(fetchJobURL, { jobId: jobId }, {withCredentials: true});
        setJobDetails(response.data);
        setAllApplicant(response.data.numberOfApplicant)
        setApplications(response.data.applications)
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };
    fetchJobDetails();
  }, [jobId]);


  const handleSelect = (newIndex) => {
    setCurrentApplicant(newIndex)
    setInterviewData({...interviewData, application: currentApplication[currentApplicant]._id})
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setFormData({...formData, applicationId: applications[currentApplicant]._id}) 
    try {
      if (appResponse === "Scheduled") {
        setInterviewData({...interviewData, application: applications[currentApplicant]._id})
        await axios.post(createInterviewURL, interviewData, {withCredentials: true});
        toast.success("Profile interview set successfully");
      }
      await axios.put(updateApplication, formData, {withCredentials: true});
      const createNotification = await axios.post(createNotificationUrl, {...notificationData, recipient: allApplicant[currentApplicant]._id,application: applications[currentApplicant]._id}, {withCredentials: true});
      dispatch(addNotification(createNotification.data))
      toast.success("Updated Successfully");
    } catch (error) {
      toast.error('Error updating pls try again')
      console.error("Error updating application:", error);
    }
  };

  const handleResponse = (value) => {
    if (value === 'Rejected') {
      setNotificationData((prevNotify) => ({ ...prevNotify, message: "Sorry",recipient: allApplicant[currentApplicant]._id,application: applications[currentApplicant]._id }))
    } else {
      setNotificationData((prevNotify) => ({ ...prevNotify, message: "Congratulations", recipient: allApplicant[currentApplicant]._id,application: applications[currentApplicant]._id }))
      setFormData((prevData) => ({ ...prevData, reasonForRejection: null }))
    }
    setFormData((prevData) => ({ ...prevData, status: value }))
    setAppResponse(value)
  }

  const handleReason = (e) => {
    const value = e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleInterviewData = (key, value) => {
    setInterviewData({ ...interviewData, [key]: value })
  }

  return (
    <div className="container mx-auto p-4 text-sm">
      <Header darkMode={true} />
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-3/5 p-4 border rounded-lg bg-white shadow-lg">
          
          {/* ------------Logo area---------------- */}
          <div className="flex justify-between items-center mb-4">
            <img className="w-40" src={Essential} alt="company logo" />
            <img className="w-24" src={Logo} alt="company logo" />
          </div>
          
          <h1 className="text-2xl font-semibold mb-2">{jobDetails.jobTitle}</h1>
          <p className="text-gray-600">{jobDetails.employerName}</p>
          <p className="text-gray-600 mb-4">Lagos</p>
          
          {/* ------------Job details section----------------- */}
          <div className="mb-4">
            <h3 className="font-medium">Job Details</h3>
            <div className="mt-2">
              <span className="px-2 py-1 bg-gray-200 rounded-2xl mr-2">{jobDetails.jobType}</span>
              <span className="px-2 py-1 bg-gray-200 rounded-2xl">{jobDetails.salary}</span>
            </div>
            <div className="pt-4">
              <p>{jobDetails.jobSummary}</p>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <ul className="list-disc pl-4">
                {jobDetails?.jobDescription && jobDetails.jobDescription.map((eachDescription, index) => (
                  <li key={index}>{eachDescription}</li>
                ))}
              </ul>
            </div>


            {/* ---------------------cover letter section-------------- */}
            <div className="my-6">
              <h3 className="text-xl font-semibold mb-2">Why should we hire you</h3>
              <div className="border p-3 rounded-lg bg-gray-50">
                <span className="block text-gray-500 mb-2">Cover Letter</span>
                <p>{applications[currentApplicant]?.coverLetter || ""}</p>
              </div>
            </div>

            {/* ------------Quetionaire section------------- */}
            <div className="flex flex-col space-y-4 w-full">
              {jobDetails?.additionalInterviewQuestion && applications[currentApplicant].additionalQuestionResponse.map((eachResponse, index) => (
                <div className="w-full" key={index}>
                  <h3 className="capitalize mb-2">{eachResponse.question}</h3>
                  <span className="block p-2 border bg-gray-200 rounded-lg">{eachResponse.response}</span>
                </div>
              ))}
            </div>

            {/* -----------------Resume view section------------------- */}
            <div className="my-4">
              <h2 className="text-lg font-semibold mb-2">Resume/CV</h2>
              <button className="flex items-center p-2 rounded bg-gray-400 text-white w-full justify-between">
                {currentApplication[currentApplicant]?.resume || ""}
                <BsEye />
              </button>
            </div>

            {/* ----------Application action ----------- */}
            <div className="flex justify-between">
              <button
                onClick={() => { handleResponse('Rejected'); }}
                className={`w-1/2 px-4 py-2 border rounded-l-lg ${appResponse === 'Rejected' ? "bg-orange-500 text-white border-orange-400" : "bg-white text-gray-500 border-gray-300"}`}
              >
                Reject
              </button>
              <button
                onClick={() => { handleResponse('Scheduled'); }}
                className={`w-1/2 px-4 py-2 border rounded-r-lg ${appResponse === 'Scheduled' ? "bg-orange-500 text-white border-orange-400" : "bg-white text-gray-500 border-gray-300"}`}
              >
                Set for interview
              </button>
            </div>
            {appResponse === 'Rejected' && (
              <div className="my-4">
                <form action="">
                <label className="block mb-2 text-sm text-gray-500">Reason for rejection</label>
                <textarea
                  name="reasonForRejection"
                  value={formData.reasonForRejection}
                  onChange={handleReason}
                  className="w-full p-2 border rounded-lg"
                  />
                  <button onClick={handleSubmit} className="px-6 py-2 bg-orange-500 text-white rounded-lg">Submit</button>
                  </form>
              </div>
            )}
            {appResponse === 'Scheduled' && <div className="p-4 border rounded-lg bg-white shadow-lg mt-6">
              <h2 className="text-lg font-semibold mb-4">Schedule an Interview</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm text-gray-500">Interview Type</label>
                    <select
                      value={interviewData.typeOfInterview}
                      onChange={(e) => handleInterviewData('typeOfInterview', e.target.value)}
                      className="border rounded-lg p-2"
                    >
                      <option value="">Select Interview Type</option>
                      <option value="Physical">Physical</option>
                      <option value="Virtual">Virtual</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm text-gray-500">Location</label>
                    <input
                      type="text"
                      value={interviewData.interviewLocation}
                      onChange={(e) => handleInterviewData('interviewLocation', e.target.value)}
                      className="border rounded-lg p-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm text-gray-500">Date</label>
                    <input
                      type="date"
                      value={interviewData.interviewDate}
                      onChange={(e) => handleInterviewData('interviewDate', e.target.value)}
                      className="border rounded-lg p-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm text-gray-500">Time</label>
                    <input
                      type="time"
                      value={interviewData.interviewTime}
                      onChange={(e) => handleInterviewData('interviewTime', e.target.value)}
                      className="border rounded-lg p-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-sm text-gray-500">Additional Information</label>
                    <input
                      type="text"
                      value={interviewData.additionalInformation}
                      onChange={(e) => handleInterviewData('additionalInformation', e.target.value)}
                      className="border rounded-lg p-2"
                    />
                  </div>
                  <div className="flex justify-end mt-4">
                    <button type="submit" className="px-6 py-2 bg-orange-500 text-white rounded-lg">Submit</button>
                  </div>
                </div>
              </form>
            </div>}
          </div>
        </div>
        <div className={`md:w-2/5 p-4 border $ rounded-lg bg-white shadow-lg`}>
        <h1 className="mb-4 font-semibold text-lg">Applicants</h1>
          {allApplicant.map((eachApplicant, index)=>{
            return(
              <div onClick={()=>{handleSelect(index)}} className={`flex mb-2 hover:bg-gray-100 hover:font-semibold ${currentApplicant === index ? 'bg-orange-100' : 'bg-white'} cursor-pointer items-center justify-between p-2`}>
                <h2>{`${eachApplicant.firstName} ${eachApplicant.lastName}`}</h2>
                <h3>{jobDetails.jobTitle}</h3>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {currentApplicant > 0 && (
          <button
            onClick={() => handleSelect(currentApplicant - 1)}
            className="p-2 border rounded-l-lg bg-white text-gray-500 border-gray-300"
          >
            <FaLessThan />
          </button>
        )}
        <button
          onClick={() => handleSelect(currentApplicant + 1)}
          className="p-2 border rounded-r-lg bg-white text-gray-500 border-gray-300"
        >
          <FaGreaterThan />
        </button>
      </div>
      <FooterComponent />
    </div>
  );
}

export default ApplicantionStatus;
