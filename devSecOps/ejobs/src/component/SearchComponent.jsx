// --------------Design two--------------------
import { Link } from 'react-router-dom';
import { jobIndustries, nigeriaStates, workTypes } from '../assets/jobData';

function SearchComponent({ handleSearch, handleChange }) {
  return (
    <div className="w-full text-sm">
      <form className="flex flex-wrap sm:w-fit w-full mx-auto sm:my-8 my-4 items-center border-2 border-slate-200 justify-center rounded-lg shadow-md">
        <div className="px-4 py-4 bg-gray-100 w-full text-center rounded-t-lg">
          <h3 className="text-lg font-bold text-gray-700">FIND A JOB</h3>
        </div>
        <div className="bg-gray-50 px-4 py-4 w-full flex items-center justify-center flex-wrap gap-4 rounded-b-lg">
          <input 
            onChange={handleChange} 
            name='jobTitle' 
            className='px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition' 
            type="text" 
            placeholder='Job function' 
          />


          <select
            onChange={handleChange} 
            name='industry' 
            className='px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition' 
            placeholder='Any Industry' 
          >
            <option disabled>Industry</option>
            {[jobIndustries.map((industry)=>{
              return (<option key={industry} value={industry}>{industry}</option>)
            })]}
          </select>


          <select 
            onChange={handleChange} 
            name='state' 
            className='px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition'  
            placeholder='Location: Ikeja, Lagos' 
          >
            <option disabled>State</option>
            {[nigeriaStates.map((state)=>{
              return (<option key={state} value={state}>{state}</option>)
            })]}
          </select>


          <select 
            onChange={handleChange} 
            name='workType' 
            className='px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition'  
            placeholder='Type: Hybrid' 
          >
            <option disabled>Work type</option>
            {[workTypes.map((workType)=>{
              return (<option key={workType} value={workType}>{workType}</option>)
            })]}
          </select>
          
          <button 
            onClick={handleSearch} 
            className='px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchComponent;
