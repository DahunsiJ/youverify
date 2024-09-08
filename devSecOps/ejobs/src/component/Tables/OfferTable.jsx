import React, { useState, useCallback } from 'react'
import { CgMore } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import MessageModal from '../Modals/Mesage';

const OfferTable = ({ currentList, handleNavigation, data }) => {
  const [viewMoreStates, setViewMoreStates] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentApplicant, setCurrentApplicant] = useState('');

  const handleView = useCallback((index) => {
    setViewMoreStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }, []);

  const handleModal = useCallback(() => {
    setModalIsOpen(prev => !prev);
  }, []);

  const selectApplicant = useCallback((applicantName) => {
    setCurrentApplicant(applicantName);
  }, []);

  return (
    <div className='mt-6 relative text-sm'>
      <table className='mx-auto overflow-x-scroll'>
        <thead>
          <tr className="px-2 py-2 border-b-2 border-orange-300">
            <th className='px-4 py-4'>S/N</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase">
              Name
            </th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase">
              Description
            </th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase">
              Date Applied
            </th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase">
              Time Applied
            </th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase">
              Review
            </th>
            <th className="px-4 py-4 text-sm font-medium text-gray-500 uppercase">
              Remark
            </th>
            <th className="px-4 py-4 text-sm font-medium text-gray-500 uppercase">
              More
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log({first: currentList})}
          {currentList?.map((eachData, index) => (
            <tr key={index} className="cursor-pointer hover:bg-orange-100 hover:text-slate-50 mt-4">
              <td className="text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{index + 1}</td>
              <td className="text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{`${eachData.applicant[0].firstName} ${eachData.applicant[0].lastName}`}</td>
              <td className="text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachData.job.jobTitle}</td>
              <td className="text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachData.createdAt.split('T')[0]}</td>
              <td className="text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachData.createdAt.split('T')[1].split(".")[0]}</td>
              <td className="text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachData.availability}</td>
              <td className={`text-xs font-medium text-gray-500 px-6 py-4 tracking-wider`}>{eachData.status}</td>
              <td onClick={() => handleView(index)} className='text-xs font-medium text-gray-500 px-6 py-4 tracking-wider relative hover:text-orange-700 hover:bg-orange-200 cursor-pointer'>
                <CgMore className='mx-auto' />
                <div className={`${viewMoreStates[index] ? "block" : "hidden"} absolute -right-48 z-10 -bottom-24 bg-orange-950 p-4 text-white w-48 rounded-sm`}>
                  <button onClick={() => { handleModal(); selectApplicant(eachData.applicantName); }} className='py-1 rounded-sm hover:bg-white w-full text-start px-2 hover:text-orange-950'>Send a Message</button>
                  <button className='py-1 rounded-sm hover:bg-white w-full text-start px-2 hover:text-orange-950'><Link to={`tel:${eachData.applicant[0].phoneNumber}`}>Call Applicant</Link></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalIsOpen && <MessageModal toggle={handleModal} ApplicantName={currentApplicant} />}
    </div>
  )
}

export default React.memo(OfferTable)