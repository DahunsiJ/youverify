import Individual from '../assets/Images/organizationnew.jpg'
import Organization from '../assets/Images/companies.jpg'
import { useState } from 'react'

function EmployerStepTwo({next, prev, formData, setFormData}) {

    const [employerType, setEmployerType] = useState("individual")
    

    const handleIndividual = ()=>{
       setEmployerType('individual')
    }
    const handleOrganization = ()=>{
       setEmployerType('organization')
    }

    const handleNext = ()=>{
        const nextPage = employerType
        setFormData({...formData, "employerType": employerType})
        next(nextPage)
    }

    const handlePrevious = ()=>{
        const previousPage = 'stepTwo'
        prev(previousPage)
    }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <div className="sm:w-1/2 w-4/5 h-fit relative">
                <h3 className='cursor-pointer absolute top-0 right-0 py-0.5 border-[1px] border-red-600 hover:bg-white hover:text-red-500 px-4 bg-red-500 text-slate-50' onClick={handlePrevious}>back</h3>
            <div className="">
                <h3 className='font-md mb-2'>Choose what best describes you</h3>
            </div>
            <div className="sm:h-60 h-fit flex sm:flex-row flex-col items-center justify-center gap-8 border-2">
                <div onClick={handleIndividual} className={`relative h-full cursor-pointer border-2 after:absolute ${employerType === 'individual' ?"after:bg-orange-600" :"after:bg-black"} after:z-10 after:top-0 after:left-0 after:w-full after:h-full after:opacity-55 text-white`}>
                    <img className='h-full' src={Individual} alt="individual" />
                    <h3 className='absolute bottom-1/2 text-xl z-20 font-semibold left-1/2'>Individual</h3>
                </div>
                <div onClick={handleOrganization} className={`relative h-full cursor-pointer border-2 after:absolute ${employerType === 'organization' ? "after:bg-orange-600" : "after:bg-black"} after:z-10 after:top-0 after:left-0 after:w-full after:h-full after:opacity-55 text-white`}>
                    <img className='h-full' src={Organization} alt="organization" />
                    <h3 className='absolute bottom-1/2 text-xl z-20 font-semibold left-1/3'>Organization</h3>
                </div>
            </div>
            <button className='w-full bg-orange-500 my-4 text-slate-50 py-1 font-medium' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default EmployerStepTwo