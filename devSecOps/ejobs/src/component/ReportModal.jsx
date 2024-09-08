import React from 'react'
import { MdCancel } from 'react-icons/md'
import LoadSpinner from './Modals/LoadSpinner'

const ReportModal = ({toggle, send, change, sending}) => {
  return (
    <div className='w-full text-sm h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-50'>
        <div className='relative p-6 w-2/3 h-auto flex flex-col items-center justify-center bg-white rounded-md shadow-lg'>
        <MdCancel onClick={toggle} className="absolute top-3 right-3 text-gray-400 w-6 h-6 cursor-pointer hover:text-red-500" />
        <h2 className='text-gray-600 text-lg font-semibold capitalize'>Report </h2>
        <textarea onChange={(e)=>{change(e)}} className='border-2 border-gray-200 rounded-sm w-full min-h-28 px-4 py-2' name="reportContent" id="reportContent" placeholder='your complaint here'></textarea>
        <div className='"flex items-center gap-6 justify-center mt-6'>
        <button onClick={send} className='bg-blue-600 text-white hover:bg-green-500 rounded-md px-4 py-2 focus:outline-none mr-2'>
            {sending ? <LoadSpinner/> : 'Send Report'}
        </button>
        <button onClick={toggle} className='bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-900 focus:outline-none'>Cancel</button>
        </div>
        </div>
    </div>
  )
}

export default ReportModal