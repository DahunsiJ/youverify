import React from "react";
import Header from "../component/Header";
import GuarantorComponent from "../component/GuarantorComponent";
import FooterComponent from '../component/Footer'


function GuarantorForm() {
  return (
    <div>
      <div className="mx-24">
        <Header />
        <div className="border-2 pt-4 border-slate-400 w-3/4 mx-auto mt-8">
          <div className="border-b-2 border-slate-400 w-full flex items-center justify-center flex-col">
            <h3>
              To apply for job seekers allowance, Guarantors forms must be
              filled by your two guarantors.
            </h3>
            <h2 className="text-2xl font-semibold my-2">
              Select one of the below options to proceed.
            </h2>
          </div>
          <form action="" className="mt-4 p-4">
            <h3 className="font-semibold text-xl text-center my-8">
              Personal details
            </h3>
            <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Firstname"/>
              <GuarantorComponent title="Middlename"/>
              <GuarantorComponent title="Lastname"/>
            </div>
            <h3 className="font-medium mb-2">Passport photograph</h3>
            <div className="w-full mb-4">
              <input className="bg-slate-600 text-white" type="file" name="" id="" />
            </div>
            <h3 className="font-medium text-xl text-center mb-2 mt-6">Supplementary Address</h3>
            <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Address"/>
              <GuarantorComponent title="State"/>
              <GuarantorComponent title="City"/>
            </div>
            {/* Gender */}
            <div className="flex mb-2 mt-6 items-start justify-between">
              <GuarantorComponent title="Gender"/>
              <GuarantorComponent title="Marital status"/>
              <GuarantorComponent title="Phone Number"/>
            </div>
            {/* Date of birth */}
            <div className="flex mb-2 mt-6 items-start justify-between">
              <GuarantorComponent title="Date of birth"/>
              <GuarantorComponent title="City"/>
              <GuarantorComponent title="Nationality"/>
            </div>
            {/* Occupation */}
            <div className="flex mb-2 mt-6 items-start justify-between">
              <GuarantorComponent title="Occupation"/>
              <GuarantorComponent title="Local govt"/>
              <GuarantorComponent title="Ethnic/tribe"/>
            </div>
            {/* Qualification */}
            <div className="flex  items-start justify-between">
              <GuarantorComponent title="Qualification"/>
              <GuarantorComponent title="Position Applied"/>
              <GuarantorComponent title="City"/>
            </div>
            <div className="">
              <h2 className="font-semibold text-xl mt-10 text-center">Social Media details</h2>
              <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Facebook ID"/>
              <GuarantorComponent title="Instagram ID"/>
              <GuarantorComponent title="Skype ID"/>
              </div>
              <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Whatsapp ID"/>
              <GuarantorComponent title="Tel:"/>
              <GuarantorComponent title="Email"/>
              </div>
              <GuarantorComponent title="XID"/>
            </div>
              <h2 className="font-semibold text-xl mt-10 text-center">Bank details</h2>
            <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Account name"/>
              <GuarantorComponent title="Account no"/>
              <GuarantorComponent title="Bank branch"/>
            </div>
              <h2 className="font-semibold text-xl mt-10 text-center">Medical details</h2>
            <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Weight"/>
              <GuarantorComponent title="Genotype"/>
              <GuarantorComponent title="Blood group"/>
            </div>
            <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Blood pressure"/>
            </div>
              <h2 className="font-semibold text-xl mt-10 text-center">Religious details</h2>
            <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Church/Mosque"/>
              <GuarantorComponent title="Pastor/Imam"/>
              <GuarantorComponent title="Place of worship"/>
            </div>
            <div className="flex mb-4 items-start justify-between">
              <GuarantorComponent title="Church/Mosque Tel:"/>
            </div>
            {/* ------------------------Emergency contacts------------------------ */}
            <div>
            <h2 className="font-semibold text-xl mt-10 text-center">First emergency contact information (Family)</h2>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Name"/>
              <GuarantorComponent title="Relationship"/>
              <GuarantorComponent title="Work Tel."/>
              <GuarantorComponent title="Work address"/>
            </div>
            </div>
            <div>
            <h2 className="font-semibold text-xl mt-10 text-center">Second emergency contact information (Family)</h2>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Name"/>
              <GuarantorComponent title="Relationship"/>
              <GuarantorComponent title="Work Tel."/>
              <GuarantorComponent title="Work address"/>
            </div>
            </div>
            <div>
            <h2 className="font-semibold text-xl mt-10 text-center">First emergency contact information (Friend)</h2>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Name"/>
              <GuarantorComponent title="Relationship"/>
              <GuarantorComponent title="Work Tel."/>
              <GuarantorComponent title="Work address"/>
            </div>
            </div>
            <div>
            <h2 className="font-semibold text-xl mt-10 text-center">Second emergency contact information (Friend)</h2>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Name"/>
              <GuarantorComponent title="Relationship"/>
              <GuarantorComponent title="Work Tel."/>
              <GuarantorComponent title="Work address"/>
            </div>
            </div>
            {/* Guarantor information section */}
            <div>
            <h2 className="font-semibold text-xl mt-10 text-center">1st guarantor&apos;s details</h2>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Name"/>
              <GuarantorComponent title="Surname"/>
              <GuarantorComponent title="Middle name"/>
              <GuarantorComponent title="Preffered name"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <div className="flex flex-col items-start justify-start">
              <label>Passport photograph</label>
              <input className="border-2 border-slate-400 p-1 rounded-sm" type="file" name="" id="" />
              </div>
              <GuarantorComponent title="Current residential address"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Number of years spent at that address"/>
              <GuarantorComponent title="Phone no"/>
              <GuarantorComponent title="Home tel"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Any other tel"/>
              <GuarantorComponent title="Email"/>
              <GuarantorComponent title="Date of birth"/>
              <GuarantorComponent title="Marital status"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Relationship with applicant"/>
              <GuarantorComponent title="Residential address (if less than 8 years)"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Employment status"/>
              <GuarantorComponent title="Employer"/>
              <GuarantorComponent title="Employer Address"/>
              <GuarantorComponent title="Name"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Employer&apos;s phone no"/>
              <GuarantorComponent title="Line manager or other contact"/>
              <GuarantorComponent title="Date started this employment"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Current job title"/>
              <GuarantorComponent title="Previous occupation(if less than 3yrs)"/>
            </div>
            </div>
            <div>
            <h2 className="font-semibold text-xl mt-10 text-center">2nd guarantor&apos;s details</h2>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Name"/>
              <GuarantorComponent title="Surname"/>
              <GuarantorComponent title="Middle name"/>
              <GuarantorComponent title="Preffered name"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <div className="flex flex-col items-start justify-start">
              <label>Passport photograph</label>
              <input className="border-2 border-slate-400 p-1 rounded-sm" type="file" name="" id="" />
              </div>
              <GuarantorComponent title="Current residential address"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Number of years spent at that address"/>
              <GuarantorComponent title="Phone no"/>
              <GuarantorComponent title="Home tel"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Any other tel"/>
              <GuarantorComponent title="Email"/>
              <GuarantorComponent title="Date of birth"/>
              <GuarantorComponent title="Marital status"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Relationship with applicant"/>
              <GuarantorComponent title="Residential address (if less than 8 years)"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Employment status"/>
              <GuarantorComponent title="Employer"/>
              <GuarantorComponent title="Employer Address"/>
              <GuarantorComponent title="Name"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Employer&apos;s phone no"/>
              <GuarantorComponent title="Line manager or other contact"/>
              <GuarantorComponent title="Date started this employment"/>
            </div>
            <div className="flex mb-4 items-start gap-4 justify-between">
              <GuarantorComponent title="Current job title"/>
              <GuarantorComponent title="Previous occupation(if less than 3yrs)"/>
            </div>
            </div>
            <button className="py-2 bg-orange-500 text-white font-semibold w-1/3 mx-64 mt-2 mb-10">
              Submit
            </button>
          </form>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default GuarantorForm;
