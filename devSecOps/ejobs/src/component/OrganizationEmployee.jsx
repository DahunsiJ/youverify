import { useState } from "react";
import Background from "../assets/Images/nightCompany.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import LoadSpinner from "./Modals/LoadSpinner";

function OrganizationEmployee({ next, prev, formData, setFormData }) {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const baseUrl = `${process.env.REACT_APP_API_URL}auth/signup`
    const [loading, setLoading] = useState(false)


    const checkForErrors = ()=>{
        if(!formData.companyName || !formData.email || !formData.password || !formData.size || !formData.address || !formData.state || !formData.localGovernment || !formData.country || !formData.phoneNumber || !formData.certificate){
          setError(true)
          return true
        }
        return false
      }

  const handleNext = async(e) => {
    e.preventDefault();
    console.log(formData)
    setError(false)
    setErrorMessage(null)
    setLoading(true)
    checkForErrors()
    if(checkForErrors() === true){
        setLoading(false)
      return
    }
    try {
      const response = await axios.post(baseUrl, formData)
      if (response.statusText === "OK") {
        setLoading(false)
        toast.success('Success sign in')
        navigate("/signin");
      } else {
        setErrorMessage("error creating user");
        toast.error('Error try again')
        setLoading(false)
      }
      
    } catch (error) {
      console.log({error})
      toast.error('Error try again')
      setErrorMessage(error)
      setLoading(false)
    }
    // window.location = "/";
  };

  const handlePrevious = () => {
    const previousPage = "employerTwo";
    next(previousPage);
  };

  const handleChange = (e) => {
    setError(false);
    setErrorMessage(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen h-screen flex text-slate-50 items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <form
          style={{ backgroundImage: `url(${Background})` }}
          className="sm:w-2/3 w-full relative p-6 bg-cover flex flex-col items-center justify-center"
        >
          <h3
            className="cursor-pointer absolute -top-8 sm:right-0 right-10 py-0.5 border-[1px] border-red-600 hover:bg-white hover:text-red-500 px-4 bg-red-500 text-slate-50"
            onClick={handlePrevious}
          >
            back
          </h3>
          <h3>Further Company Info</h3>
          <div className="flex items-start justify-center w-full">
            <div className="w-1/2">
              <div className="my-4">
                <label className="block" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  name="companyName"
                  className="text-black px-2 py-1 outline-none w-3/4"
                  type="text"
                  placeholder="James Johnson"
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="address">
                  Address
                </label>
                <input
                  name="address"
                  className="text-black px-2 py-1 outline-none w-3/4"
                  type="text"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="state">
                  State
                </label>
                <input
                  name="state"
                  className="text-black px-2 py-1 outline-none w-3/4"
                  type="text"
                  placeholder="State"
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="localGovernment">
                  Local Government
                </label>
                <input
                  name="localGovernment"
                  className="text-black px-2 py-1 outline-none w-3/4"
                  type="text"
                  placeholder="LGA"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="my-4">
                <label className="block" htmlFor="country">
                  Country
                </label>
                <input
                  className="text-black px-2 py-1 outline-none w-3/4"
                  type="text"
                  name="country"
                  placeholder="country"
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="PhoneNumber">
                  Phone Number
                </label>
                <input
                  name="phoneNumber"
                  className="text-black px-2 py-1 outline-none w-3/4"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="password">
                  Size
                </label>
                <input
                  name="size"
                  className="text-black px-2 py-1 outline-none w-3/4"
                  type="text"
                  placeholder="Company Size"
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="weight">
                  Upload Legal Certification
                </label>
                <input
                  name="certificate"
                  className="text-black px-2 py-1 outline-none w-3/4"
                  type="file"
                  placeholder="click here to upload doc +"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col w-3/4 mx-auto">
            <span className={`${error ? "block" : "hidden"} text-red-500 px-4 py-1 bg-red-300`}>All fields are required</span>
            <span className={`${errorMessage ? "block" : "hidden"} text-red-500 px-4 py-1 bg-red-300`}>Error processing data</span>
            <button
              className="w-full py-2 bg-orange-500 text-slate-50 my-2"
              onClick={handleNext}
            >
              {loading ? <LoadSpinner/> : "Next"}
            </button>
            <button className="w-full py-2 bg-orange-500 text-slate-50 my-2">
              Connect using e-verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrganizationEmployee;
