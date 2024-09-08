import JobSeeker from '../assets/Images/recruit.jpg'
import Employer from '../assets/Images/interview.jpg'
import { useState } from 'react'

function StepTwo(props) {
    const [userType, setUserType] = useState(null)
    const {next, formData, setFormData, prev} = props
    const previousState = formData

    // handle status change
    const handleJobseeker = ()=>{
        setFormData({...formData, userType : "jobSeeker"})
        setUserType('jobSeeker')
    }
    
    const handleEmployer = ()=>{
        setFormData({...formData, userType : "jobEmployer"})
        setUserType('jobEmployer')
    }

    const handleNext = ()=>{
        let nextPage
        if(userType === "jobSeeker" || userType === null){
            setFormData({...formData, userType:"jobSeeker"})
            nextPage = 'stepThree'
        }
        if(userType === "jobEmployer") nextPage = 'employerTwo'
        next(nextPage);
    }

    const handlePrevious = ()=>{
        const previousPage = 'stepOne'
        prev(previousPage)
    }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <div className="sm:w-1/2 w-4/5 relative">
                <button className='cursor-pointer sm:absolute relative text-center top-0 right-0 py-0.5 border-[1px] border-red-600 hover:bg-white hover:text-red-500 px-4 bg-red-500 text-slate-50' onClick={handlePrevious}>back</button>
            <div className="">
                <h3 className='font-md mb-2 text-center'>Choose what best describes you</h3>
            </div>
            <div className="sm:flex sm:flex-row flex-col items-center justify-center gap-8 border-none">
                <div onClick={handleJobseeker} className={`relative w-1/2 cursor-pointer border-2 after:absolute ${userType === 'jobSeeker' ? "after:bg-orange-600":"after:bg-black"} after:z-10 after:top-0 after:left-0 after:w-full after:h-full after:opacity-55`}>
                    <img src={JobSeeker} alt="job seeker" />
                    <h3 className='z-20 text-white absolute bottom-1/2 text-xl font-semibold left-1/2'>Job seeker</h3>
                </div>
                <div onClick={handleEmployer} className={`relative w-1/2 cursor-pointer border-2 after:absolute ${userType === 'jobEmployer' ? "after:bg-orange-600":"after:bg-black"} after:z-10 after:top-0 after:left-0 after:w-full after:h-full after:opacity-55`}>
                    <img src={Employer} alt="job employer" />
                    <h3 className='z-20 text-white absolute bottom-1/2 text-xl font-semibold left-1/2'>Employer</h3>
                </div>
            </div>
            <button className='w-full bg-orange-500 my-4 text-slate-50 py-1 font-medium' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default StepTwo