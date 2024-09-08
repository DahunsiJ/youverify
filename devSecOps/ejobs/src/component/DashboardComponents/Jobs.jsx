// ----------Version 2------------
import { Table } from 'flowbite-react';
import React from 'react';

function JobsInfo({data}) {
  return (
    <div className="overflow-x-scroll p-6 text-base bg-white shadow rounded-lg">
      <Table className="w-full">
        <Table.Head>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidates</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Remaining</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {data.map((eachJob, index) => {
              const diffTime =  new Date(eachJob.vacancyDuration).getTime() - new Date(eachJob.createdAt).getTime();
              const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            return(
            <Table.Row className="cursor-pointer hover:bg-orange-100 hover:text-blue-900 mt-4" key={index}>
              <Table.Cell className="border-2 border-gray-200 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{index + 1}</Table.Cell>
              <Table.Cell className="border-2 border-gray-200 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachJob.employer.companyName}</Table.Cell>
              <Table.Cell className="border-2 border-gray-200 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachJob.jobTitle}</Table.Cell>
              <Table.Cell className="border-2 border-gray-200 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{`${eachJob.localGovernment} ${eachJob.state}`}</Table.Cell>
              <Table.Cell className="border-2 border-gray-200 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachJob.applications?.length}</Table.Cell>
              <Table.Cell className="border-2 border-gray-200 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachJob.minimumQualification}</Table.Cell>
              <Table.Cell className="border-2 border-gray-200 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{eachJob.createdAt}</Table.Cell>
              <Table.Cell className="border-2 border-gray-200 text-xs font-medium text-gray-500 px-6 py-4 tracking-wider">{diffDays}</Table.Cell>
            </Table.Row>
          )})}
        </Table.Body>
      </Table>
    </div>
  );
}

export default JobsInfo;
