import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaUserGroup } from "react-icons/fa6";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import Logo from "../assets/Images/companyName.svg";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import FooterComponent from "../component/Footer";

function PostedJob() {
  return (
    <div className="">

      <Header darkMode={true}/>
      <div className="flex text-sm items-start justify-center gap-4 px-28 mt-8">
        <div className="border-2 border-slate-300 p-6 rounded-lg ">
          <div className="flex start items-start justify-between">
            <div className="">
              <img className="w-48" src={Logo} alt="company logo" />
              <div className="font-semibold mb-4">
                <h1 className="capitalize text-2xl">Managing Director</h1>
                <p className="mt-2 text-base">UUC international</p>
                <p>Lagos</p>
              </div>
            </div>
            <div className="">
              <button className="px-4 py-2 bg-gray-700 text-slate-50 font-semibold">
                <Link to="/job/apply/1">Retract</Link>
              </button>
              <div className="mt-8 flex items-start justify-start flex-col">
                <button className="px-4 py-1 border-2 border-slate-300 w-44 mb-2">Edit</button>
                <button className="px-4 py-1 border-2 border-slate-300 w-44">Boost to starred</button>
              </div>
            </div>
          </div>
          {/* End of logo area */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold capitalize mb-4">Job Details</h3>
            <div className="mb-6">
              <span className="px-4 py-2 bg-slate-300 text-slate-800 rounded-3xl mr-2">Full-time</span>
              <span className="px-4 py-2 bg-slate-300 text-slate-800 rounded-3xl">#400,000</span>
            </div>
            <div className="my-4 flex items-center justify-start gap-2">
              <FaUserGroup className="text-slate-600"/>
              <h3 className="">
                <span>124</span> Applicants
              </h3>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">Line of Service</h3>
              <p>Internal Firm Services</p>
            </div>
            <div className="my-3">
              <h3 className="font-semibold">Industry/Sector</h3>
              <p>Not Applicable</p>
            </div>
            <div className="my-3">
              <h3 className="font-semibold">Specialism</h3>
              <p>IFS - Network Management</p>
            </div>
            <div className="my-3">
              <h3 className="font-semibold">Management Level</h3>
              <p>Associate</p>
            </div>
          </div>
          <div className="my-4">
            <h2 className="font-bold mb-3">Job Description & summary</h2>
            <p>
              A career in Inforºation Technology, within Internal Firº ervices,
              will provi e you with the opportunity to support our core business
              functions by eploying applications that enable our people to work
              ºore efficiently an eliver the highest levels of service to our
              clients.You’ll focus on ºanaging the esign an iºpleºentation of
              technology infrastructure within PwC, eveloping an enhancing both
              client an internal facing applications within PwC, an provi ing
              technology tools that help create a coºpetitive a vantage for the
              Firº to rive strategic business growth. iºply put, as a part of
              our User Interface esign teaº, you’ll create interactive
              interfaces that enhance user experiences. You’ll help with the
              esign, creation, prototyping an buil ing out of analytical
              interfaces for ºobile, web, an esktop applications base on PwC’s
              business nee s. As an Associate, You’ll be part of a
              cross-functional teaº that’s responsible for the full software
              evelopºent life cycle, froº conception to eployºent. PwC
              Professional skills an responsibilities for this ºanageºent level
              inclu e but are not liºite to
            </p>
            <ul>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus quae dicta eaque dolor, dolores repudiandae.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus quae dicta eaque dolor, dolores repudiandae.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus quae dicta eaque dolor, dolores repudiandae.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus quae dicta eaque dolor, dolores repudiandae.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus quae dicta eaque dolor, dolores repudiandae.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus quae dicta eaque dolor, dolores repudiandae.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus quae dicta eaque dolor, dolores repudiandae.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus quae dicta eaque dolor, dolores repudiandae.
              </li>
            </ul>
          </div>
          <div className="">
            <div className="my-2">
              <h3 className="font-semibold">Education</h3>
              <div className="">
                <span>Bsc/HND</span>
                <span>ND</span>
              </div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">Degree/Fiels of Study</h3>
              <div className="">
                <span>Computer science</span>
                <span>Engineering</span>
              </div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">Certifictions (if blank, certifiations not specified)</h3>
              <div className=""></div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">Required Slills</h3>
              <div className="">
                <span>Optional Skills</span>
              </div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">
                Desired Languages (If blank, desired languages not specifield)
              </h3>
              <div className=""></div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">Travel Requirements</h3>
              <div className="">
                <span>Up to 20%</span>
              </div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">Available for Work Visa Sponsorship</h3>
              <div className="">
                <span>No</span>
              </div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">Government Clearance Required?</h3>
              <div className="">
                <span>No</span>
              </div>
            </div>
            <div className="my-2">
              <h3 className="font-semibold">Job Posting End Date</h3>
              <div className="">
                <span>December 18, 2023</span>
              </div>
            </div>
            <div className="my-4 ">
              <span className="px-3 cursor-pointer py-2 rounded-3xl bg-gray-300 hover:bg-red-500 hover:text-slate-50">Report Job</span>
            </div>
          </div>
          <div className="my-6 border-t-2 py-4 border-slate-300">
            <h2 className="text-xl font-semibold">Share Job</h2>
            <div className="flex items-center justify-start my-4 gap-4">
              <FaLinkedin className="w-6 h-6" style={{ color: "#0a66c2" }} />
              <BsTwitterX className="w-6 h-6" />
              <FaFacebook className="w-6 h-6" style={{ color: "#1877F2" }} />
              <BsWhatsapp className="w-6 h-6" style={{ color: "#075e54" }} />
            </div>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default PostedJob;
