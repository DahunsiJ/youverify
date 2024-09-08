// ---------version 2-------------
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function NewPassword() {
  const {userType, token} = useParams()
  const [formData, setFormData] = useState({
    token: token,
    userType: userType
  })
  const [passwordMatch, setPasswordMatch] = useState(false)
  const [displayCompare, setDisplayCompare] = useState(false)


  const passwordChangeHandler = (e)=>{
    setDisplayCompare(false)
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  const comparePasswords = (e)=>{
    setDisplayCompare(true)
    const typedValue = e.target.value
    if(typedValue === formData.password) setPasswordMatch(true)
  }

  const submitPassword = async (e)=>{
    e.preventDefault()
    if(!passwordMatch){
      toast.error('Password mismatch')
      return
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}forgetPasword/changePasswordResponse`, formData)
      toast.success('Password changed success')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-50">
      <form className="relative p-8 sm:w-1/3 w-full max-w-md bg-white rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">New Password</h2>
        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="text-gray-600 mb-2 font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={passwordChangeHandler}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your new password"
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="confirmPassword" className="text-gray-600 mb-2 font-medium">confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={comparePasswords}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Retype your password"
            required
          />
        </div>
        {displayCompare && <p className={`${passwordMatch ? 'hidden' : 'flex'} transition-all duration-500 text-red-500 `}>password missmatch</p>}
        <button
        onClick={submitPassword}
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewPassword;
