import React, { useRef, useState } from 'react'
import { MdCancel } from 'react-icons/md'
import LoadSpinner from './Modals/LoadSpinner'
import { FaUpload } from 'react-icons/fa6'


const ProofOfAddressModal = ({toggle, handleImage, send, sending, change}) => {
  const [imagePreview, setImagePreview] = useState(undefined)
  const uploadRef = useRef()
  const handleUpload = ()=>{
    uploadRef.current.click()
  }

  const handlePreview = (e)=>{
    const file = e.target.files[0]
    const imageURL = URL.createObjectURL(file)
    setImagePreview(imageURL)
  }
  
  return (
    <div className='w-full text-sm h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-50'>
        <div className='relative p-6 sm:w-1/3 w-full h-auto flex flex-col items-center justify-center bg-white rounded-md shadow-lg'>
        <MdCancel onClick={toggle} className="absolute top-3 right-3 text-gray-400 w-6 h-6 cursor-pointer hover:text-red-500" />
        <h2 className='text-gray-600 text-lg font-semibold capitalize'>Add Proof of Address</h2>
        <div className='my-2 flex items-center justify-center flex-col'>
        {imagePreview && <img className='h-28 w-44 object-cover' src={imagePreview} alt='upload'/>}
        <input ref={uploadRef} onChange={(e)=>{handleImage(e);handlePreview(e)}} type='file' className='hidden' name="proofImage" id="proofImage" placeholder='Add Image'/>
        <FaUpload className='text-green-600 mt-2 text-2xl cursor-pointer' onClick={handleUpload}/>
        </div>
        <div>
          <input onChange={change} className='outline-none rounded-md p-2 w-full border-gary-300 border-2 mb-2' placeholder='Title' type="text" name="proofName" id="proofName" />
          <textarea onChange={change} className='outline-none rounded-md p-2 w-full border-gary-300 border-2 mb-2' placeholder='Description' type="text" name="proofDescription" id="proofDescription" />
        </div>
        <div className='"flex items-center gap-6 justify-center mt-6'>
        <button onClick={send} className='bg-blue-600 text-white hover:bg-green-500 rounded-md px-4 py-2 focus:outline-none mr-2'>
            {sending ? <LoadSpinner/> : 'Send Proof'}
        </button>
        <button onClick={toggle} className='bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-900 focus:outline-none'>Cancel</button>
        </div>
        </div>
    </div>
  )
}

export default ProofOfAddressModal