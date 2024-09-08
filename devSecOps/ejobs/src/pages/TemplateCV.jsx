import { BsDownload, BsShare } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import {Link} from 'react-router-dom';
import Header from "../component/Header";
import CvTemplate1 from "../component/CvTemplate1";
import CvTemplate2 from "../component/CvTemplate2";
import CvTemplate3 from "../component/CvTemplate3";
import FooterComponent from "../component/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { usePDF } from "react-to-pdf";



function TemplateCV() {
  const [shareOption, setShare] = useState(false);
  const [template, setTemplate] = useState(<CvTemplate1 />);
  const [templateNumber, setTemplateNumber] = useState(1);
  const loggedInUser = useSelector((state) => state.user);
  const [educationList, setEducationList] = useState([]);
  const [currentEducation, setCurrentEducation] = useState([])
  const [experienceList, setExperienceList] = useState([]);
  const [certificateList, setCertificateList] = useState([]);
  const [guarantorList, setGuarantorList] = useState([]);


  // ---------------Pdf reference---------------
  const {toPDF, templateRef: pdfTargetRef } = usePDF({filename: `Template ${templateNumber}`})

  // --------------API endpoints---------------
  const getEducation =
    `${process.env.REACT_APP_API_URL}education/getUserEducation`;
  const getExperience = `${process.env.REACT_APP_API_URL}experience/getUserWork`;
  const getCertificate =
    `${process.env.REACT_APP_API_URL}certificate/getUserCertificate`;
  const getGuarantor =
    `${process.env.REACT_APP_API_URL}guarantor/getUserGuarantor`;

  // -------------get user education------------
  useEffect(() => {
    const userEducation = loggedInUser.currentUser.education;  
    if(!userEducation) return
    const getUserEducation = async () => {
      const eachEducation = await Promise.all(
        userEducation.map(async (eachEducation) => {
          const educationInfo = await axios.post(getEducation, {
            educationId: eachEducation,
          }, {withCredentials: true});
          return educationInfo.data;
        })
      );
      setEducationList(eachEducation);
    };
  
    getUserEducation();
  }, []);


  // -----------Fetch work experience----------
  useEffect(() => {
    const userWork = loggedInUser.currentUser.workExperience;  
    if(!userWork) return

    const getUserWork = async () => {
      const eachWork = await Promise.all(
        userWork.map(async (singleWork) => {
          const workInfo = await axios.post(getExperience, {
            workId: singleWork,
          }, {withCredentials: true});
          return workInfo.data;
        })
      );
      setExperienceList(eachWork);
    };
  
    getUserWork();
  }, []);



  // -----------Fetch Certificate list----------

  useEffect(() => {
    const userCertificate = loggedInUser.currentUser.certificates;  
    if(!userCertificate) return
    const getUserCertificate = async () => {
      const eachCertificate = await Promise.all(
        userCertificate.map(async (singleCertificate) => {
          const certificateInfo = await axios.post(getCertificate, {
            certificateId: singleCertificate,
          }, {withCredentials: true});
          return certificateInfo.data;
        })
      );
      setCertificateList(eachCertificate);
    };
    getUserCertificate();
  }, []);


  

  // -----------Fetch Guarantor list----------

  useEffect(() => {
    const userGuarantor = loggedInUser.currentUser.guarantors;  
    if(!userGuarantor) return
    const getUserGuarantor = async () => {
      const eachGuarantor = await Promise.all(
        userGuarantor.map(async (singleGuarantor) => {
          const guarantorInfo = await axios.post(getGuarantor, {
            guarantorId: singleGuarantor,
          }, {withCredentials: true});
          return guarantorInfo.data;
        })
      );
      setGuarantorList(eachGuarantor);
    };
  
    getUserGuarantor();
  }, []);


  const handleShare = () => {

    setShare(!shareOption);
  };

  const handleTemplate = (e) => {
    switch (e) {
      case 1:
        setTemplateNumber(1);
        return setTemplate(<CvTemplate1 download={toPDF} education={educationList} experience={experienceList} certificate={certificateList} guarantor={guarantorList} />);
        break;

      case 2:
        setTemplateNumber(2);
        return setTemplate(<CvTemplate2 download={toPDF} education={educationList} experience={experienceList} certificate={certificateList} guarantor={guarantorList} />);
        break;

      case 3:
        setTemplateNumber(3);
        return setTemplate(<CvTemplate3 download={toPDF} education={educationList} experience={experienceList} certificate={certificateList} guarantor={guarantorList} />);

      default:
        break;
    }
  };

  const handleBody = () => {
    shareOption === true && setShare(false);
  };



  return (
    <div onClick={handleBody} className="text-sm">
      <div className="sm:px-24 px-4">
        <Header />
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h3 className="font-semibold inline-block mr-8">Download CV</h3>
            <p className="inline-block">
              You can choose from the 3 template which best goes with your taste
              and download it
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <BsShare className="cursor-pointer hover:text-orange-500 active:text-orange-300" onClick={handleShare} />
              {shareOption && (
                <div className="bg-white shadow-md flex flex-col p-2 items-start absolute w-56 right-0">
                  <button className="w-full text-start px-2 py-1 mb-2 hover:border-2 hover:border-gray-400 border-2 border-white">
                    Share to your email
                  </button>
                  <button className="w-full text-start px-2 py-1 mb-2 hover:border-2 hover:border-gray-400 border-2 border-white">
                    Share to other's email
                  </button>
                  <button className="w-full text-start px-2 py-1 mb-2 hover:border-2 hover:border-gray-400 border-2 border-white">
                    Share to company inbox
                  </button>
                  <button className="w-full text-start px-2 py-1 mb-2 hover:border-2 hover:border-gray-400 border-2 border-white">
                    Share to account inbox
                  </button>
                </div>
              )}
            </div>
            <BsDownload onClick={()=>{toPDF()}} className="cursor-pointer hover:text-orange-500 active:text-orange-300" />
          </div>
        </div>
        <div className="flex items-start justify-start gap-12 mt-16">
          <div className="w-1/6 h-auto">
            <button
              onClick={() => {
                handleTemplate(1);
              }}
              className={`hover:bg-orange-500 block py-1 px-4 text-slate-50 rounded-md mb-4 ${
                templateNumber === 1 ? "bg-orange-500" : "bg-slate-800"
              }`}
            >
              Template 1
            </button>
            <button
              onClick={() => {
                handleTemplate(2);
              }}
              className={`hover:bg-orange-500 block py-1 px-4 text-slate-50 rounded-md mb-4 ${
                templateNumber === 2 ? "bg-orange-500" : "bg-slate-800"
              }`}
            >
              Template 2
            </button>
            <button
              onClick={() => {
                handleTemplate(3);
              }}
              className={`hover:bg-orange-500 block py-1 px-4 text-slate-50 rounded-md mb-20 ${
                templateNumber === 3 ? "bg-orange-500" : "bg-slate-800"
              }`}
            >
              Template 3
            </button>
            <Link className='bg-red-500 px-4 py-2 text-white rounded-sm' to={`/profile/${loggedInUser.currentUser._id}`}>Profile</Link>
          </div>
          {/* ----------------template region--------------------- */}
          <div className="w-5/6" ref={pdfTargetRef}>
          {template}
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default TemplateCV;
