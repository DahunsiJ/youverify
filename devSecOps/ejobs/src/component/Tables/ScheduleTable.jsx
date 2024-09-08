import axios from 'axios';
import React, { useState } from 'react';
import { CgMore } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { addNotification } from '../../redux/notification/notificationSlice';
import { toast } from 'react-toastify';

function ScheduleTable({ currentList, handleNavigation, data, title, handleInterview }) {
  const [viewMoreStates, setViewMoreStates] = useState(Array(data.length).fill(false));
  const updateApplication =  `${process.env.REACT_APP_API_URL}application/updateApplication`;
  const dispatch = useDispatch()

  const handleView = (index) => {
    setViewMoreStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleUpdate = async (applicationId)=>{
    try{
      const updateCurrentApplication = await axios.put(updateApplication, {applicationId:applicationId, status: 'Interviewed'})
      dispatch(addNotification(updateCurrentApplication.data))
      toast.success('Successfully updated')
    }catch(error){
      toast.error('Error try again')
    }
  }

  return (
    <div className='mt-6 text-sm'>
      <table className='mx-auto'>
        <thead>
          <tr className='px-2 py-2 border-b-2 border-orange-300'>
            <th className='px-4 py-4'>S/N</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Date of interview</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Time of interview</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Time remaining</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Remark</th>
            <th className="px-4 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData, index) => {
            const timeRemaining = Date.now();
            const timeOfInterview = eachData.interviews[index].interviewTime;
            const dateOfInterview = eachData.interviews[index].interviewDate;
            const interviewDay = new Date(`${dateOfInterview}T${timeOfInterview}:00`);
            const timeLeftInMilliseconds = interviewDay - timeRemaining;
            const timeLeftInHours = (timeLeftInMilliseconds / (3600000 * 24)).toFixed(2);

            return (
              <tr key={index} className="hover:bg-orange-100 hover:text-slate-50">
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{index + 1}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{`${eachData.applicant[index].firstName} ${eachData.applicant[index].lastName}`}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{eachData.job.jobTitle}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{eachData.interviews[index].interviewDate}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{eachData.interviews[index].interviewTime}</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">{`${timeLeftInHours}, hrs`}</td>
                <td className={`px-6 py-3 text-left text-xs font-medium text-green-700 uppercase tracking-wider`}>{eachData.status}</td>
                <td className={`px-6 cursor-pointer py-3 text-left text-md font-xs uppercase tracking-wider`}>
                  <button className='text-gray-100 hover:text-green-100 hover:bg-green-500 mr-3 bg-gray-400 px-2 py-1' onClick={(e) => { handleInterview(e) }}>Start</button>
                  <button onClick={()=>{handleUpdate(eachData._id)}} className='text-gray-100 hover:text-green-100 hover:bg-green-500 bg-gray-400 px-2 py-1'>Interview Done</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;
