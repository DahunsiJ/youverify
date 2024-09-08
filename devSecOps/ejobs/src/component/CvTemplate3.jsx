import React from "react";
import CvInfo from "./CvInfo";
import CvEducation from "./CvEducation";
import CvWorkExperience from "./CvWorkExperience";
import CvCertificate from "./CvCertificate";
import CvGuarantor from "./CvGuarantor";
import { useSelector } from "react-redux";

function CvTemplate3({education, experience, certificate, guarantor}) {
  
  const loggedInUser = useSelector(state=>state.user)
  return (
    <div className="w-5/6">
      <div>
        {/* -----------header section----------- */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-semibold">e-Job CV</span>
            <button className="px-2 rounded-xl bg-slate-300 ml-8">
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
      <div className="flex items-start justify-start gap-10">
      <div className="mt-8 py-2 w-1/3">
        <h3 className="text-slate-700 text-lg">Personal Information</h3>
        <CvInfo third={true} title="Name" data={`${loggedInUser.currentUser.firstName} - ${loggedInUser.currentUser.lastName}`} />
        <CvInfo third={true} title="Date of Birth" data={loggedInUser.currentUser.dateOfBirth} />
        <CvInfo third={true} title="Email" data={loggedInUser.currentUser.email} />
        <CvInfo third={true}
          title="Address"
          data={loggedInUser.address}
        />
      </div>
      <div className="py-2 pl-6 pr-2 w-full bg-white text-black mt-8 rounded-tl-3xl">
        <div className="">
          <h3 className="text-slate-700 text-lg">Education Background</h3>
          {
            education.map((eachEducation)=>{
              return(
                <CvEducation
            school={eachEducation.school}
            course={eachEducation.course}
            year={`${eachEducation.startYear} - ${eachEducation.finishYear}`}
          />
              )
            })
          }
        </div>
        <div className="mt-8">
          <h3 className="text-slate-700 mb-4 text-xl">Work Experience</h3>
          {
            experience.map((eachExperience)=>{
              return(
                <CvWorkExperience
            title={eachExperience.positionHeld}
            companyName={eachExperience.companyName}
            year={`${eachExperience.startYear} - ${eachExperience.finishYear}`}
            jobDescription={eachExperience.jobDescription}
          />
              )
            })
          }
        </div>
        <div className="mt-8">
          <h3 className="text-slate-700 mb-4 text-xl">Certificate</h3>
          {
            certificate.map((eachCertificate)=>{
              return(
                <CvCertificate
            title={eachCertificate.certificateName}
            year={eachCertificate.issueDate}
          />
              )
            })
          }
        </div>
        <div className="mt-8">
          <h3 className="text-slate-700 mb-4 text-xl">Guarantor</h3>
          {
            guarantor.map((eachGuarantor)=>{
              return(
                <CvGuarantor
            guarantorName={eachGuarantor.guarantorName}
            // guarantorCompany={eachGuarantor.}
            phoneNumber={eachGuarantor.guarantorPhone}
          />
              )
            })
          }
        </div>
      </div>
      </div>
    </div>
  );
}

export default CvTemplate3;
