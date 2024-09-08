import React from 'react'
import Logo from "../../assets/Images/ejobs-logo.svg";
import { Link } from 'react-router-dom';


function TemplateCvModal() {
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
        <div className='shadow-lg px-8 py-4 text-center'>
        <img src={Logo} className='w-20 my-8 mx-auto' alt="" />
        <h3>Great! You want to use this resource to create your CV</h3>
        <h3><strong>Note:</strong> The details of this CV is drawn from your entries on on account, <strong>no more no less!</strong></h3>
        <i>(if your details are not update, we advice you update your profile to have an updated CV)</i>
        <Link to="/profile/1234" className="py-4 block text-gray-400 underline"><i>Update CV</i></Link>
        <button className='px-10 py-2 bg-orange-500 text-white'>Continue</button>
        </div>
    </div>
  )
}

export default TemplateCvModal