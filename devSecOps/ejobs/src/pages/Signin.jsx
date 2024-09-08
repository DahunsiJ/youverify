import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Background from '../assets/Images/interview.jpg';
import { signinSuccess, signinFailure, signinStart } from "../redux/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadSpinner from "../component/Modals/LoadSpinner";
import { toast } from "react-toastify";
import { setApplicationList } from "../redux/applicationList/applicationSlice";
import { setCertificateList } from "../redux/CertificateList/certificateSlice";
import { setEducationList } from "../redux/education/educationSlice";
import { setNotificationList } from "../redux/notification/notificationSlice";
import { setBenefitList, setbenefitList } from "../redux/benefitList/benefitSlice";
// import { setHiredList, sethiredList } from "../redux/hiredList/hiredSlice";
import { setWorkExperienceList } from "../redux/workSlice/workSlice";
// import { setGuarantorList } from "../redux/guarantor/guarantorSlice";
import { setEmployerJobList, setListedJobList } from "../redux/employerJob/employerJobSlice";
import { setCompanyContact } from "../redux/companyContact/companyContact";
import { setSalaryPaidList } from "../redux/salaryPaid/salaryPaid";
import { setSalaryRecievedList } from "../redux/salaryRecieved/salaryRecieved";
import { setReportMadeList } from "../redux/reportMade/reportMadeSlice";
import { setReportGottenList } from "../redux/reportGotten/reportGottenSlice";
import { setEmployerProofList } from "../redux/employerProof/employerProofSlice";
import ForgetPassword from "../component/Modals/ForgetPassword";





function SigninPages() {
    const baseURL = `${process.env.REACT_APP_API_URL}auth/signin`;
    const forgetURL = `${process.env.REACT_APP_API_URL}forgetPasword/`
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userType:'jobSeeker'
    });
    const { loading, error } = useSelector(state => state.user);
    const dispatch = useDispatch();


    // ------forget password----------
    const [forgetPasswordData, setForgetPasswordData] = useState({})
    const [forgetPassowrd, setForgetPassword] = useState(false)
    const [loadingForget, setLoadingForget] = useState(false)


    // ----------Handle form change-------------
    const handleChange = (e) => {
        dispatch(signinFailure(null));
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // -----------handle forget form data----------
    const handleForgetPasswordChange = (e) => {
        e.preventDefault()
        setForgetPasswordData({...forgetPasswordData, [e.target.name]: e.target.value });
    };



    // ----------Handle forget password-------------
    const handleForgetPassword = async(e) => {
        e.preventDefault()
        setLoadingForget(true)
        try {
            await axios.post(forgetURL, forgetPasswordData, {withCredentials: true})
            setLoadingForget(false)
            setForgetPassword(!forgetPassowrd);
        } catch (error) {
            setLoadingForget(false)
            console.log(error)
        }
    };

const handleForgetPasswordToggle = ()=>{
    setForgetPassword(!forgetPassowrd)
}


// ------------Handle signin----------------
    const handleSignin = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            dispatch(signinFailure("All fields are required"));
            return;
        }
        try {
            dispatch(signinStart());
            const response = await axios.post(baseURL, formData, {
                withCredentials: true
            });
            
            // ---------dispatch to redux------------
            if (response.status === 200 && response.data) {
                const data = response.data;
                dispatch(signinSuccess(data));
                // ----Check user type to dispatch changes---------
                switch (data.userType) {
                    case 'jobSeeker':
                        dispatch(setApplicationList(data.appliedJobs));
                        dispatch(setBenefitList(data.benefits));
                        dispatch(setCertificateList(data.certificates));
                        dispatch(setEducationList(data.education));
                        dispatch(setWorkExperienceList(data.workExperience));
                        dispatch(setSalaryRecievedList(data.salaryRecieved))
                        dispatch(setNotificationList(data.notifications));
                        dispatch(setReportMadeList(data.reportMade))
                        dispatch(setReportGottenList(data.reportGotten))
                        break;
                        
                        case 'jobEmployer':
                        dispatch(setNotificationList(data.notifications));
                        dispatch(setEmployerJobList(data.listedJobs));
                        dispatch(setCompanyContact(data.contactPerson));
                        dispatch(setNotificationList(data.notifications));
                        dispatch(setSalaryPaidList(data.salaryPaid))
                        dispatch(setReportMadeList(data.reportMade))
                        dispatch(setReportGottenList(data.reportGotten))
                        dispatch(setEmployerProofList(data.proofOfCompany))
                        break;
                    case 'admin':
                    break;
                    default:
                    break;
                }
                
                toast.success('Logged in', {position: 'bottom-right'});
                navigate('/');
            } else {
                const errorMsg = response.data?.message || 'Unexpected response from server';
                dispatch(signinFailure(errorMsg));
            }
        } catch (error) {
            console.error('Signin error:', error);
            const errorMsg = error.response?.data?.message || error.message || 'An error occurred. Please try again.';
            dispatch(signinFailure(errorMsg));
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            
            <div 
                style={{ backgroundImage: `url(${Background})` }} 
                className="relative w-full h-full sm:w-2/3 sm:h-full bg-cover bg-center flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <form className="relative z-10 bg-white p-8 rounded-lg shadow-md sm:w-1/2 w-3/4 text-gray-800">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    <div className="flex items-center justify-center py-2 w-full">
                        <select onChange={handleChange} className="mx-auto outline-none border-gray-100 border-2 rounded-md px-2 py-1 w-full" name="userType" id="userType">
                            <option disabled value="jobSeeker">Sign in as</option>
                            <option value="jobSeeker">Job Seeker</option>
                            <option value="jobEmployer">Job Employer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium" htmlFor="email">Email or Username</label>
                        <input 
                            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            required 
                            onChange={handleChange} 
                            name="email" 
                            type="email" 
                            id="email" 
                            placeholder="James Johnson" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium" htmlFor="password">Password</label>
                        <input 
                            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
                            required 
                            onChange={handleChange} 
                            name="password" 
                            type="password" 
                            id="password" 
                            placeholder="********" 
                        />
                    </div>
                    <button 
                        onClick={handleSignin} 
                        className="w-full py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                        {loading ? <LoadSpinner /> : "Sign In"}
                    </button>
                    {error && (
                        <span className="block mt-4 px-4 py-2 bg-red-100 text-red-600 rounded-lg">
                            {error}
                        </span>
                    )}
                    <div className="mt-4 text-center">
                        <p>Don't have an account? <Link className="text-blue-500 hover:underline" to='/signup'>Sign up</Link></p>
                    </div>
                    <button className="text-blue-500 font-semibold text-base underline" onClick={handleForgetPasswordToggle}>Forget password</button>
                    <button 
                        className="w-full py-2 mt-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Connect using e-verify
                    </button>
                </form>
            </div>
            {forgetPassowrd && <ForgetPassword change={(e)=>{handleForgetPasswordChange(e)}} click={handleForgetPassword} toggle={handleForgetPasswordToggle}/>}
        </div>
    );
}

export default SigninPages;
