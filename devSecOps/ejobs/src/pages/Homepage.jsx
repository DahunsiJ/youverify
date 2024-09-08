// ----------Component collection---------------------
import Header from "../component/Header";
import HomevideoComponent from "../component/HomevideoComponent";
import ApplicationSteps from "../component/ApplicationSteps";
import JobPostHomePage from "../component/JobPostHomePage";
import AboutComponent from "../component/AboutComponent";
import ProductComponent from "../component/ProductComponent";
import TestimonialComponent from "../component/TestimonialComponent";
import StatisticsComponent from "../component/StatisticsComponent";
import FooterComponent from "../component/Footer";

// ------------------React icons-----------------
import {
  FaGreaterThan,
  FaBriefcase,
  FaHandshake,
  FaLessThan,
  FaSearch,
} from "react-icons/fa";
import { MdFactory, MdNotifications } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BsBriefcase, BsDatabase, BsDatabaseCheck, BsPeople } from "react-icons/bs";


// ------------Video collection----------------
import Video1 from "../assets/videos/lie.mp4";
import Video2 from "../assets/videos/life.mp4";
import Video3 from "../assets/videos/pressure.mp4";
import Video4 from "../assets/videos/truth.mp4";
import OtherChoices from "../component/OtherChoices";

// ------------images collection---------------
import Background from "../assets/Images/homepage.png";
import Energy from '../assets/Images/energy.jpg'
import Health from '../assets/Images/health.jpg'
import Manufacturing from '../assets/Images/manufacturing.jpg'
import Manufacturing2 from '../assets/Images/manufacturing2.jpg'
import Technology from '../assets/Images/technology.jpg'
import Finance from '../assets/Images/finance.jpg'
import Entertainment from '../assets/Images/entertainment2.jpg'
import Entertainment2 from '../assets/Images/entertainment.jpg'


// -----------React hooks collection--------------------
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// ------------Dependencies collection-------------------
import axios from "axios";
import qs from 'query-string'

// -------------Redux reducers---------------------------
import { fetchinfJobFailure, fetchingJobStart, fetchingJobSuccess } from "../redux/jobList/jobListSlice";

// -------------Data collection----------------------------
import CounterCard from "../component/CounterCard";
import { PiBriefcaseBold, PiFactoryDuotone } from "react-icons/pi";
import { nigeriaStates, workTypes } from "../assets/jobData";
import { toast } from "react-toastify";
import { Carousel } from "flowbite-react";
import ApplicationStepContainer from "./ApplicationStepContainer";
import { aboutData } from "../assets/homepageData";
import AboutContainer from "./AboutContainer";



