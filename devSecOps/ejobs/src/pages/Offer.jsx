// --------version 2------------
import React, { useEffect, useRef, useState } from 'react';
import Header from '../component/Header';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Background from '../assets/Images/letterBack.jpg';
import Background2 from '../assets/Images/offerLetterBack.jpg';
import { updateApplication } from '../redux/applicationList/applicationSlice';
import { toast } from 'react-toastify';
import LoadSpinner from '../component/Modals/LoadSpinner';
import { addNotification } from '../redux/notification/notificationSlice';
import PaymentHandler from '../component/PaymentHandler';

const updateOfferURL = `${process.env.REACT_APP_API_URL}offer/updateOffer`;

const Offer = () => {
  const [loading, setLoading] = useState(null);
  const paymentTrigger = useRef();
  const offerId = useParams().offerId;
  const applicationId = useParams().applicationId;
  const dispatch = useDispatch();
  const fetchOfferURL = `${process.env.REACT_APP_API_URL}offer/getAnOffer`;
  const [offerData, setOfferData] = useState({});
  const [paymentMade, setPaymentMade] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAnOfferDetails = async () => {
      const offerDetails = await axios.post(fetchOfferURL, { offerId }, { withCredentials: true });
      setOfferData(offerDetails.data);
    };
    getAnOfferDetails();
  }, [offerId]);

  const handleOfferResponse = async (response) => {
    setLoading(response);
    try {
      const updateOffer = await axios.put(updateOfferURL, {
        status: response,
        offerId: offerId,
        sender: offerData.employer._id,
        recipient: offerData.candidate._id,
        application: applicationId,
      }, { withCredentials: true });

      const data = updateOffer.data.offer;
      const notification = updateOffer.notification;
      dispatch(updateApplication(data));
      dispatch(addNotification(notification));
      toast.success('Successfully updated');
      navigate('/');
      setLoading(null);
    } catch (error) {
      console.log(error);
      toast.error('Error, please try again');
      setLoading(null);
    }
  };

  const handlePayment = () => {
    paymentTrigger.current.click();
    setPaymentMade(true);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-10'>
      <Header />
      <div className='flex items-center justify-center w-full max-w-4xl'>
        <div
          style={{ backgroundImage: `url(${Background2})`, backgroundSize: 'cover' }}
          className='relative bg-white shadow-xl rounded-xl p-6 sm:p-10 w-full'
        >
          <div className='absolute inset-0 bg-black opacity-50 rounded-xl'></div>
          <div className='relative z-10 text-white'>
            <div className='text-center mb-12'>
              <h1 className='text-2xl sm:text-3xl font-bold uppercase tracking-wider'>Resumption Confirmation for Employment</h1>
            </div>
            <div className='mb-10'>
              <div className='text-lg space-y-2'>
                <h3>{offerData?.candidate?.firstName} {offerData?.candidate?.lastName}</h3>
                <h3>{offerData?.candidate?.localGovernment} {offerData?.candidate?.state}</h3>
                <h3>{offerData?.candidate?.country}</h3>
                <h3>{offerData?.candidate?.phoneNumber}</h3>
              </div>
            </div>
            <div className='mb-8'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div>
                  <span className='font-semibold text-lg'>Resumption Time</span>
                  <p className='text-lg mt-2'>{paymentMade ? offerData?.resumptionTime : <span className='underline hover:text-green-400 cursor-pointer' onClick={handlePayment}>Make payment</span>}</p>
                </div>
                <div>
                  <span className='font-semibold text-lg'>Resumption Date</span>
                  <p className='text-lg mt-2'>{paymentMade ? offerData?.resumptionDate : <span className='underline hover:text-green-400 cursor-pointer' onClick={handlePayment}>Make payment</span>}</p>
                </div>
              </div>
            </div>
            <div className='mb-8'>
              <p className='mb-4 text-lg'>Dear {offerData?.candidate?.firstName},</p>
              <p className='mb-4'>
                After a thorough review of your qualifications and a successful interview with <strong>{offerData?.employer?.companyName}</strong>, we are pleased to inform you that you have been shortlisted for employment. Your skills and experience make you a valuable addition to our team.
              </p>
              <p className='mb-4'>
                You are expected to resume work on <span className='underline'>{paymentMade ? offerData?.resumptionDate : <span className='underline hover:text-green-400 cursor-pointer' onClick={handlePayment}>Make payment</span>}</span> by <span className='underline'>{paymentMade ? offerData?.resumptionTime : <span className='underline hover:text-green-400 cursor-pointer' onClick={handlePayment}>Make payment</span>}</span>. Timely resumption is crucial for onboarding.
              </p>
              <p className='mb-4'>
                You are offered a monthly salary of <span className='underline'>N {offerData?.amount}</span>. After a probation period of three to six months, your salary will be reviewed based on your performance.
              </p>
              <p className='mb-4'>
                If you have any questions or need further information, please do not hesitate to call the number below. We look forward to having you on our team and contributing to our mutual success.
              </p>
            </div>
            <div className='mb-8 text-lg'>
              <h3>Sincerely,</h3>
              <h3><strong>{offerData?.employer?.companyName}</strong></h3>
              <h3>{offerData?.employer?.localGovernment}, {offerData?.employer?.country}</h3>
            </div>
            {paymentMade ? (
              <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
                <button
                  onClick={() => { handleOfferResponse('Accepted'); }}
                  className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200'
                >
                  {loading === 'Accepted' ? <LoadSpinner /> : 'Accept'}
                </button>
                <button
                  onClick={() => { handleOfferResponse('Rejected'); }}
                  className='px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200'
                >
                  {loading === 'Rejected' ? <LoadSpinner /> : 'Reject Offer'}
                </button>
              </div>
            ) : (
              <PaymentHandler />
            )}
            <div className='text-center mt-8'>
              <Link to={`/`} className='px-8 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200'>
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
