import React, { useEffect, useState } from 'react'
import CvGuarantor from '../component/CvGuarantor';
import CvCertificate from '../component/CvCertificate';
import CvWorkExperience from '../component/CvWorkExperience';
import CvEducation from '../component/CvEducation';
import CvInfo from '../component/CvInfo';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Profile from '../assets/Images/profile2.jpg'
import LoadSpinner from '../component/Modals/LoadSpinner';



function EmployeeProfile({ education, experience, certificate, guarantor }) {
  const applicantId = useParams().applicantId
  const jobId = useParams().jobId
  const getApplicantURL = `${process.env.REACT_APP_API_URL}jobSeeker/getAjobSeeker`
  const [ApplicantData, setApplicantData] = useState({})
  const [educationList, setEducationList] = useState([])
  const [experienceList, setExperienceList] = useState([])
  const [certificateList, setCertificateList] = useState([])
  const [guarantorList, setGuarantorList] = useState([])
  const getEducation = `${process.env.REACT_APP_API_URL}education/getUserEducation`;
  const getExperience = `${process.env.REACT_APP_API_URL}experience/getUserWork`;
  const getCertificate = `${process.env.REACT_APP_API_URL}certificate/getUserCertificate`;
  const getGuarantor = `${process.env.REACT_APP_API_URL}guarantor/getUserGuarantor`;

  useEffect(()=>{
    const getApplicantDetails = async()=>{
      try{
        const applicantDetails = await axios.post(getApplicantURL, {jobSeekerId: applicantId})
        setApplicantData(applicantDetails.data)
      }catch(error){
      }
    }
    getApplicantDetails()
  },[applicantId])


  // ---- Fetch user applicant education
  useEffect(() => {
    const userEducation = ApplicantData.education;  
    if(!userEducation) return
    const getUserWork = async () => {
      const eachEducation = await Promise.all(
        userEducation.map(async (singleEducation) => {
          const educationInfo = await axios.post(getEducation, {
            educationId: singleEducation,
          });
          return educationInfo.data;
        })
      );
      eachEducation && setEducationList(eachEducation);
    };
  
    getUserWork();
  }, [ApplicantData.education]);

  // ---- Fetch user applicant Work experience
  useEffect(() => {
    const userWork = ApplicantData.workExperience;  
    if(!userWork) return

    const getUserWork = async () => {
      const eachWork = await Promise.all(
        userWork.map(async (singleWork) => {
          const workInfo = await axios.post(getExperience, {
            workId: singleWork,
          });
          return workInfo.data;
        })
      );
      eachWork && setExperienceList(eachWork);
    };
    getUserWork();
  }, []);

  // ---- Fetch user applicant Certificate
  useEffect(() => {
    const userCertificate = ApplicantData.certificates;  
    if(!userCertificate) return

    const getUserCertificate = async () => {
      const eachCertificate = await Promise.all(
        userCertificate.map(async (singleCertificate) => {
          const certificateInfo = await axios.post(getCertificate, {
            certificateId: singleCertificate,
          });
          return certificateInfo.data;
        })
      );
      eachCertificate && setCertificateList(eachCertificate);
    };
  
    getUserCertificate();
  }, []);

  // ---- Fetch user applicant Guarantor
  useEffect(() => {
    const userGuarantor = ApplicantData.guarantors;  
    if(!userGuarantor) return

    const getUserGuarantor = async () => {
      const eachGuarantor = await Promise.all(
        userGuarantor.map(async (singleGuarantor) => {
          const guarantorInfo = await axios.post(getGuarantor, {
            guarantorId: singleGuarantor,
          });
          return guarantorInfo.data;
        })
      );
      setGuarantorList(eachGuarantor);
    };
    getUserGuarantor();
  }, []);

  return (
    <div className="bg-gray-600 text-sm text-white p-8 w-5/6">
      <div>
        <div className="flex items-center justify-center">
            <img className='w-40 h-40 rounded-full object-cover' src={Profile} alt='applicant profile'/>
        </div>
      </div>
      {/* -----------Personal info section----------- */}
      <div className="py-2 pl-6 pr-2 w-full bg-gray-800 text-white mt-8 rounded-tl-3xl">
        <div className="">
          <h3 className="text-xl text-white">Education Background</h3>
          {educationList.length ? educationList.map((eachEducation) => {
            return (
              <CvEducation
                school={eachEducation.school}
                course={eachEducation.course}
                year={`${eachEducation.startYear} ${eachEducation.finishYear}`}
              />
            );
          }) : <LoadSpinner/>}
        </div>
        <div className="mt-8">
          <h3 className="text-slate-700 mb-4 text-xl">Work Experience</h3>
          {experienceList.length ? experienceList.map((eachExperience) => {
            return (
              <CvWorkExperience
                title={eachExperience.positionHeld}
                companyName={eachExperience.companyName}
                year={`${eachExperience.startYear} - ${eachExperience.finishYear}`}
                jobDescription={eachExperience.jobDescription}
              />
            );
          }) : <LoadSpinner/>}
        </div>
        <div className="mt-8">
          <h3 className="text-slate-700 mb-4 text-xl">Certificate</h3>
          {certificateList.length ? certificateList.map((eachCertificate) => {
            return (
              <CvCertificate
                title={eachCertificate.certificateName}
                year={eachCertificate.issueDate}
              />
            );
          }) : <LoadSpinner/>}
        </div>
        <div className="mt-8">
          <h3 className="text-slate-700 mb-4 text-xl">Guarantor</h3>
          {guarantorList.length ? guarantorList.map((eachGuarantor) => {
            return (
              <CvGuarantor
                guarantorName={eachGuarantor.guarantorName}
                phoneNumber={eachGuarantor.guarantorPhone}
              />
            );
          }) : <LoadSpinner/>}
        </div>
      </div>
      <button className='mt-5 px-4 py-2 bg-red-500 active:bg-red-300 text-white rounded-sm'>
          <Link to={`/${jobId}/jobApplicants`}>Back</Link>
      </button>
    </div>
  )
}

export default EmployeeProfile