function Homepage() {
  const apiRoute = process.env.REACT_APP_API_URL;
  const [currentTestimonial, setCUrrentTestimonial] = useState(0)
  const [currentJobpage, setCurrentJobPage] = useState("1");
  const loggedInUser = useSelector((state) => state.user);
  const [allJob, setAllJob] = useState([]);
  const [selectedJobs, setSelectedJobs] = useState([])
  const [activeJob, setActiveJob] = useState('full time')
  const allNotifications = useSelector(state=>state.notification.notificationList)
  const allJobURL = `${apiRoute}job/allJob?title=software%20engineering&lenght=10`;
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
  const searchSection = useRef()

  // ---------Pagination data----------
  const [paginatedJob, setPaginatedJob] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 2;
  const [totalJobs, setTotalJobs] = useState(allJob?.length);

  // -----------Scroll animation-----------------



  // --------Fetch all jobs----------
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     dispatch(fetchingJobStart());
  //     try {
  //       const allJobs = await axios.get(allJobURL, {
  //         withCredentials: true,
  //       });
  //       if (allJobs) dispatch(fetchingJobSuccess(allJobs?.data));
  //       setAllJob(allJobs?.data);
  //       setSelectedJobs(allJobs?.data);
  //       setTotalJobs(allJobs?.data.length);
  //       performPagination(currentPage, allJobs?.data);
  //     } catch (error) {
  //       dispatch(fetchinfJobFailure(error.message));
  //     }
  //   };
  //   fetchJobs();
  // }, []);

  // --------version2----------
  
  useEffect(() => {
    const fetchJobs = async () => {
      dispatch(fetchingJobStart());
      try {
        const response = await axios.get(allJobURL, {
          withCredentials: true,
        });
        if (response && response.data && Array.isArray(response.data)) {
          dispatch(fetchingJobSuccess(response.data));
          setAllJob(response.data);
          setSelectedJobs(response.data);
          setTotalJobs(response.data.length);
          performPagination(currentPage, response.data);
        } else {
          throw new Error('Invalid data received from server');
        }
      } catch (error) {
        dispatch(fetchinfJobFailure(error.message));
        setAllJob([]);  // Set to empty array if there's an error
      }
    };
    fetchJobs();
  }, []);


  // ----------handle transition motion----------------




  // -----------------Pagination system---------------
  const totalPages = Math.ceil(paginatedJob?.length / itemsPerPage)


  const handlePrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    performPagination(currentPage - 1, selectedJobs);
  };
  
  const handleNextPage = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage(currentPage + 1);
    performPagination(currentPage + 1, selectedJobs);
  };
  

  const performPagination = (currentState, currentJobs) => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedData = currentJobs.slice(startIndex, endIndex)
    setPaginatedJob(paginatedData)
  }
  // -----------------Pagination system---------------
  

  
  // ------handle job filter----------
  const handleFilter = (option) => {
    let filteredJobs;
    if (option === 'part time') {
      setActiveJob('part time');
      filteredJobs = allJob?.filter((job) => job.workType.toLowerCase() === 'part-time');
    } else if (option === 'full time') {
      setActiveJob('full time');
      filteredJobs = allJob?.filter((job) => job.workType.toLowerCase() === 'full-time');
    } else {
      setActiveJob('recent');
      filteredJobs = [...allJob]?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    setSelectedJobs(filteredJobs);
    setCurrentPage(1);
    setTotalJobs(filteredJobs.length);
    performPagination(1, filteredJobs);
  };


  // -----------Handle scroll-------------
  const handleFind = (e) => {
    e.preventDefault();
    
  
    const { jobTitle, workType, state } = formData;
  
    if (!jobTitle && !workType && !state) {
      return toast.error('Kindly fill the search fields');
    }
  
    const queryParams = {
      ...(jobTitle && { jobTitle }),
      ...(state && { state }),
      ...(workType && { workType })
    };

    const queryString = qs.stringify(queryParams);
    
  
    navigate(`/jobs?${queryString}`);
  };


  // ----------Handle changes----------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <div className="w-screen overflow-x-hidden h-screen sm:text-md text-sm">
      
      
      {/* ----------------Hero Section---------------- */} 
      <section
      style={{ background: `url(${Background}) no-repeat center center/cover` }}
      className="relative w-full min-h-screen mb-10 bg-cover sm:px-20 px-5 pb-16"
    >
      <Header lightMode={true} />
      
      {loggedInUser.currentUser && loggedInUser.currentUser.userType === 'jobSeeker' && (
        <div className="absolute top-20 right-10 flex gap-4">
          <button className="bg-orange-500 px-6 py-2 rounded-full text-white hover:bg-orange-600 transition-colors">
            <Link to={`/benefit`}>Apply for allowance</Link>
          </button>
          <button className="bg-orange-500 px-6 py-2 rounded-full text-white hover:bg-orange-600 transition-colors">
            <Link to={`/${loggedInUser.currentUser._id}/createCV`}>Create a CV</Link>
          </button>
        </div>
      )}
      
      <div className="flex flex-col items-center gap-8 mt-24 text-center text-white">
        <ul className="flex flex-wrap gap-4 justify-center font-semibold">
          <li className="cursor-pointer hover:underline">Unemployed (11)</li>
          <li className="cursor-pointer hover:underline">Employed (12)</li>
          <li className="cursor-pointer hover:underline">Self Employed (0)</li>
          <li className="cursor-pointer hover:underline">Artisans (0)</li>
          <li className="cursor-pointer hover:underline">Students (1)</li>
          <li className="cursor-pointer hover:underline">Professionals (0)</li>
          <li className="cursor-pointer hover:underline">Job Seekers (24)</li>
          <li className="cursor-pointer hover:underline">Overseas Skilled Worker (0)</li>
        </ul>
        
        <h1 className="text-4xl font-bold">
          The Easiest Way To Get Your New Job
        </h1>
        <h3 className="text-xl">
          Search 270 new jobs. <span className="text-lg">0 added in the last 24 hours</span>
        </h3>
        
        <form className="flex flex-col items-center gap-4 w-full sm:w-3/5 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex gap-4 mb-4">
            <p className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              FIND A JOB
            </p>
            <p className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              FIND A CANDIDATE
            </p>
          </div>
          
          <input
          className="p-2 mb-4 text-gray-600 w-full border-2 border-gray-300 rounded-md outline-none focus:border-orange-500 transition-colors"
          type="text"
          placeholder="e.g., Web Developer"
          onChange={handleChange}
          name="jobTitle"
          id='jobTitle'
        />

        <select
          onChange={handleChange}
          className="p-2 mb-4 w-full text-gray-600 border-2 border-gray-300 rounded-md outline-none focus:border-orange-500 transition-colors"
          name="workType"
          id="workType"
        >
          <option value="">Category</option>
          {workTypes.map((eachType, index) => (
            <option key={index} value={eachType}>{eachType}</option>
          ))}
        </select>

        <select
          onChange={handleChange}
          className="p-2 text-gray-600 mb-4 w-full border-2 border-gray-300 rounded-md outline-none focus:border-orange-500 transition-colors"
          name="state"
          id="state"
        >
          <option value="">State</option>
          {nigeriaStates.map((eachState, index) => (
            <option key={index} value={eachState}>{eachState}</option>
          ))}
        </select>


          <button
            onClick={handleFind}
            className="bg-orange-500 px-6 py-2 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </section>

{/* ------------Job section------------- */}
  <section className="bg-white py-12 sm:py-16 px-5 sm:px-20">
  <p className="text-center text-gray-700 mb-8">
    Job allowance offers you the sum of ₦5000 - ₦10000 monthly to cover your transportation allowance to potential employers for interview and will be deducted once you get a job.
  </p>
  
  <div className="flex flex-wrap justify-center gap-16 font-semibold text-gray-800">
      <CounterCard title='ejob users' value='56' Icon={<BsPeople className="w-5 h-5"/>}/>
      <CounterCard title='Companies' value='100' Icon={<PiFactoryDuotone className="w-5 h-5"/>}/>
      <CounterCard title='Applications' value='200' Icon={<BsDatabaseCheck className="w-5 h-5"/>}/>
      <CounterCard title='Jobs' value='1200' Icon={<PiBriefcaseBold className="w-5 h-5"/>}/>
  </div>
</section>


{/* -------------------Job by job category------------------------- */}
<section className="my-20 w-full px-5 sm:px-20 py-16 bg-gray-50">
  <h1 className="text-4xl font-extrabold text-center uppercase mb-6 text-gray-900">
    Popular Job Categories
  </h1>
  <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
    By utilizing our paid job listing, your jobs are displayed to more applicants. Joblink.ng is the most visited job platform in Nigeria, ensuring your job postings gain the maximum exposure.
  </p>
  <ul className="flex flex-wrap justify-center gap-8">
  {[
    { category: "Administrative assistant", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "administrative assistant").length : 0 },
    { category: "Compliance officer", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "compliance officer").length : 0 },
    { category: "Business development", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Business development").length : 0 },
    { category: "Health service manager", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Health service manager").length : 0 },
    { category: "Management consultant", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Management consultant").length : 0 },
    { category: "Purchasing", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Purchasing").length : 0 },
    { category: "Trade Union Officials", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Trade Union Officials").length : 0 },
    { category: "Software engineer", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Software engineer").length : 0 },
    { category: "Receptionist", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Receptionist").length : 0 },
    { category: "Secretary", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Secretary").length : 0 },
    { category: "Auditing and Accounting", count: Array.isArray(allJob) ? allJob.filter(eachJob => eachJob.jobTitle.toLowerCase() === "Auditing and Accounting").length : 0 },
].map((item, index) => (
  <li key={index}>
    <Link
      className="text-lg text-gray-800 hover:text-indigo-600 font-medium transition-colors"
      to={`/searchByCategory/${item.category}`}
      >
      {item.category} <span className="text-sm text-gray-500">({item.count})</span>
    </Link>
  </li>
))}
</ul>
</section>

{/* -------------------Job by job category------------------------- */}


{/* --------------------Job by location----------------------- */}

<section className="my-20 bg-orange-50 py-16 px-5 sm:px-20">
  <h1 className="text-4xl font-extrabold text-center uppercase mb-6 text-gray-900">
    Job By Location
  </h1>
  <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
    We provide you with jobs even at the proximity of your location and place of choice and convenience.
  </p>
  <ul className="flex flex-wrap justify-center gap-8">
    {[
      { location: "lagos", label: "Lagos" },
      { location: "anambra", label: "Anambra" },
      { location: "bauchi", label: "Bauchi" },
      { location: "bayelsa", label: "Bayelsa" },
      { location: "benue", label: "Benue" },
      { location: "borno", label: "Borno" },
      { location: "cross river", label: "Cross River" },
      { location: "delta", label: "Delta" },
      { location: "ebonyi", label: "Ebonyi" },
      { location: "edo", label: "Edo" },
      { location: "ekiti", label: "Ekiti" },
      { location: "enugu", label: "Enugu" },
      { location: "fct (federal capital territory)", label: "FCT" },
      { location: "gombe", label: "Gombe" },
      { location: "imo", label: "Imo" },
      { location: "oyo", label: "Oyo" },
    ].map((item, index) => (
      <li key={index} className="text-gray-900 hover:text-indigo-600 transition-colors">
        <Link
          to={`/searchByLocation/${item.location}`}
          className="text-lg font-medium"
        >
          {item.label} <span className="text-sm text-gray-500">({allJob?.filter(eachJob => eachJob.state.toLowerCase() === item.location).length})</span>
        </Link>
      </li>
    ))}
  </ul>
</section>


{/* --------------------Job by location----------------------- */}

{/* ---------------Advert section---------------- */}
<section className="sm:px-20 px-5">
    <p className="w-full border-2 border-slate-500 h-60">Adds here</p>
</section>

     
{/* --------------How we work section----------------- */}

{/* --------------- */}
<ApplicationStepContainer/>
{/* --------------- */}

{/* -------------Vide section--------------- */}

<section className="my-20 sm:px-20 px-5">
  <div className="flex items-center justify-between mb-6 w-full max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">Short Videos</h2>
    <Link
      to="/videos"
      className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300"
    >
      See All
    </Link>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-0">
    <HomevideoComponent source={Video1} likes="203" views="5,345" />
    <HomevideoComponent source={Video2} likes="203" views="5,345" />
    <HomevideoComponent source={Video3} likes="203" views="5,345" />
    <HomevideoComponent source={Video4} likes="203" views="5,345" />
  </div>
</section>

{/* -------------Vide section--------------- */}



{/* ----------------Choices Section------------------- */}
<section className="my-20 sm:px-20 px-5 border-t-4 py-4 border-b-4 border-orange-500">
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Other Choices</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <OtherChoices
      choiceImage={Technology}
      title="Technology"
      content="Encompasses businesses focused on the development, production, and distribution of technology products and services, including software, hardware, and IT services. This industry drives innovation and includes major segments like computing, telecommunications, and electronics."
    />
    <OtherChoices
      choiceImage={Health}
      title="HealthCare"
      content="Involves organizations and professionals that provide medical services, manufacture medical equipment or drugs, and facilitate the provision of healthcare to patients. It includes hospitals, pharmaceutical companies, and biotechnology firms."
    />
    <OtherChoices
      choiceImage={Finance}
      title="Finance"
      content="Comprises businesses that manage money, including banks, investment firms, insurance companies, and real estate firms. This industry is crucial for economic stability and growth, providing services like lending, investment, insurance, and financial planning."
    />
    <OtherChoices
      choiceImage={Entertainment}
      title="Entertainment"
      content="Encompasses businesses that produce and distribute entertainment content, such as movies, music, television, and video games, as well as news and information services. This industry plays a significant role in shaping culture and public opinion."
    />
    <OtherChoices
      choiceImage={Manufacturing}
      title="Manufacturing"
      content="Involves the production of goods using labor, machinery, and tools. This industry spans a wide range of products, from automobiles and electronics to textiles and food. Manufacturing is a backbone of industrialized economies, driving innovation and employment."
    />
    <OtherChoices
      choiceImage={Energy}
      title="Energy"
      content="Consists of businesses involved in the production and distribution of energy, including fossil fuels (oil, gas, coal), nuclear power, and renewable energy sources (solar, wind, hydro). It is essential for powering homes, businesses, and transportation systems."
    />
  </div>
</section>

{/* ----------------Choices Section------------------- */}




    {/* ------------Job search section------------- */}
        <search ref={searchSection} className="bg-slate-300 w-full py-10 sm:px-20 px-5">
          <div className="">
            <h1 className="my-4 text-slate-600 border-b-2 w-fit mx-auto text-2xl border-orange-500">
              Find Jobs
            </h1>
            <p className="text-center text-slate-600 font-semibold">
              Post a job to tell us about your project. We ll quickly match you
              with the right freelancers.
            </p>
          </div>
          <div className="my-8 flex items-center justify-center bg-slate-50 w-fit mx-auto">
            <button onClick={()=>{handleFilter('recent')}} className={`${activeJob === "recent" && "bg-orange-500 text-white"} px-4 py-2 hover:bg-orange-500 hover:text-slate-50`}>
              Recent Jobs
            </button>
            <button onClick={()=>{handleFilter('part time')}} className={`${activeJob === "part time" && "bg-orange-500 text-white"} px-4 py-2 hover:bg-orange-500 hover:text-slate-50`}>
              Part time
            </button>
            <button onClick={()=>{handleFilter('full time')}} className={`${activeJob === "full time" && "bg-orange-500 text-white"} px-4 py-2 hover:bg-orange-500 hover:text-slate-50`}>
              Full Time
            </button>
          </div>
              <section id="jobResult" className="w-full mx-auto">
                {paginatedJob && paginatedJob.map((eachJob, index) => (
                <JobPostHomePage
                key={index}
                employerName={eachJob.employerName}
                salary={eachJob.salary}
                state={eachJob.state}
                workType={eachJob.workType}
                jobTitle={eachJob.jobTitle}
                id={eachJob._id}
              />
            ))} 
              <div className="flex mb-10 items-center justify-center gap-2 border-2 w-fit border-slate-300 mx-auto">
                <FaLessThan
                  onClick={handlePrevPage}
                  className="cursor-pointer text-slate-500 hover:text-orange-500"
                />
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <FaGreaterThan
                  onClick={handleNextPage}
                  className="cursor-pointer text-slate-500 hover:text-orange-500"
                />
              </div>
          </section>
        </search>


        {/* ------------Advert Section--------------------- */}
        <section className="w-full h-64 border-2 py-10 sm:px-20 px-5">
          <p>This is an adverts</p>
        </section>


        {/* ----------------About section------------- */}
          <AboutContainer/>

  {/* -------------About section-------------- */}



{/* --------------Product Section----------------- */}
<section className="my-20 sm:px-20 px-5">
  <div className="mb-12 text-center">
    <h3 className="text-3xl font-bold uppercase text-slate-800 mb-4">
      Explore More with Essential
    </h3>
    <p className="text-lg text-slate-600">
      Promotions, deals, and special offers just for you
    </p>
  </div>
  <div className="flex flex-wrap items-center gap-6 justify-center">
    <ProductComponent
      productImage={Manufacturing2}
      productTitle="Everify"
    />
    <ProductComponent
      productImage={Entertainment}
      productTitle="e-Student"
    />
    <ProductComponent
      productImage={Manufacturing}
      productTitle="e-Jobs"
    />
    <ProductComponent
      productImage={Entertainment2}
      productTitle="e-Schools"
    />
    <ProductComponent
      productImage={Finance}
      productTitle="Oosh Business"
    />
  </div>
</section>
        
  {/* -------------------Testimonial Page-------------------- */}
  <section className="bg-slate-300 my-20 sm:px-20 py-10">
  <h3 className="mx-auto mb-8 text-xl font-semibold border-b-2 border-orange-500 w-fit">Happy Employers</h3>
  <div className="h-56 sm:h-64 sm:w-[700px] mx-auto">
      <Carousel pauseOnHover>
      <TestimonialComponent
        customerName={`Sarah Johnson`}
        customerTitle="Software Engineer"
        customerTestimonial="This platform has truly transformed my career. I was able to land my dream job in less than a month after signing up. The user interface is intuitive, and the job matching algorithm is incredibly accurate. I highly recommend this site to any professional looking for a new opportunity."
       /> 
      <TestimonialComponent
        customerName={`Michael Rodriguez`}
        customerTitle="Product Manager"
        customerTestimonial="The variety of job listings on this site is unmatched. I appreciated the ability to filter roles based on my specific needs and preferences. The application process was seamless, and I received prompt feedback from potential employers. It's a fantastic resource for anyone in the tech industry."
    /> 
      <TestimonialComponent
        customerName={`Emily chen`}
        customerTitle="Data Scientist"
        customerTestimonial="I was skeptical at first, but this job site exceeded all my expectations. The resources available for preparing for interviews and refining my resume were incredibly helpful. I found a position that aligns perfectly with my skills and career goals. Thank you for making job hunting stress-free!"
      /> 
      <TestimonialComponent
        customerName={`Wale Onikulapo`}
        customerTitle="UX/UI Designer"
        customerTestimonial="As a designer, finding the right role can be challenging, but this platform made it easy. The job alerts feature ensured I never missed out on relevant opportunities, and the community forum provided valuable networking opportunities. I've recommended this site to all my colleagues."
      />
      </Carousel>
    </div>
</section>


{/* ------------------Statistic Section-------------------- */}
        <section
          style={{ backgroundImage: `url(${Manufacturing})` }}
          className="min-h-80 my-20 bg-black backdrop-filter flex flex-wrap items-center justify-center bg-cover sm:px-20 px-5"
        >
          <div className="sm:w-full overflow-x-auto flex flex-wrap items-center justify-center h-full gap-16">
            <StatisticsComponent
              Logo={<MdFactory />}
              value="32"
              statisticTitle="Companies"
              duration='2000'
            />
            <StatisticsComponent
              Logo={<BsDatabase />}
              value="18"
              statisticTitle="Applications"
              duration='2000'
            />
            <StatisticsComponent
              Logo={<BsBriefcase />}
              value="40"
              statisticTitle="Job posted"
              duration='2000'
            />
            <StatisticsComponent
              Logo={<BsPeople />}
              value="32"
              statisticTitle="Members"
              duration='2000'
            />
          </div>
        </section>


    {/* ----------------Notification section----------------- */}
        <section className="flex items-center gap-4 justify-center my-20 sm:px-20 px-5">
          <div className=" flex gap-2 items-center relative">
            <MdNotifications className="text-orange-500 w-6 h-6" />
            {loggedInUser.currentUser && <Link to={`/${loggedInUser.currentUser._id}/notification`}>Your Job Notification</Link>}
            <span className="absolute -top-10 left-0 px-2 py-1 rounded-full bg-orange-500 text-slate-50">
              {allNotifications ? allNotifications.length : "0"}
            </span>
          </div>
          <div className="border-2 border-slate-400 rounded-lg">
            <form>
              <input
                className="outline-none px-2"
                type="text"
                placeholder="Your email"
              />
              <button className="bg-orange-500 h-full px-4 py-2 text-slate-50">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      
      <FooterComponent />
    </div>
  );
}

export default Homepage;
