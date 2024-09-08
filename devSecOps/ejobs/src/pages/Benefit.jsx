import { useState } from 'react';
import Header from '../component/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadSpinner from '../component/Modals/LoadSpinner';

function Benefit() {
  const createBenefitRoute = `${process.env.REACT_APP_API_URL}benefit/createBenefit`
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const loggedInUser = useSelector(state=>state.user?.currentUser)
  const [form, setForm] = useState({
    benefitType: '',
    benefitDescription: '',
    amountRequested: '',
    applicantId: loggedInUser._id,
    applicantName: `${loggedInUser.firstName} ${loggedInUser.lastName}`
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    setError(false)
    console.log('Form submitted:', form);
    if(loggedInUser.userType === 'jobEmployer') return navigate('/')
    try {
      const benefitResponse = await axios.post(createBenefitRoute, form)
      benefitResponse && alert('Success') 
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false)   
    }
    };

  return (
    <div className='w-full'>
      <Header/>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Request a Benefit</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="benefitType">
            Benefit Type
          </label>
          <select
            id="benefitType"
            name="benefitType"
            value={form.benefitType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            >
            <option value="" disabled>Select a benefit</option>
            <option value="jobSeeker">Job Seeker (fare for a trip to a job interview)</option>
            <option value="housing">Housing (for rent)</option>
            <option value="health">Health (for health issue)</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="benefitDescription">
            Description
          </label>
          <textarea
            id="benefitDescription"
            name="benefitDescription"
            value={form.benefitDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
            placeholder="Describe your need for the benefit..."
            ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amountRequested">
            Amount
          </label>
          <input
            id="amountRequested"
            name="amountRequested"
            type="number"
            value={form.amountRequested}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter the amount needed..."
            />
        </div>
        <span className={`${error ? "block" : "hidden"} w-full p-2 bg-red-300 text-white text-center mb-2`}>Error creating benefit please try again later</span>
        <div className="flex justify-end">
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
            {loading ? <LoadSpinner/> : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
</div>
  );
}

export default Benefit;
