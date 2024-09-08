// ------------Version 2------------

import React, { useState } from 'react';
import PaymentHandler from '../PaymentHandler';
import MessageModal from '../Modals/Mesage';
import { Button, Table } from 'flowbite-react';

function SalaryPayment() {
  const [messageToggle, setMessageToggle] = useState(false);
  
  // PaymentHandler();

  const handleMessage = () => {
    setMessageToggle(!messageToggle);
  };

  return (
    <div className="p-6 w-full bg-white overflow-scroll rounded-lg shadow-lg">
      <Table className="w-full border-collapse">
        <Table.Head>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">S/N</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Company</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employer</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Salary</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Amount Due</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">More</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {['Paid', 'Pending', 'Paid', 'Paid'].map((eachCandidate, index) => {
            const statusClass = eachCandidate === 'Paid' 
              ? 'bg-green-500 text-white' 
              : eachCandidate === 'Pending' 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-400 text-white';
            
            return (
              <Table.Row key={index} className="hover:bg-blue-50 hover:text-blue-900 mt-4">
                <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">{index + 1}</Table.Cell>
                <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">Golden Gate Ltd</Table.Cell>
                <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">Shina Rambo</Table.Cell>
                <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">N150,000</Table.Cell>
                <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">N100,000</Table.Cell>
                <Table.Cell className={`border-t border-gray-200 text-xs font-medium px-6 py-4 tracking-wider `}>eachCandidate</Table.Cell>
                <Table.Cell className="border-t border-gray-200 text-xs font-medium text-gray-600 px-6 py-4 tracking-wider">
                  {eachCandidate === 'Pending' 
                    ? <PaymentHandler amount='100000' email='galapagous09@gmail.com' change='null' item='null' /> 
                    : <Button onClick={handleMessage} className='cursor-pointer bg-green-500 text-white inline rounded-sm'>Message</Button>}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {messageToggle && <MessageModal toggle={handleMessage} />}
    </div>
  );
}

export default SalaryPayment;
