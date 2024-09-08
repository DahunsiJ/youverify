// ---------version 2-----------
import React, { useState } from 'react';
import ProfilePix from '../../assets/Images/interview.jpg';
import MessageModal from '../Modals/Mesage';
import { CgMoreVertical } from 'react-icons/cg';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Checkbox, Dropdown, Table } from 'flowbite-react';
import JobSeekerDetails from '../Modals/JobSeekerDetails';

function JobSeeker({data}) {
  const apiRoute = process.env.REACT_APP_API_URL;
  const [showEmployee, setShowEmployee] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const updateJobSeekerURL = `${apiRoute}jobseeker/updateJobSeeker`;


  const handleMessage = ()=>{
    setShowMessage(!showMessage)
  }


  const handleEmployee = ()=>{
    setShowEmployee(!showEmployee)
  }

  // ---------More button is toggled base on the current index selection--------------------
  const handleMore = (indexToSet)=>{
    currentIndex === null ? setCurrentIndex(indexToSet) : setCurrentIndex(null)
  }

  const handleBlackList = (candidateId)=>{
    // ------Update jobSeeker to blacklist
    try{
      const blacklistJobSeeker = axios.put(updateJobSeekerURL, {
        jobSeekerId: candidateId,
        isBlacklisted: true
      }, {withCredentials: true})
      setCurrentIndex(null)
      toast.success('success')
    }catch(error){
      toast.error('Error')
      console.log(error)
    }
  }

  return (
    // ----------version 2------------
    <div className="">
      <Table hoverable className='hover:text-black text-base'>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Profile</Table.HeadCell>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
          <Table.HeadCell>Application</Table.HeadCell>
          <Table.HeadCell>Report made</Table.HeadCell>
          <Table.HeadCell>Report gotten</Table.HeadCell>
          <Table.HeadCell>Interviews</Table.HeadCell>
          <Table.HeadCell>Account balance</Table.HeadCell>
          <Table.HeadCell>Blasklisted</Table.HeadCell>
          <Table.HeadCell>
            Edit
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((eachCandidate)=>{
            return(
              <Table.Row className='border-2 border-blue-900'>
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-500">
                  <img
                    alt="profile"
                    className="w-8 h-8 rounded-full object-cover"
                    src={eachCandidate.avatar}
                  />
                </Table.Cell>
                <Table.Cell>{eachCandidate?.firstName}</Table.Cell>
                <Table.Cell>{eachCandidate.lastName}</Table.Cell>
                <Table.Cell>{eachCandidate.appliedJobs?.length || 0}</Table.Cell>
                <Table.Cell>{eachCandidate.reportsMade?.length || 0}</Table.Cell>
                <Table.Cell>{eachCandidate.reportsGotten?.length || 0}</Table.Cell>
                <Table.Cell>{eachCandidate?.interviews || 0}</Table.Cell>
                <Table.Cell>{eachCandidate?.accountBalance || 0}</Table.Cell>
                <Table.Cell>{eachCandidate?.isBlacklisted ? "True" : "False" }</Table.Cell>
                <Table.Cell>
                <Dropdown label={<span className="text-gray-900">Action</span>} position="bottom-start">
                 <Dropdown.Item onClick={handleMessage}>Message</Dropdown.Item>
                 <Dropdown.Item onClick={()=>{handleBlackList(eachCandidate._id)}}>Blacklist</Dropdown.Item>
                 <Dropdown.Item onClick={()=>{handleEmployee()}}>Show data</Dropdown.Item>
               </Dropdown>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
      {showMessage && <MessageModal toggle={handleMessage}/>}
      {showEmployee && <JobSeekerDetails toggle={handleEmployee}/>}
    </div>
  );
}

export default JobSeeker;
