// ---------version 2-----------
import { Table } from 'flowbite-react';
import React from 'react';

function InterviewsReport({ data }) {
  return (
    <div className="w-full overflow-x-auto text-base scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-400">
      <Table className="w-full border-collapse bg-white rounded-lg shadow-md">
        <Table.Head className="bg-blue-50">
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">S/N</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Company</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Candidate</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Position</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Type</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Location</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Interview Date</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Interview Time</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Status</Table.HeadCell>
          <Table.HeadCell className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">Remark</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-200">
          {data.map((eachInterview, index) => (
            <Table.Row
              className="cursor-pointer hover:bg-blue-100 transition-colors"
              key={index}
            >
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{index + 1}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{eachInterview.application.companyId.companyName}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{`${eachInterview.application.applicant[0]?.firstName} ${eachInterview.application.applicant[0]?.lastName}`}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{eachInterview.application.position}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{eachInterview.typeOfInterview}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{eachInterview.interviewLocation}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{eachInterview.interviewDate}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{eachInterview.interviewTime}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{eachInterview.status}</Table.Cell>
              <Table.Cell className="px-6 py-4 text-xs font-medium text-gray-700 tracking-wider">{eachInterview.interviewResponse || 'N/A'}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default InterviewsReport;
