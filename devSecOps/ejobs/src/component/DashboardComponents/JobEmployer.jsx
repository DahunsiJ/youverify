// -----------Version 1--------------

import React, { useState } from 'react';
import ProfilePix from '../../assets/Images/group.jpg';
import { CgProfile } from 'react-icons/cg';
import MessageModal from '../Modals/Mesage';
import axios from 'axios';
import LoadSpinner from '../Modals/LoadSpinner';
import { toast } from 'react-toastify';
import { Dropdown, Table } from 'flowbite-react';



function JobEmployer({data}) {
  const [showMessage, setShowMessage] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const updateJobEmployerURL = `${process.env.REACT_APP_API_URL}jobrecruiter/updateJobEmployer` 
  const [isLoading, setIsloading] = useState(false)


  const handleMessage = ()=>{
    setShowMessage(!showMessage)
  }

  const handleMore = (indexToShow)=>{
    currentIndex === null ? setCurrentIndex(indexToShow) : setCurrentIndex(null)
  }


  const handleBlackList = async(employerId)=>{

    try {
      setIsloading(true)
      const blacklistUser = await axios.put(updateJobEmployerURL, {
        jobEmployerId:employerId,
        isBlacklisted: true
      }, {withCredentials: true})
      setIsloading(false)
      toast.success('Success')
      setCurrentIndex(null)
    } catch (error) {
      console.log(error)
      setIsloading(false)
      setCurrentIndex(null)
      toast.error('error try again')
    }
  }

  return (
    <div className="p-6 w-fit bg-white shadow rounded-lg">
      <Table className="w-full overflow-x-scroll text-base">
        <Table.Head>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jobs list</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reports Made</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reports Received</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blacklisted</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {data.map((eachCandidate, index) => (
            <Table.Row className={`hover:bg-gray-100 mt-4 ${eachCandidate.isBlacklisted ? 'bg-red-500 text-white hover:text-gray-800' : "text-gray-500"}`} key={index}>
              <Table.Cell >{index + 1}</Table.Cell>
              <Table.Cell >
                {eachCandidate.avatar ? <img alt="profile" className="w-10 h-10 rounded-full object-cover" src={eachCandidate.avatar||ProfilePix} /> : <CgProfile className='w-6 h-6'/>}
              </Table.Cell>

              <Table.Cell >{eachCandidate.companyName}</Table.Cell>
              <Table.Cell >{`${eachCandidate.localGovernment} ${eachCandidate.state}`}</Table.Cell>
              <Table.Cell >{eachCandidate.listedJobs?.length}</Table.Cell>
              <Table.Cell >{eachCandidate.reportsMade?.length || 0}</Table.Cell>
              <Table.Cell >{eachCandidate.reportsGotten?.length || 0}</Table.Cell>
              <Table.Cell >{eachCandidate.employers?.length}</Table.Cell>
              <Table.Cell >{eachCandidate.isBlacklisted ? 'True' : 'False'}</Table.Cell>
              <Table.Cell >
                <Dropdown>
                  <Dropdown.Item onClick={handleMessage}>Message</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{handleBlackList(eachCandidate._id)}}>{isLoading ? <LoadSpinner/> : 'Blacklist'}</Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {showMessage && <MessageModal toggle={handleMessage}/>}
    </div>
  );
}

export default JobEmployer;
