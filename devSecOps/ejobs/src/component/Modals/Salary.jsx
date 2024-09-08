import React from 'react'
import { Link } from 'react-router-dom'

function Salary() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='p-10 bg-white shadow-lg'>
            <div className='flex items-start justify-start gap-10 mb-10'>
            <div className='h-52 w-56 p-10 border-2 border-gray-300 shadow-lg rounded-lg'>
                <h3 className='border-b-gray-400 mb-2 border-b-2 py-2'>Total Salary</h3>
                <h1 className='text-2xl font-semibold'>#94,000.00</h1>
            </div>
            <div className='h-52 w-56 p-10 border-2 border-gray-300 shadow-lg rounded-lg'>
                <h3 className='border-b-gray-400 mb-2 border-b-2 py-2'>Take home</h3>
                <h1 className='text-2xl font-semibold'>#45,000.00</h1>
                <p className='text-gray-400 text-sm mt-3'>At 25% off</p>
            </div>
            </div>
            <div>
                <li className='my-4 list-none flex items-center hover:bg-orange-100 justify-between gap-20'>
                    <input type="checkbox" name="" id="" />
                    <h3>10%</h3>
                    <div className='w-5 h-5 rounded-full bg-green-500'></div>
                    <h3 className='w-60'>e-job partnership</h3>
                    <h3>#25,000</h3>
                    <button className='bg-orange-500 px-4 py-1 text-white rounded-2xl'>Read more</button>
                </li>
                <li className='my-4 list-none flex items-center hover:bg-orange-100 justify-between gap-20'>
                    <input type="checkbox" name="" id="" />
                    <h3>15%</h3>
                    <div className='w-5 h-5 rounded-full bg-red-500'></div>
                    <h3 className='w-60'>eJA</h3>
                    <h3>#35,000</h3>
                    <button className='bg-orange-500 px-4 py-1 text-white rounded-2xl'>Read more</button>
                </li>
                <li className='my-4 list-none flex items-center hover:bg-orange-100 justify-between gap-20'>
                    <input type="checkbox" name="" id="" />
                    <h3>15%</h3>
                    <div className='w-5 h-5 rounded-full bg-blue-500'></div>
                    <h3 className='w-60'>Benefit</h3>
                    <h3>#40,000</h3>
                    <button className='bg-orange-500 px-4 py-1 text-white rounded-2xl'>Read more</button>
                </li>
            </div>
        </div>
    </div>
  )
}

export default Salary