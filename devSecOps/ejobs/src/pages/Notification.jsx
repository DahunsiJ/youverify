import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import MessageInfo from '../component/MessageInfo'
import { useSelector } from 'react-redux';
import axios from 'axios';


function Notification() {
  const allNotifications = useSelector((state)=> state.notification.notificationList)
  const [notificationDetails, setNotificationDetails] = useState([])
  const currentUser = useSelector((state)=>state.user.currentUser)
  const notificationURL = currentUser.userType === 'jobSeeker' ? `${process.env.REACT_APP_API_URL}notification/getUserNotification/` : `${process.env.REACT_APP_API_URL}notification/getEmployerNotification/`
  const getANotification = `${process.env.REACT_APP_API_URL}notification/getANotification`
  const userType = currentUser.userType

  // ----fetch notificaticatin details
  useEffect(()=>{
    const fetchAllNotification = async()=>{
      const notificationData = await Promise.all(
        allNotifications.map(async(eachNotification)=>{
           const response = await axios.post(getANotification, {notificationId: eachNotification}, {withCredentials: true})
            return response.data
          })
      )
      setNotificationDetails(notificationData)
    }
    fetchAllNotification()
  },[allNotifications, getANotification])
  return (
    <div className="">
      <div className="sm:mx-24 mx-4">
        <Header/>
        <div className="text-sm">
          <div className="mt-8">
            <h1 className='text-xl text-slate-400 mb-4'>Notification</h1>
            <div className=""></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            {
              notificationDetails.map((eachDetails, index)=>{
                return(
                  <MessageInfo key={index} data={eachDetails} userType={userType}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification