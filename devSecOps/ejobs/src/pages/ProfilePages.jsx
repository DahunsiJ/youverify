import { MdAdd, MdCancel, MdCheckBox, MdUpdate } from "react-icons/md";
import { TbBoxMargin, TbH1 } from "react-icons/tb";
import DefaultProfile from "../assets/Images/profile2.jpg";
import { FaCalendarCheck, FaCamera, FaPaperclip } from "react-icons/fa6";
import GoogleImage from "../assets/Images/locate.png";
import { historyData } from "../assets/data";
import ProfileData from "../component/ProfileData";
import Header from "../component/Header";
import FooterComponent from "../component/Footer";
import ProfileInput from "../component/ProfileInput";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import EducationCard from "../component/EducationCard";
import EducationTemplate from "../component/EducationTemplate";
import axios from "axios";
import { updateUser } from "../redux/users/userSlice";
import { useNavigate } from "react-router-dom";
import LoadSpinner from "../component/Modals/LoadSpinner";
import { addNewEducation, removeAnEducation, setUserEducation, updateAnEducation } from "../redux/education/educationSlice";
import { addNewGuarantor, removeGuarantor, setGuarantorList, updateGuarantor } from "../redux/guarantor/guarantorSlice";
import { addNewCertificate, removeCertificate, setCertificateList, updateCertificate } from "../redux/CertificateList/certificateSlice";
import { addNewWorkExperience, removeAnWorkExperience, updateAnWorkExperience} from "../redux/workSlice/workSlice";
import { toast } from "react-toastify";
import { convertToBase64 } from "../Utils/fileConverter";
import ReportModal from "../component/ReportModal";
import { addReportMade } from "../redux/reportMade/reportMadeSlice";



function ProfilePages() {
  // -----------Items from redux store--------------------
  const userExperienceList = useSelector(state=>state.workExperience.workExperienceList)
  const loginUser = useSelector((state) => state.user);
  const userCertificate = useSelector(state=>state.certificateList.certificateList)
  const userEducation = useSelector(state=>state.education.educationList)
  const userGuarantor = useSelector(state=>state.guarantorList.guarantorList)
  const userNotification = useSelector(state=>state.notification.notificationList)
  const userApplication = useSelector(state=>state.applicationList.applicationList)
  const loggedInUser = useSelector((state) => state.user);

  const [currentUser, setCurrentUser] = useState({});
  const [changeListener, setChangeListener] = useState(false);
  const [updateError, setUpdateError] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  
  // -------------Certificate Forms-----------------
  const [oldCertificateForm, setOldCertificateForm] = useState({});
  const [newCertificateForm, setNewCertificateForm] = useState({})
  
  // -------------Guarantor Forms-----------------
  const [newGuarantorForm, setNewGuarantorForm] = useState({user: loggedInUser.currentUser._id});
  const [oldGuarantorForm, setOldGuarantorForm] = useState({});
  
  // -------------Education Forms-----------------
  const [educationForm, setEducationForm] = useState({user: loggedInUser.currentUser._id});
  const [oldEducationForm, setOldEducationForm] = useState({});
  
  // -------------Other Form data----------------------
  const [reportForm, setReportForm] = useState({
    reporter: loggedInUser.currentUser._id
  })
  const [workData, setWorkData] = useState({});
  const [addEducation, setAddEducation] = useState(false);
  const [addWorkExperience, setAddWorkExperience] = useState(false);
  const [addGuarantor, setAddGuarantor] = useState(false);
  const [addReport, setAddReport] = useState(false);
  const [addCertificate, setAddCertificate] = useState(false);
  const [workStatus, setWorkStatus] = useState(false);
  const fileInputRef = useRef()

  // -------------------------------Toggle handlers---------------------------------
  const [startReport, setStartReport] = useState(false)
  
  
  // -------------------------------URL routes---------------------------------

  // ----Education-----
  const getEducation = "http://localhost:3003/api/v1/education/getUserEducation";
  const createEducation = 'http://localhost:3003/api/v1/education/createUserEducation'
  const updateEducation = 'http://localhost:3003/api/v1/education/updateUserEducation'
  const deleteEducation = 'http://localhost:3003/api/v1/education/deleteUserEducation'

  // ----Work Experience-----
  const getExperience = "http://localhost:3003/api/v1/experience/getUserWork";
  const createWorkExperience = 'http://localhost:3003/api/v1/experience/createExperience'
  const deleteWorkExperience = 'http://localhost:3003/api/v1/experience/deleteUserWork'
  const updateWorkExperience = "http://localhost:3003/api/v1/experience/updateUserWork";


  // ----Certificate-----
  const getCertificate = "http://localhost:3003/api/v1/certificate/getUserCertificate";
  const deleteCertificate = "http://localhost:3003/api/v1/certificate/deleteUserCertificate";
  const updateCertificateURL = "http://localhost:3003/api/v1/certificate/updateUserCertificate";
  const createCertificate = "http://localhost:3003/api/v1/certificate/createUserCertificate";
  
  // ----Guarantor-----
  const getGuarantor = "http://localhost:3003/api/v1/guarantor/getUserGuarantor";
  const deleteGuarantor = "http://localhost:3003/api/v1/guarantor/deleteUserGuarantor";
  const updateGuarantorURL = "http://localhost:3003/api/v1/guarantor/updateUserGuarantor";
  const createGuarantor = "http://localhost:3003/api/v1/guarantor/createGuarantor";
  
  // ----Updates-----
  const updateJobSeeker = "http://localhost:3003/api/v1/jobSeeker/updateJobSeeker";
  
  // -----------Report URL-------------------
  const createReport = 'http://localhost:3003/api/v1/employeeReport/createEmplyeeReport'

  // -----------User information----------- 
  const getUserInformation = "http://localhost:3003/api/v1/jobSeeker/getAjobSeeker";
  
  // ---------User application------------
  const getUserApplication = "http://localhost:3003/api/v1/application/getAnApplication/";
  
  // ---------SIngle Application------------
  const getApplications = "http://localhost:3003/api/v1/application/getAnApplication/";
  
  // -----------User information----------- 
  const getAJobSeeker = "http://localhost:3003/api/v1/jobSeeker/getAjobSeeker/";
  

  // -------------------variable declaration--------------------------
  
  const [loading, setLoading] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile]  = useState({})
  const [previousWork, setPreviousWork] = useState({})
  const [previousEducation, setPreviousEducation] = useState({})
  const [newWork, setNewWork] = useState({user: loggedInUser.currentUser._id})
  const [educationData, setEducationData] = useState({userId: loggedInUser.currentUser_id})
  const [guarantorData, setGuarantorData] = useState({})
  const [experienceData, setExperienceData] = useState({})
  const [certificateData, setCertificateData] = useState({})
  const [previewImage, setPreviewImage] = useState(null)
  profileInfo.jobSeekerId = loggedInUser.currentUser._id
  


// -------------Profile toggles-------------------

const handleAddCertificate = (e) => {
  e.preventDefault();
  setAddCertificate(!addCertificate);
};

const toggleAddWork = (e) => {
  e.preventDefault()
  setAddWorkExperience(!addWorkExperience)
};

const toggleWorkStatus = (e) => {};

const toggleReport = (e) => {};

const handleAddGuarantor = ()=>{
  setAddGuarantor(!addGuarantor)
}

// -----------Reportd handler--------
const handleReport = ()=>{
 setStartReport(!startReport)
}

const handleReportForm = (e)=>{
  setReportForm({...reportForm, [e.target.name]: e.target.value})
}

const handleSendReport = async()=>{
  try{
    const createEmployeeReport = await axios.post(createReport, reportForm, {withCredentials: true})
    dispatch(addReportMade(createEmployeeReport.data))
    toast.success('Success')
    handleReport()
  }catch(error){
    toast.error('Error try again later')
    console.log(error)
  }

}


// -------------Form change-----------------
const handleProfileChange = (e) => {
  const updatedProfileInfo = {
    ...profileInfo,
    [e.target.name]: e.target.value,
    jobSeekerId: loggedInUser.currentUser._id,
  };
  setProfileInfo(updatedProfileInfo);
  setChangeListener(true);
};

const handlePreviousWork = (e)=>{
  setPreviousWork({...previousWork, [e.target.name]: e.target.value})
}

const handleNewWork = (e) => {
  setNewWork({...newWork, [e.target.name]: e.target.value})
};

const handleCertificate = (e) => {
  setOldCertificateForm({...oldCertificateForm, [e.target.name]: e.target.value})
};

const handleNewCertificate = (e) => {
  setNewCertificateForm({...newCertificateForm, [e.target.name]: e.target.value})
};

const toogleEduaction = (e) => {
  setAddEducation(!addEducation)
};

const handleEducation = (e) => {
  setEducationForm({...educationForm, [e.target.name] : e.target.value})
};


const handleOldEducation = (e) => {
  setOldEducationForm({...oldEducationForm, [e.target.name] : e.target.value})
};


const handleNewGuarantor = (e) => {
    setNewGuarantorForm({...newGuarantorForm, [e.target.name]: e.target.value})
};

