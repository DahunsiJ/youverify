import React, { useState } from 'react';
import Email from '../assets/Images/email.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadSpinner from '../component/Modals/LoadSpinner';

const VerifyToken = () => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError('');
    if (!token) {
      setError('Please enter the verification code.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/verify-token`, { token });
      if (response.status === 200) {
        toast.success('Email verified successfully!');
        navigate('/signin');
      } else {
        setError('Invalid verification code.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen bg-[#405D72] sm:px-10 px-5 flex items-center justify-center'>
      <div 
        className="w-screen sm:h-screen h-auto flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="#1A4870" fill-opacity="1" d="M0,96L120,112C240,128,480,160,720,160C960,160,1200,128,1320,112L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"%3E%3C/path%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src={Email} className='sm:w-32 w-20 w:h-32 h-20 object-cover' alt='email icon'/>
        <h1 className='sm:mt-20 text-white text-lg sm:text-2xl font-semibold'>Verify the code sent to your email</h1>
        <p className='mt-2 text-base text-white text-center sm:text-md'>Please enter the verification code that was sent to your email to complete your signup.</p>
        
        <input
          type="text"
          placeholder="Enter verification code"
          className="mt-6 w-4/5 text-base font-semibold sm:w-1/3 py-2 px-4 text-center border-2 border-orange-500 rounded-lg"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        {error && <span className="text-red-500 mt-2">{error}</span>}

        <button
          onClick={handleSubmit}
          className="mt-6 bg-orange-500 text-white py-2 px-8 rounded-lg hover:brightness-90"
          disabled={loading}
        >
          {loading ? <LoadSpinner/> : 'Verify'}
        </button>
      </div>
    </div>
  );
};

export default VerifyToken;
