import { Link, useParams } from "react-router-dom";
import { appData } from "../assets/data.js";
import Header from "../component/Header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentApplication } from "../redux/currentApplication/currentApplicationSlice.js";
import GeneralTable from "../component/Tables/GeneralTable.jsx";
import ScheduleTable from "../component/Tables/ScheduleTable.jsx";
import { BiMessageAltAdd } from "react-icons/bi";
import InterviewTable from "../component/Tables/InterviewedTable.jsx";
import HiredTable from "../component/Tables/HiredTable.jsx";
import OfferTable from "../component/Tables/OfferTable.jsx";

function ApplicantList() {
  const { jobId } = useParams();
  const [allApplicant, setAllApplicant] = useState([]);
  const [interviewedApplicant, setInterviewedApplicant] = useState([]);
  const [rejectedApplicant, setRejectedApplicant] = useState([]);
  const [hiredApplicant, setHiredApplicant] = useState([]);
  const [shortlistedApplicant, setShortlistedApplicant] = useState([]);
  const [scheduledApplicant, setScheduledApplicant] = useState([]);
  const [offerApplicant, setOfferApplicant] = useState([])
  const [currentList, setCurrentList] = useState([]);
  const [activeSelection, setActiveSelection] = useState("Applied");
  const [table, setTable] = useState("General");
  const currentUser = useSelector((state) => state.user);
  const [position, setPosition] = useState("");
  const [interviews, setInterviews] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getApplicationByJobId = `${process.env.REACT_APP_API_URL}application/getApplicationByJobId`
  const getInterviewByJobId = `${process.env.REACT_APP_API_URL}interview/getInterviewByJobId`
  // const updateApplication = "http://localhost:3003/api/v1/application/updateApplication"


  useEffect(() => {
    const getApplicantList = async () => {
      try {
        const applicantList = await axios.post(getApplicationByJobId, { jobId }, {
          withCredentials: true
        });
        setAllApplicant(applicantList.data);
        setCurrentList(applicantList.data)
        setPosition(applicantList.data[0]?.position || "");
        setInterviewedApplicant(applicantList.data.filter(eachApplicant => eachApplicant.status === "Interviewed"));
        setRejectedApplicant(applicantList.data.filter(eachApplicant => eachApplicant.status === "Rejected"));
        setHiredApplicant(applicantList.data.filter(eachApplicant => eachApplicant.status === "Hired"));
        setShortlistedApplicant(applicantList.data.filter(eachApplicant => eachApplicant.status === "Shortlisted"));
        setScheduledApplicant(applicantList.data.filter(eachApplicant => eachApplicant.status === "Scheduled"));
        setOfferApplicant(applicantList.data.filter(eachApplicant => eachApplicant.status === "Offer"));
      } catch (error) {
        console.log({ err: error });
      }
    };
    getApplicantList();
  }, [jobId]);

  useEffect(() => {
    const getInterviewDetails = async () => {
      try {
        const interviewDetails = await axios.post(getInterviewByJobId, { jobId }, {withCredentials: true});
        setInterviews(interviewDetails.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInterviewDetails();
  }, [jobId]);

  const handleFilter = (newArray, table) => {
    setTable(table)
    const selectedElement = table.split(' ')[1]
    if(selectedElement === 'Applied'){
      setCurrentList(allApplicant)
    }else if(selectedElement === 'Rejected'){
      setCurrentList(rejectedApplicant)
    }else if(selectedElement === 'Shortlisted'){
      setCurrentList(shortlistedApplicant)
    }else if(selectedElement === 'Scheduled'){
      setCurrentList(scheduledApplicant)
    }else if(selectedElement === 'Hired'){
      setCurrentList(hiredApplicant)
    }else if(selectedElement === 'Offer'){
      setCurrentList(offerApplicant)
    }else if(selectedElement === 'Interviewed'){
      setCurrentList(interviewedApplicant)
    }
    setActiveSelection(selectedElement)
  };


  const handleNavigation = async () => {
    try {
      const response = await axios.post(getApplicationByJobId, { jobId }, {
        withCredentials: true
      });
      dispatch(setCurrentApplication(response.data));
      navigate(`/${jobId}/applicantResponse`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInterview = (e) => {
    const interviewLength = scheduledApplicant[0].interviews.length
    const interviewId = scheduledApplicant[0].interviews[interviewLength - 1]._id
    if (e.target.innerHTML === "Start") {
      navigate(`/interview/start/${interviewId}`);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-orange-50">
      {allApplicant.length ? (
        <div className="w-full text-sm">
          <div className="sm:px-24 px-4">
            <Header darkMode={true} />
            <div className="bg-white py-6 rounded-lg">
              <div className="mx-auto border-b-2 border-orange-500">
                <ul className="flex flex-wrap sm:text-sm text-xs items-center justify-center gap-6 my-6">
                  <li
                    onClick={() => handleFilter(allApplicant, "General Applied")}
                    className={`${activeSelection === "Applied" && "bg-orange-400 text-white"} flex gap-2 cursor-pointer hover:bg-orange-400 py-1 rounded-sm hover:text-orange-50 px-2`}
                  >
                    <span>{allApplicant.length}</span>
                    <span>Applied</span>
                  </li>
                  <li
                    onClick={() => handleFilter(rejectedApplicant, "General Rejected")}
                    className={`${activeSelection === "Rejected" && "bg-orange-400 text-white"} flex gap-2 cursor-pointer hover:bg-orange-400 py-1 rounded-sm hover:text-orange-50 px-2`}
                  >
                    <span>{rejectedApplicant.length}</span>
                    <span>Rejected</span>
                  </li>
                  <li
                    onClick={() => handleFilter(shortlistedApplicant, "General Shortlisted")}
                    className={`${activeSelection === "Shortlisted" && "bg-orange-400 text-white"} flex gap-2 cursor-pointer hover:bg-orange-400 py-1 rounded-sm hover:text-orange-50 px-2`}
                  >
                    <span>{shortlistedApplicant.length}</span>
                    <span>Shortlisted</span>
                  </li>
                  <li
                    onClick={() => handleFilter(scheduledApplicant, "Scheduled Scheduled")}
                    className={`${activeSelection === "Scheduled" && "bg-orange-400 text-white"} flex gap-2 cursor-pointer hover:bg-orange-400 py-1 rounded-sm hover:text-orange-50 px-2`}
                  >
                    <span>{scheduledApplicant.length}</span>
                    <span>Scheduled For Interview</span>
                  </li>
                  <li
                    onClick={() => handleFilter(interviewedApplicant, "General Interviewed")}
                    className={`${activeSelection === "Interviewed" && "bg-orange-400 text-white"} flex gap-2 cursor-pointer hover:bg-orange-400 py-1 rounded-sm hover:text-orange-50 px-2`}
                  >
                    <span>{interviewedApplicant.length}</span>
                    <span>Interviewed</span>
                  </li>
                  <li
                    onClick={() => handleFilter(offerApplicant, "General Offer")}
                    className={`${activeSelection === "Offer" && "bg-orange-400 text-white"} flex gap-2 cursor-pointer hover:bg-orange-400 py-1 rounded-sm hover:text-orange-50 px-2`}
                  >
                    <span>{offerApplicant.length}</span>
                    <span>Offer</span>
                  </li>
                  <li
                    onClick={() => handleFilter(hiredApplicant, "General Hired")}
                    className={`${activeSelection === "Hired" && "bg-orange-400 text-white"} flex gap-2 cursor-pointer hover:bg-orange-400 py-1 rounded-sm hover:text-orange-50 px-2`}
                  >
                    <span>{hiredApplicant.length}</span>
                    <span>Hired</span>
                  </li>
                </ul>
              </div>
              <button className="bg-orange-200 text-orange-500 px-4 p-4 rounded-full absolute bottom-32 right-32">
                <BiMessageAltAdd />
              </button>


              {/* --------------------Table begin here-------------------- */}
              <div className="overflow-x-scroll">
              {
                activeSelection === "Scheduled" ? <ScheduleTable data={scheduledApplicant} title="Interviews" handleInterview={handleInterview} /> : 
                activeSelection === "Interviewed" ? <InterviewTable data={interviewedApplicant}/> :
                activeSelection === "Hired" ? <HiredTable currentList={hiredApplicant} data={allApplicant}/> :
                activeSelection === 'Offer' ? <OfferTable currentList={offerApplicant} /> :
                 <GeneralTable currentList={currentList} handleNavigation={handleNavigation} data={allApplicant} />
                }
              </div>

              <Link to={`/employer/${currentUser.currentUser._id}`} className="absolute sm:right-24 right-8 bg-orange-500 text-white px-6 py-2 sm:bottom-5 bottom-8">Back</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-orange-800 mb-4">Nothing to show yet</h1>
          <Link className="hover:underline bg-orange-400 text-white px-4 py-2 rounded-md" to={`/employer/${currentUser}`}>
            Back
          </Link>
        </div>
      )}
    </div>
  );
}

export default ApplicantList;
