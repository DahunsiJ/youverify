// ---------Version2------------
import React, { useState } from 'react';
import MessageModal from '../Modals/Mesage';
import PaymentHandler from '../PaymentHandler';
import { Button, Table } from 'flowbite-react';

function BenefitRequests() {
  const [showMessage, setShowMessage] = useState(false);

  const HandleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow w-fit">
      <Table className="w-full border-collapse">
          <Table.Head className="bg-gray-200 w-full">
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">S/N</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Balance</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Amount requested</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Reason for request</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</Table.HeadCell>
            <Table.HeadCell className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</Table.HeadCell>
          </Table.Head>
        <Table.Body>
          {['paid', 'pending', 'paid', 'denied'].map((eachCandidate, index) => (
            <Table.Row key={index} className={`border-t ${eachCandidate === 'pending' ? 'bg-yellow-50' : 'hover:bg-gray-50'}`}>
              <Table.Cell className="border-gray-200 text-xs font-medium text-gray-600 px-6 py-4">{index + 1}</Table.Cell>
              <Table.Cell className="border-gray-200 text-xs font-medium text-gray-600 px-6 py-4">Shina Rambo</Table.Cell>
              <Table.Cell className="border-gray-200 text-xs font-medium text-gray-600 px-6 py-4">N400,000</Table.Cell>
              <Table.Cell className="border-gray-200 text-xs font-medium text-gray-600 px-6 py-4">N50,000</Table.Cell>
              <Table.Cell className="border-gray-200 text-xs font-medium text-gray-600 px-6 py-4">Medical expense</Table.Cell>
              <Table.Cell className="border-gray-200 text-xs font-medium text-gray-600 px-6 py-4">
                <span className='flex w-full items-center justify-center'>{eachCandidate}</span>
              </Table.Cell>
              <Table.Cell className="border-gray-200 text-xs font-medium text-gray-600 px-6 py-4">
                {eachCandidate === 'pending' ? (
                  <div className="flex items-center justify-center space-x-2">
                    <PaymentHandler email='galpapagous' amount='10000' />
                    <Button
                      className="bg-red-500 px-4 py-2 text-white rounded-sm"
                      onClick={() => { alert('Decline'); }}
                    >
                      Decline
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={HandleMessage}
                    className="px-4 py-2 bg-green-500 text-white rounded-sm"
                  >
                    Message
                  </Button>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {showMessage && <MessageModal toggle={HandleMessage} />}
    </div>
  );
}

export default BenefitRequests;
