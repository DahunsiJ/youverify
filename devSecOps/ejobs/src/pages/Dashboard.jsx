//  ----version 2---------
import React, { useEffect, useState } from 'react';
import { BiSearch, BiExit, BiMenu } from 'react-icons/bi';
import { GrPieChart, GrGroup } from 'react-icons/gr';
import { CgProfile, CgScreen } from 'react-icons/cg';
import { MdReport, MdWork } from 'react-icons/md';
import Header from '../component/Header';
import { BsEnvelopeAtFill, BsMenuUp, BsPeople } from 'react-icons/bs';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import DashboardSummary from '../component/DashboardComponents/DashboardSummary';
import Profile from '../component/DashboardComponents/Profile';
import JobSeeker from '../component/DashboardComponents/jobSeeker';
import JobEmployer from '../component/DashboardComponents/JobEmployer';
import JobsInfo from '../component/DashboardComponents/Jobs';
import BenefitReguests from '../component/DashboardComponents/BenefitReguests';
import SalaryPayment from '../component/DashboardComponents/SalaryPayment';
import Report from '../component/DashboardComponents/Report';
import InterviewsReport from '../component/DashboardComponents/Interview';
import OtherCandiddates from '../component/DashboardComponents/OtherCandiddates';
import { setCandidateList } from '../redux/candidateList/candidateListSlice';

const getAllJobURL = `${process.env.REACT_APP_API_URL}job/allJob`;
const getAllNotificationURL = `${process.env.REACT_APP_API_URL}notification/getAllNotification`;
const getAllApplications = `${process.env.REACT_APP_API_URL}application/allApplication`;
const getAllEmployer = `${process.env.REACT_APP_API_URL}jobrecruiter/allJobEmployer`;
const getAllJobSeeker = `${process.env.REACT_APP_API_URL}jobSeeker/allJobSeeker`;
const getAllInterview = `${process.env.REACT_APP_API_URL}interview/getAllInterview`;
const getJobSeekerReport = `${process.env.REACT_APP_API_URL}employeeReport/getAllEmployeeReport`;
const getEmployerReport = `${process.env.REACT_APP_API_URL}employerReport/getAllEmployerReport`;
const getAllCandidates = `${process.env.REACT_APP_API_URL}otherCandidate/getAllCandidate`;


