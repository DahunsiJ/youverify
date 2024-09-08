import { MdLocationPin, MdStar } from 'react-icons/md'
import { Link } from 'react-router-dom'

function JobPostHomePage({employerName, salary, state, workType, experienceLength, jobTitle, jobDuration, id}) {
  return (
    <div className="sm:p-10 p-5 w-full text-black bg-slate-50 border-2 border-slate-300 rounded-md mb-4 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start justify-between">
            <div className="bg-orange-500 z-10 absolute -top-[14px] -left-[65px] w-[200px] h-[100px] rotate-[314.5deg]">
            </div>
                <MdStar className='w-6 h-6 absolute top-6 sm:left-6 left-0 text-slate-50 z-20'/>
            <div className="relative z-20 w-48">
                <h1 className='sm:text-xl text:lg mb-2 font-semibold uppercase'>{jobTitle}</h1>
                <h2>{employerName}</h2>
            </div>
            <div className="relative flex items-start z-20 sm:mx-4 mx-0">
                <MdLocationPin className='text-orange-600 w-6 h-6'/>
                <h2 className='font-semibold text-slate-500 text-sm'>{state}</h2>
            </div>
            <h2 className='z-20 relative font-semibold sm:mx-4 mx-0 text-slate-500 text-sm'>Salary: {salary}</h2>
            <h2 className='z-20 relative font-semibold text-slate-500 text-sm'>{workType}</h2>
        </div>
        <div className="border-t-2 pt-2 mt-2 flex items-center justify-start gap-8 font-semibold">
            <div className="">
                <h3 className="">Exprience Level: {experienceLength}</h3>
                <h3>Posted: {jobDuration || 'N/A'}</h3>
            </div>
                {id ? <h2><Link className='text-orange-500' to={`job/${id}`}>Apply</Link></h2> :<Link className='text-orange-500' to='/signin'>Signin</Link>}
        </div>
    </div>
  )
}

export default JobPostHomePage
