import React from 'react'

function DashboardMenu({logo, title}) {
  return (
    <div className='my-5 p-2 rounded-md hover:bg-gray-950'>
        <div className='flex items-center justify-start text-white font-semi cursor-pointer  gap-5'>
            {logo}
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default DashboardMenu