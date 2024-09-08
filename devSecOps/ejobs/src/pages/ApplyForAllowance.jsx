import React from 'react'
import Header from '../component/Header'
import BackgroundImage from "../assets/Images/companies.jpg"
import FooterComponent from '../component/Footer'
import { Link } from 'react-router-dom'

function ApplyForAllowance() {
  return (
    <div>
        <div className='mb-20'>
            <Header />
            <div style={{
            background: `url(${BackgroundImage})`,
            backgroundRepeat: "no-repeat",
          }} className='h-72 text-sm relative bg-cover after:absolute after:bg-black after:z-10 after:top-0 after:left-0 after:w-full after:h-full after:opacity-55'>
            <h2 className='font-bold text-white text-xl absolute top-1/2 left-1/2 z-20'>Apply for job Allowance</h2>
            </div>
            <div className='w-2/3 text-sm mx-auto mt-10 border-2 border-slate-400 rounded-lg'>

            <p className='font-semibold text-slate-400 text-center w-2/4 mx-auto mt-8'> Job allowance offers you the sum of ₦5000 - ₦10000 monthly 
to cover your transportation allowance pending when you 
receive your monthly salary. This amount will be deducted 
from your monthly salary.</p>
<h2 className='text-2xl font-slate-400 py-10 text-center font-bold'>
Fill in the form
</h2>
<form action="" className='border-slate-400 text-sm border-2 p-4 mb-10 flex flex-col items-start gap-6 w-3/4 mx-auto'>
    <h3 className='text-center text-xl font-semibold '>Are you a job or an employee?</h3>
    <select name="" id="" className='w-2/3 border-2 border-slate-400 rounded-lg p-2'>
        <option value="">Please select</option>
        <option value="">Yes</option>
        <option value="">No</option>
    </select>
    <div className='flex items-center justify-between gap-5'>
        <div>
            <label className='block' htmlFor="">Surname</label>
            <input className='border-2 border-slate-400 mt-2 rounded-md p-2' type="text" />
        </div>
        <div>
            <label className='block' htmlFor="">First name</label>
            <input className='border-2 border-slate-400 mt-2 rounded-md p-2' type="text" />
        </div>
        <div>
            <label className='block' htmlFor="">Middle name</label>
            <input className='border-2 border-slate-400 mt-2 rounded-md p-2' type="text" />
        </div>
    </div>
    <div className='w-full'>
        <h2 className='mb-2'>Location</h2>
        <div className='mb-2'>
            <label htmlFor="">Street address</label>
            <input className='w-full border-2 p-2 rounded-lg' type="text" placeholder='street address'/>
        </div>
        <div className='mb-2'>
            <label htmlFor="">State</label>
            <select className='w-full border-2 p-2 rounded-lg' name="" id="">
                <option value="">Abia</option>
                <option value="">Adamawa</option>
                <option value="">Akwa Ibom</option>
                <option value="">Anambra</option>
            </select>
        </div>
        <div className='mb-2'>
            <label htmlFor="">Street address</label>
            <select className='w-full border-2 p-2 rounded-lg' name="" id="">
                <option value="">Afghanistan</option>
                <option value="">Algeria</option>
                <option value="">Almenia</option>
                <option value="">Bangkok</option>
            </select>
        </div>
        <div className='flex items-center justify-between my-4'>
            <h3>Guarantor&apos;/personal form</h3>
            <button className='px-2 py-1 bg-orange-500 text-white'><Link to="/1234/guarantorForm">Proceed to fill the form</Link></button>
        </div>
            <p className='text-slate-400'><strong className='text-black'>Note: </strong>Please download both the guarantors form and the personal form, 
the personal form is to be filled by you while the guarantors form has to 
be duplicated and be given to your 2 guarantors for them to fill and 
then, come to our office for submission</p>
    </div>
    <button className='w-full py-2 text-white bg-orange-500'>Submit</button>
</form>
            </div>
        </div>
        <FooterComponent/>
    </div>
  )
}

export default ApplyForAllowance