const handleOldGuarantor = (e) => {
    setOldGuarantorForm({...oldGuarantorForm, [e.target.name]: e.target.value})
}; 
  
  const handleAvatar = async (e)=>{
    const file = e.target.files[0]
    setPreviewImage(URL.createObjectURL(file));
    // ---------convert file/image---------
    const base64 = await convertToBase64(file)
    setProfileInfo({...profileInfo, [e.target.name]: base64})
    setChangeListener(true);
  }

  const fileInputHandler = ()=>{
    fileInputRef.current.click()
  }

  // -------------Create new Handler---------------
  const handleSubmitEducation = async(e)=>{
    e.preventDefault()
    try {
      const educationResponse = await axios.post(createEducation, educationForm, {withCredentials: true})
      dispatch(addNewEducation(educationResponse.data))
      toast.success('Success')
    } catch (error) {
      toast.error('Error pls try again')
      console.log(error)
    }
  }


  const handleCreateGuarantor = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(createGuarantor, newGuarantorForm, {withCredentials: true})
      dispatch(addNewGuarantor(response.data))
      toast.success('Sucess')
    } catch (error) {
      toast.error('Error')
      console.log(error)
    }
  }


  const handleCreateNewWork =async (e, userId)=>{
    e.preventDefault()
    try{
      const workExperienceResponse = await axios.post(createWorkExperience, newWork, {withCredentials: true})
      dispatch(addNewWorkExperience(workExperienceResponse.data))
      toast.success('Successfully created')
      setNewWork({})
      setAddWorkExperience(!addWorkExperience)
    }catch(error){
      console.log(error)
      toast.error('Error try again')
    }
  }


 const handleCreateCertificate =async (e, userId)=>{
    e.preventDefault()
    setNewCertificateForm({...newCertificateForm, user: userId})
    try{
      const certificateResponse = await axios.post(createCertificate, newCertificateForm, {withCredentials: true})
      dispatch(addNewCertificate(certificateResponse.data))
      toast.success('Sucess')
    }catch(error){
      toast.error('Error try again')
      console.log(error)
    }
  }


  // ------------Delete handler------------
  const handleExperienceDelete = async(e, workId)=>{
    e.preventDefault()
    try{
      const deleteExperience = await axios.delete(deleteWorkExperience, {data: {workId:workId}}, {withCredentials: true})
      dispatch(removeAnWorkExperience(deleteExperience.data.workExperience))
      toast.success('Successfully removed')
    }catch(error){
      toast.error('error try again')
      console.log(error)
    }
  }

  const handleDeleteCertificate =async (e, certificateId)=>{
    e.preventDefault()
    try {
      const response = await axios.delete(deleteCertificate, {data: {certificateId: certificateId}}, {withCredentials: true})
      dispatch(removeCertificate(response.data.certificateDeleted))
      toast.success('Success')
    } catch (error) {
      toast.error('Error try again')
      console.log(error);
    }
  }

  const handleDeleteEducation = async (e, educationId)=>{
    e.preventDefault()
    try {
      const educationResponse = await axios.delete(deleteEducation, {data: {educationId: educationId}}, {withCredentials: true})
      dispatch(removeAnEducation(educationResponse.data))
      toast.success('Success')
    } catch (error) {
      toast.error('Error pls try gain later')
      console.log(error);
    }
  }

  const handleDeleteGuarantor =async (e, guarantorId)=>{
    e.preventDefault()
    try {
      const deleteResponse = await axios.delete(deleteGuarantor, {data: {guarantorId: guarantorId}}, {withCredentials: true})
      dispatch(removeGuarantor(deleteResponse.data.guarantor))
      toast.success('Success')
    } catch (error) {
      toast.error('Error try again')
      console.log(error)
    }
  }


// ---------------Updates handlers------------------
  const handleUpdateWork = async(e, workId)=>{
    e.preventDefault()
    setPreviousWork({...previousWork, workId: workId})
    try{
      const updateResponse = await axios.put(updateWorkExperience, previousWork, {withCredentials: true})
      dispatch(updateAnWorkExperience(updateResponse.data))
      toast.success('Success')
    }catch(error){
      toast.error('Error')
      console.log(error)
    }
  }

  const handleUpdateEducation = async(e, educationId)=>{
    e.preventDefault()
    setOldEducationForm({...oldEducationForm, educationId: educationId})
    try{
      const updatedResponse = await axios.put(updateEducation, oldEducationForm, {withCredentials: true})
      dispatch(updateAnEducation(updatedResponse.data))
      toast.success('SuccessFully updated')
    }catch(error){
      toast.error('Error updating Pls try again')
      console.log(error)
    }
  }

  const handleUpdateCertificate = async(e, certificateId)=>{
    e.preventDefault()
    setOldCertificateForm({...oldCertificateForm, certificateId: certificateId})
    try {
      const response = await axios.put(updateCertificateURL, oldCertificateForm, {withCredentials: true})
      dispatch(updateCertificate(response.data))
      toast.success('Success')
    } catch (error) {
      toast.error('Error Try again')
      console.log(error)
    }
  }


  const handleUpdateGuarantor = async(e, guarantorId)=>{
    e.preventDefault()
    setOldGuarantorForm({...oldGuarantorForm, guarantorId: guarantorId})
    try {
      const response = await axios.put(updateGuarantorURL, oldGuarantorForm, {withCredentials: true})
      dispatch(updateGuarantor(response.data))
      toast.success('Success')
    } catch (error) {
      toast.error('Error try again')
      console.log(error)
    }
  }

  const handleUpdate = async() => {
    setLoadingUpdate(true);
    try{
      const response = await axios.put(updateJobSeeker, profileInfo, {withCredentials: true})
      if(response.status === 200){
        dispatch(updateUser(response.data))
      }
      toast.success('Success')
      setLoadingUpdate(false);
    }catch(error){
      console.log(error)
      toast.error('Error pls try again later')
      setLoadingUpdate(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm">
        <Header darkMode={true} />
        <div className="sm:w-2/3 w-full mx-auto my-4 text-xs bg-red-200 relative text-red-600 p-4 rounded-md">
          <div className="">
            <p>
              Note: For better experience and to avoid error or multiple
              filling, we advice you login import your account details from
              either of our other platforms if you already have their account
            </p>
            <MdCancel
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => {
                alert("functionality comming soon");
              }}
            />
          </div>
          <div className="flex items-center justify-center mt-4 gap-4">
            <button className="px-4 py-2 bg-red-600 text-slate-50">
              import from e-school
            </button>
            <button className="px-4 py-2 bg-red-600 text-slate-50">
              import from E-Verify
            </button>
          </div>
        </div>


        {/* -------------Top profile contents----------------- */}
        
        <section className="bg-white shadow rounded-lg p-6 mb-8 mx-10 my-10">
          <div className="text-sm flex sm:flex-row flex-col sm:items-start items-center justify-center gap-12">
            <div className="sm:w-1/3 w-full">
              <div className="mb-6 relative flex items-center justify-start gap-4">
                <img
                  className="w-32 h-32 object-cover rounded-full"
                  src={loggedInUser.currentUser.avatar || DefaultProfile}
                  alt=""
                />

                {/* profile */}
                <div className="absolute bottom-0 left-16 p-2 rounded-full bg-slate-400">
                  <input className="w-2 h-2 hidden rounded-full" ref={fileInputRef} onChange={handleAvatar} type="file" name="avatar" id="avatar" />
                  <FaCamera className="cursor-pointer" onClick={fileInputHandler}/>
                </div>
                <span className="px-2 py-1 bg-gray-300 text-gray-600 cursor-pointer">
                  E-verify
                </span>
              </div>
              <div className="border-2 rounded-md p-2 mb-4 border-slate-300">
                <p className="text-sm font-medium">Address 1</p>
                <h3>{loggedInUser.currentUser.address}</h3>
              </div>
              {currentUser.address2 && (
                <div className="border-2 rounded-md p-2 mb-4 border-slate-300">
                  <p className="text-sm font-medium">Address 2</p>
                  <h3>
                    15, Iyala street Akindedun, off Shoprite, Alausa, Ikeja
                    Lagos state Nigeria
                  </h3>
                </div>
              )}
            </div>


            {/* ------------------------Profile information------------------------ */}
            <div className="sm:w-1/3 w-full">
              <ProfileInput
                text="FirstName"
                input="text"
                placeholder={loggedInUser.currentUser.firstName}
                update={handleProfileChange}
                name="firstName"
              />
              <ProfileInput
                text="Email"
                input="text"
                placeholder={loggedInUser.currentUser.email}
                update={handleProfileChange}
                name="lastName"
              />
              <ProfileInput
                text="Date of birth"
                input="date"
                placeholder={
                  loggedInUser.currentUser.dateOfBirth ? currentUser.dateOfBirth : "N/A"
                }
                update={handleProfileChange}
                name="dateOfBirth"
              />
              <div className="mb-8 rounded-md relative w-full border-2 border-slate-300">
                <p className="absolute -top-4 bg-white">Gender</p>
                <select
                  className="w-full border-none p-2 outline-none"
                  onChange={handleProfileChange}
                  name="gender"
                  placeholder={loggedInUser.currentUser.gender}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            
            
            {/* -----------------------------Second Profile information----------------------------- */}
            <div className="sm:w-1/3 w-full">
              <ProfileInput
                text="LastName"
                input="text"
                placeholder={
                  loggedInUser.currentUser.lastName ? loggedInUser.currentUser.lastName : "N/A"
                }
                update={handleProfileChange}
                name="lastName"
              />
              <ProfileInput
                text="Phone No"
                input="text"
                placeholder={
                  loggedInUser.currentUser.phoneNumber ? loggedInUser.currentUser.phoneNumber : "N/A"
                }
                update={handleProfileChange}
                name="phoneNumber"
              />
              <div className="mb-8 rounded-md relative w-full border-2 border-slate-300">
                <p className="absolute -top-4 bg-white">Race</p>
                <select
                  className="w-full border-none p-2 outline-none"
                  onChange={handleProfileChange}
                  name="race"
                  placeholder={loggedInUser.currentUser.race}
                >
                  <option>Black</option>
                  <option>White</option>
                </select>
              </div>
              <div className="mb-8 rounded-md relative w-full border-2 border-slate-300">
                <p className="absolute -top-4 bg-white">Disability</p>
                <select
                  className="w-full border-none p-2 outline-none"
                  onChange={handleProfileChange}
                  name="disability"
                  placeholder={loggedInUser.currentUser.disability}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>
          </div>
          {changeListener && (
            <button
              onClick={handleUpdate}
              className="text-center bg-green-500 text-white font-semibold flex items-center mx-auto gap-2 px-4 py-1 rounded-sm"
            >
              {loadingUpdate ? <LoadSpinner /> : "Update"}
            </button>
          )}
        </section>


        {/* -------------Google location----------------- */}
        <section className="bg-white shadow rounded-lg p-6 mb-8 mx-10 my-10">
          <img src={GoogleImage} alt="google location" />
        </section>

        {/* -------------------------Education section------------------------- */}

        <section className="bg-white shadow rounded-lg p-6 mb-8 mx-10 my-10">
          <div className="shadow-md py-4 px-2 sm:mb-4 mb-3 flex items-center justify-between">
            <h3>Education</h3>
            <button
              onClick={toogleEduaction}
              className="flex items-center gap-2 px-2 py-1 bg-orange-400 font-semibold text-white rounded-sm"
            >
              <MdAdd />
              Add
            </button>
          </div>
          {addEducation && <EducationTemplate handleChange={handleEducation} submit={handleSubmitEducation} form={educationForm} setForm={setEducationForm}/>}
          <div>
            {userEducation &&
              userEducation.map((eachEducation, index) => {
                return <EducationCard data={eachEducation} key={index} handleChange={handleOldEducation} update={handleUpdateEducation} deleteEducation={handleDeleteEducation}/>;
              })}
          </div>
        </section>


      {/* -------------------------Work Experience------------------------- */}

        <section className="bg-white shadow rounded-lg p-6 mb-8 mx-10 my-10">
          <div className="">
            <div className="shadow-md py-4 px-2 flex mb-4 items-center justify-between">
              <h3>Work Experience</h3>
              <button
                onClick={toggleAddWork}
                className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-2 py-1"
              >
                <MdAdd />
                Add
              </button>
            </div>

          {/* -----------------------Add New Experience Form---------------------------- */}
            {addWorkExperience && (
              <div className="my-4 border-2 border-orange-300 rounded-sm p-8">
                <div className="flex sm:flex-row flex-col-reverse items-start justify-center gap-12">
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="companyName"
                        className="absolute -top-4 bg-white"
                      >
                        Company Name
                      </label>
                      <input
                        onChange={handleNewWork}
                        name="companyName"
                        className="w-full border-none outline-none"
                        type="text"
                        placeholder=""
                        id="companyName"
                      />
                      <span
                        className={`${
                          workData.companyName ? "hidden" : "block"
                        } text-red-500 absolute top-0 right-0 text-xl`}
                      >
                        *
                      </span>
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="companyAddress"
                        className="absolute -top-4 bg-white"
                      >
                        Company Address
                      </label>
                      <input
                        onChange={handleNewWork}
                        name="companyAddress"
                        className="w-full border-none outline-none"
                        type="text"
                        placeholder=""
                        id="companyAddress"
                      />
                      <span
                        className={`${
                          workData.companyAddress ? "hidden" : "block"
                        } text-red-500 absolute top-0 right-0 text-xl`}
                      >
                        *
                      </span>
                    </div>
                    <div className="flex flex-col items-start w-full gap-3">
                      <div className="border-2 flex gap-3 border-gray-300 px-1.5 py-1 relative">
                        <label htmlFor="startYear" className="w-fit">
                          Start year
                        </label>
                        <input
                          type="date"
                          name="startYear"
                          onChange={handleNewWork}
                          id="startYear"
                        />
                        <span
                          className={`${
                            workData.startYear ? "hidden" : "block"
                          } text-red-500 absolute top-0 right-0 text-xl`}
                        >
                          *
                        </span>
                      </div>
                      <div
                        className={`${
                          workStatus ? "hidden" : "block"
                        } border-2 flex gap-3 border-gray-300 px-1.5 py-1 relative`}
                      >
                        <label htmlFor="finishYear" className="w-fit">
                          finish year
                        </label>
                        <input
                          type="date"
                          name="finishYear"
                          onChange={handleNewWork}
                          id="finishYear"
                        />
                        <span
                          className={`${
                            workData.finishYear ? "hidden" : "block"
                          } text-red-500 absolute top-0 right-0 text-xl`}
                        >
                          *
                        </span>
                      </div>
                    </div>
                    <div className="mt-8 flex items-center">
                      <MdCheckBox
                        className={`${
                          workStatus ? "text-red-600" : "text-gray-600"
                        } cursor-pointer`}
                        onClick={toggleWorkStatus}
                      />
                      <span>I am still working here</span>
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="positionHeld"
                        className="absolute -top-4 bg-white"
                      >
                        Position held
                      </label>
                      <input
                        onChange={handleNewWork}
                        name="positionHeld"
                        className="w-full border-none outline-none"
                        type="text"
                        placeholder=""
                        id="positionHeld"
                      />
                      <span
                        className={`${
                          workData.positionHeld ? "hidden" : "block"
                        } text-red-500 absolute top-0 right-0 text-xl`}
                      >
                        *
                      </span>
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="contactPerson"
                        className="absolute -top-4 bg-white"
                      >
                        Contact Person
                      </label>
                      <input
                        onChange={handleNewWork}
                        name="contactPerson"
                        className="w-full border-none outline-none"
                        type="text"
                        placeholder=""
                        id="contactPerson"
                      />
                      <span
                        className={`${
                          workData.contactPerson ? "hidden" : "block"
                        } text-red-500 absolute top-0 right-0 text-xl`}
                      >
                        *
                      </span>
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="salary"
                        className="absolute -top-4 bg-white"
                      >
                        Salary
                      </label>
                      <input
                        onChange={handleNewWork}
                        name="salary"
                        className="w-full border-none outline-none"
                        type="text"
                        placeholder=""
                        id="salary"
                      />
                      <span
                        className={`${
                          workData.salary ? "hidden" : "block"
                        } text-red-500 absolute top-0 right-0 text-xl`}
                      >
                        *
                      </span>
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="contactPhone"
                        className="absolute -top-4 bg-white"
                      >
                        Contact Phone Number
                      </label>
                      <input
                        onChange={handleNewWork}
                        name="contactPhone"
                        className="w-full border-none outline-none"
                        type="text"
                        placeholder=""
                        id="contactPhone"
                      />
                      <span
                        className={`${
                          workData.contactPhoneNumber ? "hidden" : "block"
                        } text-red-500 absolute top-0 right-0 text-xl`}
                      >
                        *
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    className="w-full outline-none border-2 border-slate-300 p-2 h-32 rounded-md"
                    placeholder="job description"
                    name="jobDescription"
                    onChange={handleNewWork}
                  ></textarea>
                  <span
                    className={`${
                      workData.jobDescription ? "hidden" : "block"
                    } text-red-500 absolute top-0 right-0 text-xl`}
                  >
                    *
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <FaPaperclip />
                    <span className={`hover:text-green-600 cursor-pointer`}>
                      View companies remark
                    </span>
                    <button
                      onClick={toggleReport}
                      className={`${
                        addReport ? "bg-red-600" : "bg-gray-600"
                      } text-gray-300 px-4 py-1 ml-4 rounded-sm`}
                    >
                      Report
                    </button>
                  </div>
                </div>
                <div className={`mt-2 ${addReport ? "block" : "hidden"}`}>
                  <label htmlFor="workReoprt"></label>
                  <textarea
                    placeholder="fill your report here"
                    className="w-full outline-none border-2 border-slate-300 p-2 h-32 rounded-md"
                    name="workReport"
                    id="workReport"
                    onChange={handleNewWork}
                  ></textarea>
                </div>
                <button
                  className="mt-4 bg-green-500 px-4 py-1 rounded-sm font-semibold text-white"
                  type="submit"
                  onClick={(e)=>{handleCreateNewWork(e, loggedInUser.currentUser._id)}}
                >
                  Submit
                </button>
              </div>
            )}


    {/* ----------Previous work experience------------- */}
            {userExperienceList?.map((eachWork, index) => (
              <form
                key={index}
                className="my-4 border-2 border-slate-300 rounded-sm p-8"
              >
                <div className="flex sm:flex-row flex-col-reverse items-start justify-center gap-12">
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="companyName"
                        className="absolute -top-4 bg-white"
                      >
                        Company Name
                      </label>
                      <input
                        onChange={handlePreviousWork}
                        name="companyName"
                        className="w-full border-none outline-none"
                        type="text"
                        id="companyName"
                        placeholder={eachWork.companyName}
                      />
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="companyAddress"
                        className="absolute -top-4 bg-white"
                      >
                        Company Address
                      </label>
                      <input
                        onChange={handlePreviousWork}
                        name="companyAddress"
                        className="w-full border-none outline-none"
                        type="text"
                        id="companyAddress"
                        placeholder={eachWork.companyAddress}
                      />
                    </div>
                    <div className="flex flex-col items-start w-full gap-3">
                      <div className="border-2 flex gap-3 border-gray-300 px-1.5 py-1 relative">
                        <label htmlFor="startYear" className="w-fit">
                          Start year
                        </label>
                        <input
                          type="date"
                          name="startYear"
                          id="startYear"
                          onChange={handlePreviousWork}
                          placeholder={eachWork.startYear}
                        />
                      </div>
                      <div
                        className={`mb-3 border-2 flex gap-3 border-gray-300 px-1.5 py-1 relative`}
                      >
                        <label htmlFor="startYear" className="w-fit">
                          finsh year
                        </label>
                        <input
                          type="date"
                          name="startYear"
                          id="startYear"
                          onChange={handlePreviousWork}
                          placeholder={eachWork.finishYear}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="positionHeld"
                        className="absolute -top-4 bg-white"
                      >
                        Position held
                      </label>
                      <input
                        onChange={handlePreviousWork}
                        name="positionHeld"
                        className="w-full border-none outline-none"
                        type="text"
                        id="positionHeld"
                        placeholder={eachWork.positionHeld}
                      />
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="contactPerson"
                        className="absolute -top-4 bg-white"
                      >
                        Contact Person
                      </label>
                      <input
                        onChange={handlePreviousWork}
                        name="contactPerson"
                        className="w-full border-none outline-none"
                        type="text"
                        id="contactPerson"
                        placeholder={eachWork.contactPerson}
                      />
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="salary"
                        className="absolute -top-4 bg-white"
                      >
                        Salary
                      </label>
                      <input
                        onChange={handlePreviousWork}
                        name="salary"
                        className="w-full border-none outline-none"
                        type="text"
                        id="salary"
                        placeholder={eachWork.salary}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <textarea
                    className="w-full outline-none border-2 border-slate-300 p-2 h-32 rounded-md"
                    name="jobDescription"
                    placeholder={eachWork.jobDescription}
                    onChange={handlePreviousWork}
                  ></textarea>
                </div>
                <div className="flex mt-4 gap-4">
                  <button
                    className="cursor-pointer bg-green-500 px-4 py-1 rounded-sm font-semibold text-white"
                    type="submit"
                    onClick={(e)=>{handleUpdateWork(e,eachWork._id)}}
                    >
                    Update
                  </button>
                  <button onClick={(e)=>{handleExperienceDelete(e, eachWork._id)}} className="cursor-pointer bg-red-500 px-4 py-1 rounded-sm font-semibold text-white active:bg-red-300 hover:red-800">
                    Delete
                  </button>
                  </div>
              </form>
            ))}
          </div>
        </section>


        {/* ---------------------------Certificates---------------------------- */}

        <section className="bg-white shadow rounded-lg p-6 mb-8 mx-10 my-10">
          <div className="">
            <div className="shadow-md py-4 px-2 flex items-center mb-4 justify-between">
              <h3>Certificates</h3>
              <button
                onClick={handleAddCertificate}
                className="flex items-center gap-2 bg-orange-500 rounded-sm text-white font-semibold px-2 py-1"
              >
                <MdAdd />
                Add
              </button>
            </div>


    {/* ----------------------------New Certificates Form-------------------------- */}
            <div
              className={`border-2 border-slate-300 p-8 rounded-lg ${
                addCertificate ? "hidden" : "block"
              }`}
            >
              <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                <label
                  htmlFor="certificate"
                  className="absolute -top-4 bg-white"
                >
                  Certificate
                </label>
                <input
                  onChange={handleNewCertificate}
                  name="certificateName"
                  className="w-full border-none outline-none"
                  type="text"
                  id="certificateName"
                  placeholder=""
                />
                <span
                  className={`${
                    addCertificate.certificate ? "hidden" : "block"
                  } text-red-500 absolute top-0 right-0 text-xl`}
                >
                  *
                </span>
              </div>
              <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                <label
                  htmlFor="certificateIssuer"
                  className="absolute -top-4 bg-white"
                >
                  Certificate Issuer
                </label>
                <input
                  onChange={handleNewCertificate}
                  name="certificateIssuer"
                  className="w-full border-none outline-none"
                  type="text"
                  id="certificateIssuer"
                  placeholder=""
                />
                <span
                  className={`${
                    addCertificate.certificateIssuer ? "hidden" : "block"
                  } text-red-500 absolute top-0 right-0 text-xl`}
                >
                  *
                </span>
              </div>
              <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                <label htmlFor="issueDate" className="absolute -top-4 bg-white">
                  Issue Date
                </label>
                <input
                  onChange={handleNewCertificate}
                  name="issueDate"
                  className="w-full border-none outline-none"
                  type="date"
                  id="issueDate"
                  placeholder=""
                />
                <span
                  className={`${
                    addCertificate.issueDate ? "hidden" : "block"
                  } text-red-500 absolute top-0 right-0 text-xl`}
                >
                  *
                </span>
              </div>
              <div className="flex items-center justify-end gap-2"></div>
              <button
                className="mt-4 bg-green-500 px-4 py-1 rounded-sm font-semibold text-white"
                type="submit"
                onClick={(e)=>{handleCreateCertificate(e, loggedInUser.currentUser._id)}}
              >
                Submit
              </button>
            </div>


    {/* ----------------------------List of Certificates-------------------------- */}
            {userCertificate?.map((eachCertificate, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-slate-300 p-8 rounded-lg mt-3"
                >
                  <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                    <label
                      htmlFor="firstGuarantorName"
                      className="absolute -top-4 bg-white"
                    >
                      Certificate
                    </label>
                    <input
                      onChange={handleCertificate}
                      name="certificateName"
                      className="w-full border-none outline-none"
                      type="text"
                      placeholder={eachCertificate.certificateName}
                      />
                    <span
                      className={`${
                        guarantorData.firstGuarantorName ? "hidden" : "block"
                        } text-red-500 absolute top-0 right-0 text-xl`}
                        >
                      *
                    </span>
                  </div>
                  <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                    <label
                      htmlFor="certificateIssuer"
                      className="absolute -top-4 bg-white"
                      >
                      Certificate Issuer
                    </label>
                    <input
                      onChange={handleCertificate}
                      name="certificateIssuer"
                      className="w-full border-none outline-none"
                      type="text"
                      id="certificateIssuer"
                      placeholder={eachCertificate.certificateIssuer}
                    />
                  </div>
                  <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                    <label
                      htmlFor="issueDate"
                      className="absolute -top-4 bg-white"
                      >
                      Issue Date
                    </label>
                    <input
                      onChange={handleCertificate}
                      name="issueDate"
                      className="w-full border-none outline-none"
                      type="date"
                      id="issueDate"
                      placeholder={eachCertificate.issueDate}
                    />
                  </div>
                  <div className="flex items-center justify-start gap-4">
                  <button
                    className="mt-4 bg-green-500 active:bg-green-300 px-4 py-1 rounded-sm font-semibold text-white"
                    type="submit"
                    onClick={(e)=>{handleUpdateCertificate(e,eachCertificate._id)}}
                  >
                    Update
                  </button>
                  <button
                    className="mt-4 bg-red-500 active:bg-red-300 px-4 py-1 rounded-sm font-semibold text-white"
                    type="submit"
                    onClick={(e)=>{handleDeleteCertificate(e,eachCertificate._id)}}
                  >
                    Delete
                  </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

    
    {/* -----------------------------Guarantor container------------------------------- */}
        <section className="bg-white shadow rounded-lg p-6 mb-8 mx-10 my-10">
          <div className="">
            <div className="shadow-md py-4 px-2 flex items-center mb-4 justify-between">
              <h3>Guarantor</h3>
              <button onClick={handleAddGuarantor} className="flex items-center gap-2 bg-orange-500 rounded-sm text-white font-semibold px-2 py-1"><MdAdd/> Add</button>
            </div>
            
            
            {/* -------------Toggle Guarantor Add------------------ */}
            {addGuarantor && <div
                    className="sm:w-1/2 w-full border-2 border-slate-300 p-4 rounded-2"
                  >
                    <h3 className="mb-4">Guarantor</h3>
                    <div className="mb-8 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="guarantorName"
                        className="absolute -top-4 bg-white"
                      >
                        Guarantor Name
                      </label>
                      <input
                        onChange={handleNewGuarantor}
                        name="guarantorName"
                        className="w-full border-none outline-none"
                        type="text"
                        id="guarantorName"
                        placeholder="Guarantor Name"
                      />
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="guarantorPhone"
                        className="absolute -top-4 bg-white"
                      >
                        Guarantor Phone
                      </label>
                      <input
                        onChange={handleNewGuarantor}
                        name="guarantorPhone"
                        className="w-full border-none outline-none"
                        type="Number"
                        id="guarantorPhone"
                        placeholder="guarantor phone"
                      />
                    </div>
                    <button
              className="mt-4 bg-green-500 px-4 py-1 rounded-sm font-semibold text-white"
              type="submit"
              onClick={handleCreateGuarantor}
            >
              Submit
            </button>
                  </div>}
            <div className="flex sm:flex-row flex-col sm:flex-wrap items-start justify-start gap-5 mt-4">
              
              
    {/* ---------------List of Guarantors------------------- */}
              {userGuarantor?.map((eachGuarantor, index) => {
                return (
                  <div
                    key={index}
                    className="sm:w-1/3 w-full border-2 border-slate-300 p-4 rounded-2"
                  >
                    <h3 className="mb-4">Guarantor {index + 1}</h3>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="guarantorName"
                        className="absolute -top-4 bg-white"
                      >
                        Guarantor Name
                      </label>
                      <input
                        onChange={handleOldGuarantor}
                        name="guarantorName"
                        className="w-full border-none outline-none"
                        type="text"
                        id="guarantorName"
                        placeholder={eachGuarantor.guarantorName}
                      />
                    </div>
                    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
                      <label
                        htmlFor="guarantorPhone"
                        className="absolute -top-4 bg-white"
                      >
                        Guarantor Phone
                      </label>
                      <input
                        onChange={handleOldGuarantor}
                        name="guarantorPhone"
                        className="w-full border-none outline-none"
                        type="Number"
                        id="guarantorPhone"
                        placeholder={eachGuarantor.guarantorPhone}
                      />
                    </div>
            <div className="flex gap-4">
                    <button
              className="mt-4 bg-green-500 active:bg-green-300 px-4 py-1 rounded-sm font-semibold text-white"
              type="submit"
              onClick={(e)=>{handleUpdateGuarantor(e, eachGuarantor._id)}}
              >
              Update
            </button>
            <button
              className="mt-4 bg-red-500 active:bg-red-300 px-4 py-1 rounded-sm font-semibold text-white"
              type="submit"
              onClick={(e)=>{handleDeleteGuarantor(e, eachGuarantor._id)}}
              >
              Delete
            </button>
          </div>
          </div>
                );
              })}
            </div>
            
          </div>
        </section>
        
        
  {/* -------------History section---------------- */}
        <section className="bg-white shadow rounded-lg p-6 mb-8 mx-10 my-10">
          <div className="w-full flex items-center justify-between mb-2 text-lg font-semibold">
            <div className="flex items-center justify-center gap-5">
              <span className="">Application Record</span>
            </div>
          </div>


          {/* ------------Active application Table------------- */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application Status</th>
                </tr>
              </thead>
              <tbody>

              {userApplication && userApplication.map((applicationData, index)=>{
                return(
                applicationData.status !== 'Hired' && <tr onClick={()=>{navigate(`/${applicationData._id}/applicationStatus`)}} key={index} className="cursor-pointer hover:bg-gray-200 hover:text-white">
                  <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.companyId?.companyName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.companyAddress}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.position}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.createdAt}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.status}</td>
                </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        </section>
  {/* -------------History section---------------- */}
        <section className="bg-white shadow rounded-lg p-6 mb-8 mx-10 my-10">
          <div className="w-full flex items-center justify-between mb-2 text-lg font-semibold">
            <div className="flex items-center justify-center gap-5">
              <span className="">Employment Record</span>
            </div>
          </div>

          {/* ------------Active Hired Applicant------------- */}
          <div className="mt-5 overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>

              {userApplication && userApplication.map((applicationData, index)=>{
                return(
                applicationData.status === 'Hired' && <tr key={index} className="cursor-pointer hover:bg-gray-200 hover:text-white">
                  <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.companyId?.companyName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.companyAddress}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.position}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.createdAt}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{applicationData.status}</td>
                  <td className="px-6 py-4 text-sm text-gray-500"><buton className='px-4 py-2 bg-green-500 rounded-sm text-white' onClick={()=>{
                    setReportForm({...reportForm, employer: applicationData.companyId})
                    handleReport();
                  }}>Report</buton></td>
                </tr>
                )
              })}
              </tbody>
            </table>
          </div>
          {startReport && <ReportModal send={handleSendReport} change={handleReportForm} toggle={handleReport}/>}
        </section>
      </div>
      <FooterComponent />
    </div>
  );
}

export default ProfilePages;
