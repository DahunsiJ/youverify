import { useState } from 'react';
import Background from '../assets/Images/organizationnew.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadSpinner from './Modals/LoadSpinner';


function IndividualEmployee(props) {
  const { next, prev, formData, setFormData} = props;
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const baseUrl = `${process.env.REACT_APP_API_URL}auth/signup`
  const navigate = useNavigate()

  const checkForErrors = ()=>{
    if(!formData.companyName || !formData.email || !formData.password || !formData.size || !formData.address || !formData.state || !formData.localGovernment || !formData.country || !formData.phoneNumber || !formData.certificate){
      setError(true)
      return true
    }
    return false
  }

  const handleNext = async(e) => {
    e.preventDefault();
    setError(false)
    setErrorMessage(null)
    setLoading(true)
    checkForErrors()
    console.log({dtata: formData})
    if(checkForErrors() === true){
      return
    }
    try {
      const response = await axios.post(baseUrl, formData)
      if (response.statusText === "OK") {
        toast.success('Sucess signin to continue')
        setLoading(false)
        navigate("/signin");
      } else {
        setErrorMessage("error creating user");
        toast.error('Error try again later')
        setLoading(false)
      }
      
    } catch (error) {
      setErrorMessage(error)
      toast.error('Error try again later')
      setLoading(false)
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    const previousPage = "employerTwo";
    prev(previousPage);
  };

  const handleChange = (e)=>{
    setError(false)
    setErrorMessage(null)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <form style={{ backgroundImage: `url(${Background})` }} className="z-20 sm:w-2/3 w-full relative p-6 bg-cover flex flex-col items-center justify-center after:absolute after:bg-black after:z-10 after:top-0 after:left-0 after:w-full after:h-full after:opacity-55 text-white">
          <button className="cursor-pointer absolute -top-8 sm:right-0 right-10 py-0.5 border-[1px] border-red-600 hover:bg-white hover:text-red-500 px-4 bg-red-500 text-slate-50" onClick={handlePrevious}>
            back
          </button>
          <div className='w-full relative z-20'>

          <h3 className="mb-4 text-center text-xl">Further Finder &and;s Info</h3>
          <div className="flex items-center justify-center w-full">
            <div className="w-1/2">
              <div className="my-4">
                <label className="block" htmlFor="companyName">Company Name</label>
                <input name="companyName" className="px-2 py-1 outline-none w-3/4 text-slate-700" onChange={handleChange} type="text" placeholder="Company Name" />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="address">Address</label>
                <input name="address" className="px-2 py-1 outline-none w-3/4 text-slate-700" onChange={handleChange} type="text" placeholder="address" />
               </div>
              <div className="my-4">
                <label className="block" htmlFor="state">State</label>
                <input name="state" className="px-2 py-1 outline-none w-3/4 text-slate-700" onChange={handleChange} type="text" placeholder="State" />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="localGovernment">Local Government</label>
                <input name="localGovernment" className="px-2 py-1 outline-none w-3/4 text-slate-700" onChange={handleChange} type="text" placeholder="LGA" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="my-4">
                <label className="block" htmlFor="country">Country</label>
                <input name="country" className="px-2 py-1 outline-none w-3/4 text-slate-700" onChange={handleChange} type="text" placeholder="Country" />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="PhoneNumber">Phone No.</label>
                <input name="phoneNumber" className="px-2 py-1 outline-none w-3/4 text-slate-700" onChange={handleChange} type="text" placeholder="Phone No." />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="size">Size</label>
                <input name='size' className="px-2 py-1 outline-none w-3/4 text-slate-700" onChange={handleChange} type="text" placeholder="Size" />
              </div>
              <div className="my-4">
                <label className="block" htmlFor="certificate">Upload Certificate</label>
                <input name='certificate' className="px-2 py-1 outline-none w-3/4" type="file" onChange={handleChange} placeholder="click here to upload doc +" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col w-3/4 mx-auto">
            <span className={`${error ? "block" : "hidden"} text-red-500 px-4 py-1 bg-red-300`}>All fields are required</span>
            <span className={`${errorMessage ? "block" : "hidden"} text-red-500 px-4 py-1 bg-red-300`}>Error processing data</span>
            <button className="w-full py-2 bg-orange-500 text-slate-50 my-2" onClick={handleNext}>{loading ? <LoadSpinner/> : "Next"}</button>
            <button className="w-full py-2 bg-orange-500 text-slate-50 my-2">Connect using e-verify</button>
          </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default IndividualEmployee;