const Dashboard = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [allNotification, setAllNotification] = useState([]);
  const [allApplication, setAllApplication] = useState([]);
  const [allEmployers, setAllEmployers] = useState([]);
  const [allJobSeeker, setAllJobSeeker] = useState([]);
  const [selection, setSelection] = useState('home');
  const [interviewData, setInterviewData] = useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);
  const candidateList = useSelector((state) => state.candidateList.candidateList);
  const [jobSeekerReport, setJobSeekerReport] = useState([]);
  const [jobEmployerReport, setJobEmployerReport] = useState([]);
  const [allCandidates, setAllCandidates] = useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const appData = await Promise.all(
        [
          getAllJobURL,
          getAllNotificationURL,
          getAllApplications,
          getAllEmployer,
          getAllJobSeeker,
          getAllInterview,
          getJobSeekerReport,
          getEmployerReport,
          getAllCandidates
        ].map(async (eachURL) => {
          const data = await axios.get(eachURL, {
            withCredentials: true,
          });
          return data.data;
        })
      );
      setAllJobs(appData[0]);
      setAllNotification(appData[1]);
      setAllApplication(appData[2]);
      setAllEmployers(appData[3]);
      setAllJobSeeker(appData[4]);
      setInterviewData(appData[5]);
      setJobSeekerReport(appData[6]);
      setJobEmployerReport(appData[7]);
    };
    getData();
  }, []);


  useEffect(()=>{
    const fetchAllCandidate = ()=>{
      axios.get(getAllCandidates, {
        withCredentials: true,
      }).then((response) => {
        dispatch(setCandidateList(response.data));
        console.log('result',response.data);
        setAllCandidates();
      }).catch((error) => {
        console.log(error);
      });
    }

    fetchAllCandidate();
  }, [])


  const renderView = () => {
    switch (selection) {
      case 'profile':
        return <Profile data={currentUser} />;
      case 'jobSeeker':
        return <JobSeeker data={allJobSeeker} />;
      case 'jobEmployer':
        return <JobEmployer data={allEmployers} />;
      case 'jobs':
        return <JobsInfo data={allJobs} />;
      case 'benefits':
        return <BenefitReguests data={[1, 2]} />;
      case 'salary':
        return <SalaryPayment />;
      case 'otherCandidates':
        return <OtherCandiddates data={candidateList}/>;
      case 'reports':
        return (
          <Report
            seekerReport={jobSeekerReport}
            employerReport={jobEmployerReport}
          />
        );
      case 'interviews':
        return <InterviewsReport data={interviewData} />;
      default:
        return (
          <DashboardSummary
            allApplication={allApplication}
            allEmployers={allEmployers}
            allJobSeeker={allJobSeeker}
            allJobs={allJobs}
            allNotification={allNotification}
          />
        );
    }
  };

  return (
    <div className='w-screen h-screen sm:overflow-hidden overflow-scroll bg-gray-900 text-white'>
      <div className='mx-4 md:mx-24'>
        <Header lightMode={true} />
        <div className='w-full py-4'>
          <div className='flex items-center relative py-1 px-2 justify-start border-2 border-gray-700 bg-gray-800 rounded-md w-full md:w-1/2 mx-auto shadow-sm'>
            <BiSearch className='text-gray-400' />
            <input
              className='w-full bg-transparent px-2 text-gray-200 outline-none'
              type='text'
              placeholder='Search...'
            />
          </div>
        </div>

        <div className='w-full border-t-2 border-gray-700 h-auto mt-5 flex flex-col md:flex-row items-start justify-center bg-gray-800 shadow-lg rounded-lg'>
          <div className='w-full md:w-1/4 h-auto md:h-[480px] overflow-y-scroll border-r-2 border-gray-700 p-4 bg-gray-900'>
            <div
              onClick={() => setSelection('home')}
              className={`cursor-pointer ${selection === 'home' ? 'bg-gray-600' : ''
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <GrPieChart className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Dashboard</span>
            </div>
            <div
              onClick={() => setSelection('profile')}
              className={`cursor-pointer ${selection === 'profile' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <CgProfile className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Profile</span>
            </div>
            <div
              onClick={() => setSelection('jobSeeker')}
              className={`cursor-pointer ${selection === 'jobSeeker' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <GrGroup className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Job Seekers</span>
            </div>
            <div
              onClick={() => setSelection('jobEmployer')}
              className={`cursor-pointer ${selection === 'jobEmployer' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <GrGroup className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Job Employers</span>
            </div>
            <div
              onClick={() => setSelection('jobs')}
              className={`cursor-pointer ${selection === 'jobs' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <MdWork className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Jobs</span>
            </div>
            <div
              onClick={() => setSelection('benefits')}
              className={`cursor-pointer ${selection === 'benefits' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <BsEnvelopeAtFill className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Benefit Request</span>
            </div>
            <div
              onClick={() => setSelection('salary')}
              className={`cursor-pointer ${selection === 'salary' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <FaMoneyBillTransfer className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Salary Payments</span>
            </div>
            <div
              onClick={() => setSelection('reports')}
              className={`cursor-pointer ${selection === 'reports' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <MdReport className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Reports</span>
            </div>
            <div
              onClick={() => setSelection('interviews')}
              className={`cursor-pointer ${selection === 'interviews' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <CgScreen className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Interviews</span>
            </div>
            <div
              onClick={() => setSelection('otherCandidates')}
              className={`cursor-pointer ${selection === 'otherCandidates' && 'bg-gray-600'
                } flex items-center mb-4 p-2 hover:bg-gray-700 rounded`}
            >
              <BsPeople className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Add others</span>
            </div>
            <Link
              to='/signin'
              className='cursor-pointer flex items-center mb-4 p-2 hover:bg-gray-700 rounded'
            >
              <BiExit className='mr-2 text-gray-400' />
              <span className='text-gray-200'>Sign out</span>
            </Link>
          </div>

          <div className='w-full md:w-3/4 h-auto md:h-[480px] overflow-scroll bg-gray-900 p-6'>
            {renderView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
