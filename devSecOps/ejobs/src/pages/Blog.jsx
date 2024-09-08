import React from 'react'
import Header from '../component/Header'
import FooterComponent from '../component/Footer'

function Blog() {
  return (
    <div>
        <div className='mx-24'>
            <Header/>
            <div className='text-sm'>
                <h2 className='text-xl border-b-2 border-orange-500 px-4 mb-4'>Latest news on joblink</h2>
                <div className='h-screen flex items-center justify-center'>
                    <h2 className='bg-red-500 text-white text-lg px-4 py-2 rounded-sm'>No published post yet!</h2>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
  )
}

export default Blog