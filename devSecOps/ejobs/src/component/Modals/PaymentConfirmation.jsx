import React from 'react'
import Logo from '../../assets/Images/ejobs-logo.svg'
import { FaProcedures } from 'react-icons/fa'
import { VscOutput } from 'react-icons/vsc'
import { MdOutbox } from 'react-icons/md'


function PaymentConfirmation() {
  return (
    <div>
        <div className='py-6 px-10'>
            <img className='w-32' src={Logo} alt="" />
            <div className='w-full flex flex-col mt-20 items-center justify-center'>
                <MdOutbox className='w-16 h-16 text-red-500'/>
                    <h3 className='px-3 text-lg font-semibold text-gray-400 mt-4'>Since you have done that, leave the rest to us</h3>
                <div className='flex items-center justify-center gap-5 mt-10'>
                    <button className='px-4 py-1 border-2 border-gray-300 rounded-md'>attach a note with this payment about James</button>
                    <button className='px-16 py-1 bg-orange-500 text-white rounded-md'>Continue</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentConfirmation