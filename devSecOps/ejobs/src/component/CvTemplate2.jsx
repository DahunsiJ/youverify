import React from "react";
import CvInfo from "./CvInfo";
import CvEducation from "./CvEducation";
import CvWorkExperience from "./CvWorkExperience";
import CvCertificate from "./CvCertificate";
import CvGuarantor from "./CvGuarantor";
import { useSelector } from "react-redux";

function CvTemplate2({ education, experience, certificate, guarantor }) {
  const loggedInUser = useSelector(state=>state.user) 
  return (
    <div className="bg-black text-white p-8 w-5/6">
      <div>
        {/* -----------header section----------- */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-semibold">e-Job CV</span>
            <button className="px-2 rounded-xl bg-slate-600 ml-8">
              e-verify log
            </button>
            <p className="mt-2">Verify and certify the best to the world</p>
          </div>
          <div>
            <p className="font-semibold">Date Generated</p>
            <h4>11-02-2024</h4>
          </div>
        </div>
      </div>
      {/* -----------Personal info section----------- */}
      <div className="mt-16 ml-6">
        <h3 className="text-xl">{`${loggedInUser.currentUser.firstName} ${loggedInUser.currentUser.lastName}`}</h3>
        <CvInfo title="Date of Birth" data={loggedInUser.currentUser.dateOfBirth} />
        <CvInfo title="Email" data={loggedInUser.currentUser.email} />
        <CvInfo
          title="Address"
          data={loggedInUser.currentUser.address}
        />
      </div>
      <div className="py-2 pl-6 pr-2 w-full bg-white text-black mt-8 rounded-tl-3xl">
        <div className="">
          <h3 className="text-slate-700 text-xl">Education Background</h3>
          {education.map((eachEducation) => {
            return (
              <CvEducation
                school={eachEducation.school}
                course={eachEducation.course}
                year={`${eachEducation.startYear} ${eachEducation.finishYear}`}
              />
            );
          })}
        </div>
        <div className="mt-8">
          <h3 className="text-slate-700 mb-4 text-xl">Work Experience</h3>
          {experience.map((eachExperience) => {
            return (
              <CvWorkExperience
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
          {certificate.map((eachCertificate) => {
            return (
              <CvCertificate
                title={eachCertificate.certificateName}
                year={eachCertificate.issueDate}
              />
            );
          })}
        </div>
        <div className="mt-8">
          <h3 className="text-slate-700 mb-4 text-xl">Guarantor</h3>
          {guarantor.map((eachGuarantor) => {
            return (
              <CvGuarantor
                guarantorName={eachGuarantor.guarantorName}
                // guarantorCompany={eachGuarantor.}
                phoneNumber={eachGuarantor.guarantorPhone}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CvTemplate2;
