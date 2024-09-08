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
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentList.map((eachData, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{eachData.applicantName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{eachData.position}</td>
              <td className="px-6 py-4 whitespace-nowrap">{eachData.createdAt.split('T')[0]}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  eachData.status === 'Hired' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {eachData.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                  <FaUser className="inline mr-1" /> View Profile
                </button>
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                  <FaEnvelope className="inline mr-1" /> Message
                </button>
                <button className="text-indigo-600 hover:text-indigo-900">
                  <FaPhone className="inline mr-1" /> Call
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            {toggleModal && <MessageModal toggle={handleModal}/>}
    </div>
  )
}

export default HiredTable