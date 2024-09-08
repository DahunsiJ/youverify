// --------------Version 2----------------

import React, { useState } from "react";
import Header from "../component/Header";
import BlacklistUser from "../component/BlacklistUser";
import FooterComponent from "../component/Footer";
import BlacklistComponent from '../component/BlacklistComponent copy'
import { FaIndustry } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import Background from '../assets/Images/scam.jpg';
import { blacklistedCompanies, blacklistedUsers } from "../assets/data";

function Blacklist() {
  const [formData, setFormData] = useState({});
  const [companyList, setCompanyList] = useState(blacklistedCompanies);
  const [userList, setUsersList] = useState(blacklistedUsers);
  const [selectionError, setSelectionError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTable = formData.searchOption;
    if (!searchTable) {
      return setSelectionError(true);
    }
    const nameToSearch = formData.blacklistName.toLowerCase();
    if (searchTable === 'companies') {
      setCompanyList(blacklistedCompanies.filter(company => company.companyName.toLowerCase().includes(nameToSearch)));
    } else {
      setUsersList(blacklistedUsers.filter(user => user.Fullname.toLowerCase().includes(nameToSearch)));
    }
  };

  const handleSearchType = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setCompanyList(blacklistedCompanies);
    setUsersList(blacklistedUsers);
    setSelectionError(false);
  };

  return (
    <div className="text-sm">
      <Header />
      <div className="mx-auto my-10 p-4 max-w-screen-xl">
        <div 
          style={{ backgroundImage: `url(${Background})` }} 
          className="flex flex-col items-center justify-center gap-10 p-8 rounded-md bg-cover bg-center relative text-white"
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-3xl font-semibold mb-4">Blacklist</h1>
            <p className="max-w-2xl mx-auto">
              At eJobs we blacklist suspicious companies/users. When a company/user is added to the blacklist, it means that our safety and verification agents have marked them as not safe, trustworthy, or charged with fraudulent activities. There are several reasons why you can be flagged on our blacklist.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-2xl">
            <div className="flex justify-center gap-4 mb-6">
              <label className="flex flex-col items-center cursor-pointer">
                <input type="radio" name="searchOption" value="companies" onChange={handleSearchType} className="hidden peer" />
                <FaIndustry className="text-4xl mb-2 peer-checked:text-orange-500" />
                <p className="mb-2 peer-checked:text-orange-500">Company</p>
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <input type="radio" name="searchOption" value="users" onChange={handleSearchType} className="hidden peer" />
                <BiUserCircle className="text-4xl mb-2 peer-checked:text-orange-500" />
                <p className="mb-2 peer-checked:text-orange-500">Users</p>
              </label>
            </div>
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                className="flex-1 p-2 text-black"
                type="text"
                name="blacklistName"
                placeholder="Enter name to search"
                onChange={handleChange}
              />
              <button type="submit" className="bg-orange-500 text-white p-2">Search</button>
            </div>
            {selectionError && <span className="block mt-2 text-red-500">Error: Please select a type</span>}
          </form>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-10">
            <div className="w-full md:w-[45%]">
              <h2 className="text-lg font-semibold mb-4">Blacklisted Companies</h2>
              {companyList.map((company, index) => (
                <BlacklistComponent
                  key={index}
                  companyName={company.companyName}
                  companyAddress={company.companyAddress}
                  complaint={company.reports}
                />
              ))}
            </div>
            <div className="w-full md:w-[45%]">
              <h2 className="text-lg font-semibold mb-4">Blacklisted Users</h2>
              {userList.map((user, index) => (
                <BlacklistUser
                  key={index}
                  complaint={user.reports}
                  username={user.Fullname}
                  email={user.email}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Blacklist;