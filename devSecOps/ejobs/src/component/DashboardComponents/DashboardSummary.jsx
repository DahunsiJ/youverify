import React from 'react';

function DashboardSummary({ allApplication, allEmployers, allJobSeeker, allJobs, allNotification }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-900 hover:bg-blue-800 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-blue-300">Job Seekers</h3>
          <p className="text-2xl font-bold text-blue-100">{allJobSeeker.length}</p>
        </div>
        <div className="bg-green-900 hover:bg-green-800 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-green-300">Job Postings</h3>
          <p className="text-2xl font-bold text-green-100">{allJobs.length}</p>
        </div>
        <div className="bg-yellow-900 hover:bg-yellow-800 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Applications</h3>
          <p className="text-2xl font-bold text-yellow-100">{allApplication.length}</p>
        </div>
        <div className="bg-purple-900 hover:bg-purple-800 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-purple-300">Employers</h3>
          <p className="text-2xl font-bold text-purple-100">{allEmployers.length}</p>
        </div>
        <div className="bg-red-900 hover:bg-red-800 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-red-300">CVs</h3>
          <p className="text-2xl font-bold text-red-100">80</p>
        </div>
        <div className="bg-teal-900 hover:bg-teal-800 p-6 text-center rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-teal-300">Pending Salary Payments</h3>
          <p className="text-2xl font-bold text-teal-100">50</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-300">Recent Activities</h3>
        <ul className="space-y-2">
          {allNotification.map((eachNotification, index) => { 
            const messageStarter = eachNotification.message.split(' ')[0];
            const AdminMessage = messageStarter === 'Sorry' 
              ? `${eachNotification.sender.companyName} Rejected ${eachNotification.recipient.firstName} ${eachNotification.recipient.lastName}'s application`
              : messageStarter === 'Congratulations'
              ? `${eachNotification.sender.companyName} Accepted ${eachNotification.recipient.firstName} ${eachNotification.recipient.lastName}'s application`
              : `${eachNotification.sender.companyName} Offered ${eachNotification.recipient.firstName} ${eachNotification.recipient.lastName} a job`;

            return (
              <li key={index} className="bg-gray-700 p-4 rounded-lg shadow text-gray-300">
                {AdminMessage}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DashboardSummary;


// ------------Version 2-------------
