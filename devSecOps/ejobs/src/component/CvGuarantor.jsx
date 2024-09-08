import React from 'react'

function CvGuarantor({guarantorName, guarantorCompany, phoneNumber}) {
  return (
    <div className='mb-2'>
        <h3 className='font-semibold'>{guarantorName} - {guarantorCompany}</h3>
        <span className='font-medium'>{phoneNumber}</span>
    </div>
  )
}

export default CvGuarantor