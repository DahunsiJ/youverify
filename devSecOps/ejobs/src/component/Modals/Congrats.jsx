import React from 'react'
import Logo from '../../assets/Images/ejobs-logo.svg'
import { GrFavorite } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Congrats() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='p-10 bg-white shadow-lg flex items-center justify-center flex-col'>
            <img className='w-28 mb-1' src={Logo} alt="ejob logo" />
            <GrFavorite className='text-orange-500'/>
            <h3 className='mt-4 text-sm font-semibold'>
            Thank you.... For completing this process 
            </h3>
            <h3 className='mt-1 text-sm font-semibold'>
                You can always go back to our homepage and do more
            </h3>
            <Link to="/" className="text-gray-400 mt-4 font-semibold underline">Home</Link>
        </div>
    </div>
  )
}

export default Congrats