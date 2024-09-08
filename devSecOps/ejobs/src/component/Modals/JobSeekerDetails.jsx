import { Table } from 'flowbite-react';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';

function JobSeekerDetails({toggle, ApplicantName}) {

  return (
    <div className="w-full text-sm h-screen flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 z-50">
      <div className="relative p-6 w-auto h-auto flex flex-col items-center justify-center bg-white rounded-md shadow-lg">
        <MdCancel onClick={toggle} className="absolute top-3 right-3 text-gray-400 w-6 h-6 cursor-pointer hover:text-red-500" />
        <div className="w-full mt-4 text-gray-800">
          <h2 className="text-lg text-gray-600 mb-2">
          Job Records
          </h2>
          <div className='flex items-start justify-start gap-10'>
            <Table className="w-full">
                <Table.Head>
                    <Table.HeadCell>S/N</Table.HeadCell>
                    <Table.HeadCell>Company Name</Table.HeadCell>
                    <Table.HeadCell>Total interviews</Table.HeadCell>
                    <Table.HeadCell>Interview completed</Table.HeadCell>
                    <Table.HeadCell>Application status</Table.HeadCell>
                    <Table.HeadCell>Reason for rejection</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>IIS Technology</Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>Interview</Table.Cell>
                        <Table.Cell>Not qualified</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>Avana Experts</Table.Cell>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>Scheduled</Table.Cell>
                        <Table.Cell>Missed interview</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
          </div>
          <div className="flex items-center gap-4 justify-center mt-6">
            <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none">
              Share report
            </button>
            <button onClick={toggle} className="bg-gray-200 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-300 focus:outline-none">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSeekerDetails;
