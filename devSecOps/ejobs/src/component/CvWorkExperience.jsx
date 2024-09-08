import React from 'react'

function CvWorkExperience({title, year, companyName, jobDescription}) {
  return (
    <div className='mb-6'>
        <div className='flex items-start justify-between'>
            <h3 className='font-semibold'>{title}</h3>
            <h3 className='font-semibold'>{year}</h3>
        </div>
        <h3 className='font-semibold mb-2'>{companyName}</h3>
        <div className='ml-6'>
            <h3 className='font-semibold'>Job Description</h3>
            <p>{jobDescription}</p>
        </div>
    </div>
  )
}

export default CvWorkExperience