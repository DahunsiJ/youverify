// ----------------Version 2----------------
import React, { useState } from 'react';
import { BsFire } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function MessageInfo({ data, userType }) {
  const [messageOpen, setMessageOpen] = useState(false);
  const handleToggle = () => {
    setMessageOpen(!messageOpen);
  };

  const ownerMessage = `You have accepted ${data?.recipient?.firstName} ${data?.recipient?.lastName}. Please click the link below to schedule an interview. This candidate has shown promising skills and qualifications that match our requirements. Ensure to review their profile thoroughly before the interview. If you have any questions or need further information, please contact our HR department.`;

  const rejected = `You have rejected the application of ${data?.recipient?.firstName} ${data?.recipient?.lastName}. This decision was made after careful consideration of their qualifications and experience. We encourage them to apply for other positions in the future. If you have any feedback for the candidate, please provide it to help them improve.`;
  
  const applicantMessage = `Congratulations! Your application to ${data?.sender?.companyName} has progressed to the next stage. We were impressed with your skills and experience. Please stay tuned for further updates regarding the next steps in the hiring process. In the meantime, feel free to review the company's profile and prepare any questions you might have for the upcoming interview.`;
  
  const applicantRejection = `We regret to inform you that your application to ${data?.sender?.companyName} has been rejected. This decision was based on a thorough evaluation of your qualifications and our current requirements. We appreciate your interest in our company and encourage you to apply for future openings. If you would like feedback on your application, please contact our recruitment team.`;
  
  const ownerOffer = `You have made an offer to ${data?.recipient?.firstName} ${data?.recipient?.lastName}, which is currently pending their response. This candidate has demonstrated exceptional skills and potential during the interview process. Please keep an eye on their response and be prepared to discuss any further details or negotiations. If you need assistance, our HR team is available to support you.`;
  
  const recipientOffer = `You have received an offer from ${data?.sender?.companyName}. Please review the offer details carefully and respond at your earliest convenience. This opportunity could be a significant step in your career, and we are excited about the potential of having you on our team. If you have any questions or need clarification on any aspect of the offer, please do not hesitate to contact our HR department.`;
  
  console.log({first: data.message})

  const messageForEmployer =
    data?.message === 'Congratulations' ? ownerMessage :
    data?.message === 'Offer letter' ? ownerOffer : rejected;

  const messageForSeekers =
    data?.message === 'Congratulations' ? applicantMessage :
    data?.message === 'Offer letter' ? recipientOffer :
    applicantRejection;

  return (
    <div className="w-full text-gray-600 p-4 bg-white shadow-md rounded-lg mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BsFire className={`mr-2 ${data.seen ? 'text-gray-600' : 'text-red-600'}`} />
          <div>
            <span className="block font-medium text-lg">{data.sender.companyName}</span>
            <span className="text-sm text-gray-500">From: {data.senderName}</span>
          </div>
        </div>
        <button onClick={handleToggle} className="py-1 px-4 text-xs rounded-full bg-orange-200 hover:bg-orange-300 focus:outline-none">
          {messageOpen ? 'Close' : 'Open'}
        </button>
      </div>
      {messageOpen && (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="mb-4">
            {userType === 'jobEmployer' ? messageForEmployer : messageForSeekers}
          </p>
          {userType === 'jobEmployer' && data.message === 'Congratulations' && (
            <Link
              to={`/${data.application.job}/jobApplicants`}
              className="inline-block mt-4 bg-orange-100 px-4 py-2 rounded-sm w-fit hover:bg-orange-300"
            >
              Schedule for interview
            </Link>
          )}
          {/* {userType === 'jobSeeker' && data.message === 'Offer letter' && console.log({data}) } */}
          {userType === 'jobSeeker' && data.message === 'Offer letter' && (
            <Link
              to={`/offer/${data.application.jobOffers[data.application.jobOffers?.length - 1]}/${data.application._id}`}
              className="inline-block mt-4 bg-orange-100 px-4 py-2 rounded-sm w-fit hover:bg-orange-300"
            >
              View Offer
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default MessageInfo;
