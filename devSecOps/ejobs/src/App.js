import './App.css';
import Homepage from './pages/Homepage';
import SigninPages from './pages/Signin'
import SignupPages from './pages/SignUp'
import ProfilePage from './pages/ProfilePages'
import SearchByLocation from './pages/SearchByLocation'
import ApplyJob from './pages/ApplyJob'
import SingleJob from './pages/SingleJob'
import JobPage from './pages/JobPage'
import EmployeePage from './pages/EmployeePage'
import InterviewPeer from './pages/InterviewPeer'
import PostJob from './pages/PostJob'
import EmployeeData from './pages/EmployeeData'
import Eja from './pages/Eja'
import EjaDetails from './pages/EjaDetails'
import JobFromEja from './pages/JobFromEja'
import ApplicantList from './pages/ApplicantList'
import TemplateCV from './pages/TemplateCV'
import Notification from './pages/Notification'
import Quickjob from './pages/Quickjob'
import ApplyForAllowance from './pages/ApplyForAllowance'
import GuarantorForm from './pages/GuarantorForm'
import Blog from './pages/Blog'
import Benefit from './pages/Benefit';
import Blacklist from './pages/Blacklist'
import AboutUs from './pages/AboutUs'
import Privacy from './pages/PrivacyPage'
import TermAndConditions from './pages/TermAndConditions'
import Offer from './pages/Offer';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ApplicantResponse from './pages/ApplicantResponse';
import ApplicantionStatus from './pages/ApplicationStatus';
import EmployeeProfile from './pages/EmployeeProfile';
import Dashboard from './pages/Dashboard';
import MakeOffer from './pages/MakeOffer';
import SearchByCategory from './pages/SearchByCategory';
import ChatTwo from './pages/ChatTwo';
import VerifyToken from './pages/VerifyToken';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewPassword from './pages/NewPassword';



function App() {

  const [lastActivity, setLastActivity] = useState(Date.now());

  useEffect(()=>{
    
    const interval = setInterval(()=>{
      const inactiveTime = Date.now() - lastActivity;
      if(inactiveTime > 30 * 60 * 1000){
        axios.post('http://13.92.179.121:3002/api/v1/auth/signout', {withCredentials: true})
       .then(res => {
        window.location.href = '/signin';
       })
       .catch(err => {
          console.log(err);
        })
      }
    }, 60 * 1000)

    const handleUserActivity = ()=>{
      setLastActivity(Date.now());
    }

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      clearInterval(interval);
    }
}, [lastActivity])



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "/profile/:id",
      element: <ProfilePage/>
    },
    {
      path: "/employer/:id",
      element: <EmployeePage/>
    },
    {
      path: "/jobs",
      element: <JobPage/>
    },
    {
      path: "/job/:jobId",
      element: <SingleJob/>
    },
    {
      path: "/:applicationId/applicationStatus",
      element: <ApplicantResponse/>
    },
    {
      path: "/:applicantId/applicantProfile/:jobId",
      element: <EmployeeProfile/>
    },
    {
      path: "/job/apply/:jobId",
      element: <ApplyJob/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path: "/aboutUs",
      element: <AboutUs/>
    },
    {
      path: "/verifyToken",
      element: <VerifyToken/>
    },
    {
      path: "/interview/start/:interviewId",
      element: <InterviewPeer/>
    },
    {
      path: "/makeOffer/:employer/:candidate/:application/:index",
      element: <MakeOffer/>
    },
    {
      path: "/Offer/:offerId/:applicationId",
      element: <Offer/>
    },
    {
      path: "/:userId/quickJob",
      element: <Quickjob/>
    },
    {
      path: "/chat",
      element: <ChatTwo/>
    },
    {
      path: "/searchByLocation/:locationId",
      element: <SearchByLocation/>
  },
    {
      path: "/searchByCategory/:categoryName",
      element: <SearchByCategory/>
    },
    {
      path: "/:userId/postJob",
      element: <PostJob/>
    },
    {
      path: "/:jobId/employeeData/:employeeId",
      element: <EmployeeData/>
    },
    {
      path: "/eJA",
      element: <Eja/>
    },
    {
      path: "/:userID/applyforAllowance",
      element: <ApplyForAllowance/>
    },
    {
      path: "/:userID/guarantorForm",
      element: <GuarantorForm/>
    },
    {
      path: "/blacklist",
      element: <Blacklist/>
    },
    {
      path: "/blog",
      element: <Blog/>
    },
    {
      path: "/benefit",
      element: <Benefit/>
    },
    {
      path: "/:employerId/eJAmain",
      element: <EjaDetails/>
    },
    {
      path: "/jobFromEja/:userId",
      element: <JobFromEja/>
    },
    {
      path:"/:userId/notification",
      element: <Notification/>
    },
    {
      path:"/privacy",
      element: <Privacy/>
    },
    {
      path:"/terms",
      element: <TermAndConditions/>
    },
    {
      path:"/:jobId/jobApplicants",
      element: <ApplicantList/>
    },
    {
      path:"/:jobId/applicantResponse",
      element: <ApplicantionStatus/>
    },
    {
      path:"/:userId/createCV",
      element: <TemplateCV/>
    },
    {
      path: "/signin",
      element: <SigninPages/>
    },
    {
      path: "/signup",
      element: <SignupPages/>
    },
    {
      path: "/newPassword/:token/:userId",
      element: <NewPassword/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;