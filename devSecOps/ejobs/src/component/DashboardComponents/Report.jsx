import React, { useRef, useState } from 'react';
import { BsPersonFillCheck } from 'react-icons/bs';
import { MdCancel, MdMoreHoriz } from 'react-icons/md';
import MessageModal from '../Modals/Mesage';
import { Table } from 'flowbite-react';

function Report({seekerReport, employerReport}) {
  const jobSeekerRef = useRef();
  const jobEmployerRef = useRef();
  const [selectedReport, setSelectedReport] = useState('jobSeeker');
  const [reportContent, setReportContent] = useState(seekerReport)
  const [viewModel, setViewModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [reportMessage, setReportMessage] = useState(null)


  const handleView = () => {
    setViewModal((prev) => !prev);
  };

  const handleSetReport = (content)=>{
    setReportMessage(content)
  }

  const handleMessage = () => {
    setMessageModal(!messageModal);
  };


  const handleBlacklist = ()=>{
    alert('hello')
  }


  const handleSelection = (e)=>{
    const selection = e.target.value
    setSelectedReport(selection)
    selection === 'jobSeeker' ? setReportContent(seekerReport) : setReportContent(employerReport)
  }

  return (
    <div
      className={`relative ${
        viewModel &&
        'after:w-full after:h-full after:bg-opacity-40 after:bg-black after:bg-blend-overlay after:flex after:items-center after:justify-center after:fill-stone-900 after:absolute after:top-0 after:right-0'
      }`}
    >
      <div
        className={`${
          viewModel ? 'block' : 'hidden'
        } absolute top-1/4 w-full max-w-lg bg-white rounded-md text-gray-800 py-4 px-8 z-40 shadow-lg`}
      >
        <h3 className="mb-4 font-semibold text-xl border-b pb-2">Report</h3>
        <p className="px-4">
          {reportMessage && reportMessage}
        </p>
        <div className="p-3 rounded-full bg-white hover:bg-gray-200 w-fit absolute -top-5 -right-5">
          <MdCancel onClick={handleView} className="text-red-500 w-6 h-6 cursor-pointer" />
        </div>
      </div>
      {messageModal && (
        <div className={`absolute top-1/4 w-full max-w-lg bg-white rounded-md text-gray-800 py-4 px-8 z-40 flex items-center justify-center shadow-lg`}>
          <MessageModal toggle={handleMessage} />
        </div>
      )}
      <div className="mb-10">
        <form action="" className="mx-auto flex items-center justify-center gap-5">
          <div
            className={`p-6 border-2 flex items-center relative flex-col ${
              selectedReport === 'jobSeeker' ? 'bg-blue-50 text-blue-900' : ''
            } border-gray-200 rounded-md cursor-pointer`}
          >
            <input
              onChange={(e) => {
                handleSelection(e);
              }}
              className="absolute top-2 right-2"
              type="radio"
              ref={jobSeekerRef}
              name="userType"
              value="jobSeeker"
            />
            <label htmlFor="userType" className="flex flex-col items-center">
              <h3 className="font-semibold">Job Seeker</h3>
              <BsPersonFillCheck
                className="w-8 h-8 cursor-pointer mt-2"
                onClick={() => {
                  jobSeekerRef.current.click();
                }}
              />
            </label>
          </div>
          <div
            className={`p-6 border-2 flex items-center relative flex-col ${
              selectedReport === 'jobEmployer' ? 'bg-blue-50 text-blue-900' : ''
            } border-gray-200 rounded-md cursor-pointer`}
          >
            <input
              onChange={(e) => {
                handleSelection(e);
              }}
              className="absolute top-2 right-2"
              type="radio"
              ref={jobEmployerRef}
              name="userType"
              value="jobEmployer"
            />
            <label htmlFor="userType" className="flex flex-col items-center">
              <h3 className="font-semibold">Job Employer</h3>
              <BsPersonFillCheck
                className="w-8 h-8 cursor-pointer mt-2"
                onClick={() => {
                  jobEmployerRef.current.click();
                }}
              />
            </label>
          </div>
        </form>
      </div>
      <Table className="w-full border-collapse">
        <Table.Head>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">S/N</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Company</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employer</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Content</Table.HeadCell>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Action</th> */}
        </Table.Head>
        <Table.Body>
          {reportContent?.map((eachCandidate, index) => (
            <Table.Row className="hover:bg-blue-50 hover:text-blue-900" key={index}>
              <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">{index + 1}</Table.Cell>
              <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">{eachCandidate.employer.companyName}</Table.Cell>
              <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">{`${eachCandidate.reporter.firstName} ${eachCandidate.reporter.lastName}`}</Table.Cell>
              <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">
                <button onClick={()=>{
                  handleView();
                  handleSetReport(eachCandidate.reportContent)
                  }} className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 focus:outline-none">
                  View
                </button>
              </Table.Cell>
              {/* <td className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">
                <button onClick={handleBlacklist} className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 focus:outline-none">Blacklist User</button>
                <button
                  onClick={handleMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none ml-2"
                >
                  Message User
                </button>
              </td> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Report;
