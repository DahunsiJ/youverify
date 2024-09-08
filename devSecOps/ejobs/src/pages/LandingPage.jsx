import React, { useEffect, useState } from 'react'
import Logo from '../assets/Images/ejobs-logo2.svg'
import Hire from '../assets/Images/hire.png'
import { Link, useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { FaLocationPin } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import JobPostHomePage from '../component/JobPostHomePage'

function LandingPage() {
    const navigate = useNavigate()
    const loggedInUser = useSelector(state=>state.user)
    const allJobs = useSelector(state=>state.jobListSlice.jobList)
    const [viewJob, setViewJob] = useState(false)
    const [formData, setFormData] = useState({})
    const [filteredJob, setFilteredJob] = useState([])
    
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setViewJob(true)
        if(!formData.jobTitle && !formData.state){
            setFilteredJob(allJobs)
        }
        else if(formData.jobTitle && !formData.state){
            setFilteredJob((allJobs.filter((eachJob)=>{
                return(
                    eachJob.jobTitle.toLowerCase() === formData.jobTitle.toLowerCase()
                )
            })))
        }else if(!formData.jobTitle && formData.state){
            setFilteredJob((allJobs.filter((eachJob)=>{
                return(
                    eachJob.state.toLowerCase() === formData.state.toLowerCase()
                )
            })))
        }else{
            setFilteredJob((allJobs.filter((eachJob)=>{
                return(
                    eachJob.jobTitle.toLowerCase() === formData.jobTitle.toLowerCase() &&
                    eachJob.state.toLowerCase() === formData.state.toLowerCase()
                )
            })))
        }
    }
    
  return (
    <div className='py-2 text-sm px-16 w-screen h-screen bg-orange-950 text-white'>
        {/* --------------Header Section-------------- */}
        <div className='flex items-center justify-between'>
            <div className='flex h-fit items-center justify-start gap-4'>
                <img className='w-24 border-r-2 pr-3 border-gray-500' src={Logo}/>
                <div>
                    <h1 className='text-3xl font-bold'>JOBS</h1>
                    <p>By Essensial</p>
                </div>
            </div>
            <div className='flex items-center gap-3 font-semibold'>
                <Link to="/signin">Login</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
        {/* -----------Main Section---------------- */}
        <section className='mt-20'>
            <div className='flex items-center justify-between'>
                <form className='bg-white p-5 rounded-sm text-black w-1/2'>
                    <h1 className='font-semibold text-3xl mb-3'>Find a job with <Link to="/about" className=''>Essential</Link></h1>
                    <p className='mb-2'>"Explore a vast array of job opportunities from renowned companies worldwide. Whether you prefer remote or on-site work, your dream career awaits.</p>
                    <div className='border-gray-300 border-2 rounded-sm p-2 flex items-center justify-start gap-2'>
                        <BiSearch className='text-gray-300'/>
                        <input onChange={handleChange} className='text-gray-800 w-full text-lg outline-none' name='jobTitle' type="text" placeholder='Search for keyword'/>
                    </div>
                    <div className='border-gray-300 mt-4 border-2 rounded-sm p-2 flex items-center justify-start gap-2'>
                        <FaLocationPin className='text-gray-300'/>
                        <input onChange={handleChange} className='text-gray-800 w-full text-lg outline-none' name='state' type="text" placeholder='Search by location'/>
                    </div>
                    <button onClick={handleSubmit} className='bg-green-600 mt-6 text-white px-6 py-2 rounded-sm'>Submit</button>
                </form>
                <div>
                    <img className='ml-10 w-3/4' src={Hire} alt="" />
                </div>
            </div>
            <div className='mt-4'>
            <h3 className='mb-2'>Popular searches:</h3>
            <Link className='mr-2 underline' to="/">Full Time</Link>
            <Link className='mr-2 underline' to="/">Customer Service</Link>
            <Link className='underline' to="/">Software Engineer</Link>
            </div>
        </section>
        <section className='mt-10 p-10 bg-white rounded-sm '>
                <h1 className='text-gray-700 text-2xl mb-4 font-semibold'>Search Result</h1>
                {filteredJob.map((eachJob, index)=>{
                    return(
                        <JobPostHomePage
                        key={index}
                        employerName={eachJob.employerName}
                        salary={eachJob.state}
                        state={eachJob.state}
                        workType={eachJob.workType}
                        jobTitle={eachJob.jobTitle}
                        experienceLength={eachJob.experienceLength}
                />
                    )
                })}
        </section>
    </div>
  )
}

export default LandingPage