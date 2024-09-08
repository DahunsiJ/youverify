import React from "react";
import CvInfo from "./CvInfo";
import CvEducation from "./CvEducation";
import CvWorkExperience from "./CvWorkExperience";
import CvCertificate from "./CvCertificate";
import CvGuarantor from "./CvGuarantor";
import { useSelector } from "react-redux";

function CvTemplate1({ education, experience, certificate, guarantor }) {
  const loggedInUser = useSelector((state) => state.user);
  return (
    <div className="bg-orange-100 p-8 w-5/6">
      <div>
        {/* -----------header section----------- */}
        <div>
          <span className="text-xl font-semibold">e-Job CV</span>
          <button className="px-2 rounded-xl bg-slate-300 ml-8">
            e-verify log
          </button>
          <p className="mt-2">Verify and certify the best to the world</p>
        </div>
      </div>
      {/* -----------Personal info section----------- */}
      <div className="mt-16">
        <h3 className="text-slate-700 text-xl">Personal Information</h3>
        <CvInfo
          title="Name"
          data={`${loggedInUser.currentUser.firstName} ${loggedInUser.currentUser.lastName}`}
        />
        <CvInfo
          title="Date of Birth"
          data={loggedInUser.currentUser.dateOfBirth}
        />
        <CvInfo title="Email" data={loggedInUser.currentUser.email} />
        <CvInfo
          title="Address"
          data={loggedInUser.currentUser.address}
        />
      </div>
      <div className="mt-8">
        <h3 className="text-slate-700 text-xl">Education Background</h3>
        {education && education.map((eachEducation, index) => {
          return (
            <CvEducation key={index}
              school={eachEducation.school}
              course={eachEducation.course}
              year={`${eachEducation.startYear} - ${eachEducation.finishYear}`}
            />
          );
        })}
      </div>
      <div className="mt-8">
        <h3 className="text-slate-700 mb-4 text-xl">Work Experience</h3>
        {experience && experience.map((eachExperience, index) => {
          return (
            <CvWorkExperience key={index}
              title={eachExperience.positionHeld}
              companyName={eachExperience.companyName}
              year={`${eachExperience.startYear} - ${eachExperience.finishYear}`}
              jobDescription={eachExperience.jobDescription}
            />
          );
        })}
      </div>
      <div className="mt-8">
        <h3 className="text-slate-700 mb-4 text-xl">Certificate</h3>
        {certificate && certificate.map((eachCertificate, index) => {
          return (
            <CvCertificate key={index}
              title={eachCertificate.certificateName}
              year={eachCertificate.issueDate}
            />
          );
        })}
      </div>
      <div className="mt-8">
        <h3 className="text-slate-700 mb-4 text-xl">Guarantor</h3>
        {guarantor && guarantor.map((eachGuarantor, index) => {
          return (
            <CvGuarantor key={index}
              guarantorName={eachGuarantor.guarantorName}
              phoneNumber={eachGuarantor.guarantorPhone}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CvTemplate1;
