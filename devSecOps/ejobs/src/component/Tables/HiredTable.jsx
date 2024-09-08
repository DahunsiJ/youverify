import React, { useState } from 'react'
import { CgMore } from 'react-icons/cg';
import { Link, Navigate } from 'react-router-dom';
import MessageModal from '../Modals/Mesage';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const HiredTable = ({currentList, handleNavigation, data})=> {

  const [viewMoreStates, setViewMoreStates] = useState(Array(data.length).fill(false));
  const [toggleModal, setToggleModal] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleView = (index) => {
    setViewMoreStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleModal = ()=>{
    setToggleModal(!toggleModal);
    toggleModal ? setModalIsOpen(true):setModalIsOpen(false)
  }

  return (
    <div className='mt-6 relative text-sm'>
        <table className='mx-auto overflow-x-scroll'>
              <thead>
                  <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Applied</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Hired</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">More</th>
          </tr>
              </thead>
              <tbody>
                {currentList.map((eachData, index)=>{
                    return(
                        <tr key={index} className="cursor-pointer hover:bg-orange-100 hover:text-slate-50 mt-4">
                            <td className="border-2 border-orange-50 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{index + 1}</td>
                            <td className="border-2 border-orange-50 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{`${eachData.applicant[0].firstName} ${eachData.applicant[0].lastName}`}</td>
                            <td className="border-2 border-orange-50 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachData.job.jobTitle}</td>
                            <td className="border-2 border-orange-50 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachData.createdAt.split('T')[0]}</td>
                            <td className="border-2 border-orange-50 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachData.createdAt.split('T')[1].split(".")[0]}</td>
                            <td className="border-2 border-orange-50 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachData.updatedAt}</td>
                            <td className={`border-2 border-orange-50 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider`}>{eachData.status}</td>
                            <td onClick={() => handleView(index)} className='relative hover:text-orange-700 hover:bg-orange-200 cursor-pointer'>
                              <CgMore className='mx-auto' />
                              <div className={`${viewMoreStates[index] ? "block" : "hidden"} absolute -right-48 z-10 -bottom-24 bg-orange-950 p-4 text-white w-48 rounded-sm`}>
                                <button className='py-1 rounded-sm hover:bg-white w-full text-start px-2 hover:text-orange-950'><Link to={`/${eachData.jobId}/employeeData/${eachData.applicantId}`}>Report Applicant</Link></button>
                                <button onClick={handleModal} className='py-1 rounded-sm hover:bg-white w-full text-start px-2 hover:text-orange-950'>Send a Message</button>
                                <button className='py-1 rounded-sm hover:bg-white w-full text-start px-2 hover:text-orange-950'><Link to={`tel:9123280394`}>Call Applicant</Link></button>
                                <button className='py-1 rounded-sm hover:bg-white w-full text-start px-2 hover:text-orange-950'><Link to={`/${eachData.applicantId}/applicantProfile/${eachData.jobId}`}>View Profile</Link></button>
                              </div>
                          </td>
                        </tr>
                    )
                })}
              </tbody>
            </table>
            {toggleModal && <MessageModal toggle={handleModal}/>}
    </div>
  )
}

export default HiredTable