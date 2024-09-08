import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/users/userSlice";

export const refreshUserData = async(userId, userType)=>{
    const dispatch = useDispatch()
    const jobSeekerUrl = 'http://localhost:3003/api/v1/jobSeeker/getAjobSeeker/'
    const jobEmployerUrl = 'http://localhost:3003/api/vi/jobEmployer/getJobEmployer'
    

    if(userType === 'jobSeeker'){
        console.log("seeker")
        const jobSeekerDetails = await axios.post(jobSeekerUrl, {jobSeekerId: userId})
        const jobSeekerInfo = jobSeekerDetails.data
        console.log(jobSeekerInfo)
        // dispatch(updateUser(jobSeekerInfo))
        }else{
            console.log("employer")
            const jobEmployerDetails = axios.post(jobEmployerUrl, {employerId: userId})
            console.log(jobEmployerDetails)
    }
}