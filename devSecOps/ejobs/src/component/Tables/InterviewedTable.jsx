import React, { useState } from 'react';
import { CgMore } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNotification } from '../../redux/notification/notificationSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

function InterviewTable({data}) {
  const updateApplication = `${process.env.REACT_APP_API_URL}application/updateApplication`;
  const currentUser = useSelector(state=>state.user.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  
  const handleAccept = async(applicationId, applicant,index)=>{
    navigate(`/makeOffer/${currentUser._id}/${applicant[index]._id}/${applicationId}/${index}`)
  }

  const handleReject = async(applicationId, index)=>{
    try{
      const updateCurrentApplication = await axios.put(updateApplication, {applicationId:applicationId, status: 'Rejected'})
      dispatch(addNotification(updateCurrentApplication.data))
      toast.success('Successfully updated')
    }catch(error){
      toast.error('Error try again')
    }
  }

  return (
    <div className='mt-6 text-sm'>
      <table className="border-b-2 border-orange-300 mx-auto overflow-x-scroll">
        <thead>
          <tr className='px-2 py-2'>
            <th className='px-4 py-4'></th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Date of interview</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Time of interview</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Time remaining</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData, index) => {
            return (
              <tr key={index} className="hover:text-slate-50">
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"></td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{`${eachData.applicant[index].firstName} ${eachData.applicant[index].lastName}`}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{eachData.position}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{eachData.interviews[eachData.interviews.length - 1].interviewDate || 'N/A'}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{eachData.interviews[eachData.interviews.length - 1].interviewTime || 'N/A'}</td>
                <td className={`px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider`}>{eachData.status}</td>
                <td onClick={(e)=>{handleReject(eachData._id, index)}} className={`hover:bg-gray-300 hover:text-red-300 bg-gray-500 cursor-pointer px-6 py-2 text-left text-xs font-medium text-grey-700 uppercase tracking-wider`}>Reject</td>
                <td onClick={(e)=>{handleAccept(eachData._id, eachData.applicant, index)}} className={`hover:bg-green-300 bg-green-500 cursor-pointer px-6 py-2 text-left text-xs font-medium text-grey-700 uppercase tracking-wider`}>Accept</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default InterviewTable;
