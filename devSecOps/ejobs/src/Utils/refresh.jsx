import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/users/userSlice";



const RefreshUserData = async(userId, userType) =>{
    const dispatch = useDispatch()
    console.log("i ran 1");
    const getUser = userType === 'jobSeeker' ? "http://localhost:3003/api/v1/jobSeeker/getAjobSeeker/" : "http://localhost:3003/api/v1/jobEmployer/getAjobEmployer/"
    try {
        console.log("i ran 2");
        const fetchResponse = await axios.post(getUser, {jobSeekerId: userId})
        dispatch(updateUser(fetchResponse.data))
    } catch (error) {
        console.log("i ran 3");
        console.log(error)
    }
}

export default RefreshUserData