// ----------version 2-----------

import React from 'react';
import ProfilePix from '../../assets/Images/profile.png';

function Profile({ data }) {

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <div className="grid grid-cols-3 gap-4">
        <div className="relative bg-yellow-100 rounded-lg overflow-hidden h-44 flex items-center justify-center">
          <img className="absolute w-full h-full object-cover filter blur-sm" alt="profile" src={ProfilePix} />
          <img className="absolute" alt="profile" src={ProfilePix} />
        </div>
        <div className="col-span-2 ml-4 flex flex-col justify-center">
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">First Name</h3>
            <span className="text-sm text-gray-500">{`${data.firstName} ${data.lastName}`}</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <span className="text-sm text-gray-500">{data.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
