// ------------version-2-----------------

import Logo from '../assets/Images/ejobs-logo2.svg';
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { PiGreaterThanBold } from 'react-icons/pi';
import Resource from './Resource';
import { MdFavorite } from 'react-icons/md';

function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 sm:px-20">
      <div className="container mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={Logo} alt="site-logo" className="w-28 mb-4" />
          <p className="text-lg text-center md:text-left">
            A community for job seekers and employers.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 items-center md:items-start mb-8 md:mb-0">
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <BsTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaGoogle className="w-6 h-6" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-4">Company</h2>
              <Resource icon={<PiGreaterThanBold />} title="About us" />
              <Resource icon={<PiGreaterThanBold />} title="Blog" />
              <Resource icon={<PiGreaterThanBold />} title="Our app" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-4">Resources</h2>
              <Resource icon={<PiGreaterThanBold />} title="Support" />
              <Resource icon={<PiGreaterThanBold />} title="Privacy" />
              <Resource icon={<PiGreaterThanBold />} title="Terms" />
              <Resource icon={<PiGreaterThanBold />} title="F.A.Q's" />
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-sm">
            &copy; Designed with <MdFavorite className="inline text-pink-500" /> by Essential Group 2024.
          </h3>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
