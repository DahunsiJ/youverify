import Header from "../component/Header";
import FooterComponent from "../component/Footer";

function JobFromEja() {
  return (
    <div className="w-full">
      <div className="px-24">
        <Header darkMode={true} />

        {/* ---------------- job description -------------------- */}
        <div className="mt-24 text-sm">
          <h3 className="font-semibold text-sm  uppercase my-4">
            Job Description and breakdown
          </h3>
          <p className="font-medium text-sm my-4 text-slate-400">
            Please fill the form below to vividly explain the job opening and to
            attract the right candidate
          </p>
          <div className="border-2 w-full border-slate-300 p-4 rounded-lg">
            <div className="w-full">
              <h2>Job Title</h2>
              <input
                className="w-full border-2 mt-2 p-1.5 rounded-sm "
                type="text"
                placeholder="seach by LGA"
              />
              <span className="text-sm text-slate-400 mb-2">
                0/100 character limit
              </span>
            </div>
            <div className="my-4 flex items-center justify-center gap-4">
              <div className="w-full my-2">
                <label className="block my-2" htmlFor="">
                  Job Function
                </label>
                <select className="p-2 border-2 border-slate-300 w-full">
                  <option selected={true}>Select</option>
                  <option value="accounting">Accounting</option>
                  <option value="graphic design">Graphic design</option>
                  <option value="web development">Web development</option>
                </select>
              </div>
              <div className="w-full my-4">
                <label className="block my-2" htmlFor="">
                  Industry
                </label>
                <select className="p-2 border-2 border-slate-300 w-full">
                  <option selected={true}>Select</option>
                  <option value="Production">Accounting</option>
                  <option value="Accounting">Graphic design</option>
                  <option value="IT">Web development</option>
                </select>
              </div>
              <div className="w-full my-4">
                <label className="block my-2" htmlFor="">
                  Work type
                </label>
                <select className="p-2 border-2 border-slate-300 w-full">
                  <option selected={true}>Select</option>
                  <option value="Full time">Full time</option>
                  <option value="Part time">Part time</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>
            <div className="my-4 flex items-center justify-center gap-4">
              <div className="w-full my-4">
                <label className="block my-2" htmlFor="">
                  Location
                </label>
                <select className="p-2 border-2 border-slate-300 w-full">
                  <option selected={true}>Select</option>
                  <option value="Entry Level">Accounting</option>
                  <option value="Intermediate">Graphic design</option>
                  <option value="Experienced">Web development</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block my-2" htmlFor="">
                  Minimum Qualification
                </label>
                <select className="p-2 border-2 border-slate-300 w-full">
                  <option selected={true}>Select</option>
                  <option value="Naira">Naira</option>
                  <option value="Dollar">Dollars</option>
                  <option value="Pounds">Pounds</option>
                </select>
              </div>
              <div className="w-full">
                <div>
                  <label className="block my-2" htmlFor="">
                    Experience Length
                  </label>
                  {/* <input className="p-2 w-full border-2 border-slate-300" type="text" placeholder="Type figure here"/> */}
                  <select className="p-2 border-2 border-slate-300 w-full">
                    <option selected={true}>Select</option>
                    <option value="Naira">Naira</option>
                    <option value="Dollar">Dollars</option>
                    <option value="Pounds">Pounds</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="my-4 flex items-center justify-center gap-4">
              <div className="w-full my-4">
                <label className="block my-2" htmlFor="">
                  Job Level
                </label>
                <select className="p-2 border-2 border-slate-300 w-full">
                  <option selected={true}>Select</option>
                  <option value="Entry Level">Accounting</option>
                  <option value="Intermediate">Graphic design</option>
                  <option value="Experienced">Web development</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block my-2" htmlFor="">
                  Select Currency
                </label>
                <select className="p-2 border-2 border-slate-300 w-full">
                  <option selected={true}>Select</option>
                  <option value="Naira">Naira</option>
                  <option value="Dollar">Dollars</option>
                  <option value="Pounds">Pounds</option>
                </select>
              </div>
              <div className="w-full">
                <div>
                  <label className="block my-2" htmlFor="">
                    Monthly Salary
                  </label>
                  <input
                    className="p-2 w-full border-2 border-slate-300"
                    type="text"
                    placeholder="Type figure here"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <div className="w-full my-4 flex border-2 border-slate-300 items-start justify-center">
                <h4 className="w-3/4">
                  How many Days should this job be aired
                </h4>
                <input
                  className="outline-none w-1/4 p-2 bg-slate-200"
                  type="text"
                  placeholder="0"
                />
              </div>
              <div className="w-full my-4 flex border-2 border-slate-300 items-start justify-center">
                <h4 className="w-3/4">How many openings are available</h4>
                <input
                  className="outline-none w-1/4 p-2 bg-slate-200"
                  type="text"
                  placeholder="0"
                />
              </div>
            </div>
            <button className="px-14 py-2 font-semibold bg-orange-500 text-slate-50 mx-auto text-center">
              Saved
            </button>
          </div>
        </div>
        {/* -------job description second section-------- */}
        <div className="mt-14 text-sm">
          <h3 className="font-semibold text-sm  uppercase my-4">
            {" "}
            Job Description and breakdown
          </h3>
          <p className="font-medium text-md my-4 text-slate-400">
            Please fill the form below to vividly explain the job opening and to
            attract the right candidate
          </p>
          <div className="border-2 border-slate-300 rounded-lg p-4">
            <div className="">
              <h2 className="font-semibold text-sm  uppercase my-4">
                Job Summary
              </h2>
              <textarea
                className="w-full p-2 rounded-lg border-slate-300 border-2 h-56"
                placeholder=" the Summary helps you attract the right candidate only include the most important information to grab the attention of the job seekers. Keep it as short as possible"
              ></textarea>
              <span className="text-sm text-slate-400 mb-2">
                0/100 character limit
              </span>
            </div>
            {/* ---------job description------------ */}
            <div className="my-4">
              <div className="my-2">
                <label className="block mb-1" htmlFor="">
                  Job Description
                </label>
                <textarea
                  className="w-full p-2 border-slate-300 border-2 rounded-lg h-52"
                  name=""
                  id=""
                  placeholder=" the Summary helps you attract the right candidate only include the most important information to grab the attention of the job seekers. Keep it as short as possible...|"
                ></textarea>
              </div>
              {/* --------------add a question-------------- */}
              <div className="flex items-center justify-between w-2/3">
                <li>Set to prerequisite</li>
                <div className="flex gap-4 items-center">
                  <span className="px-2 bg-slate-200 rounded-sm cursor-pointer">
                    Yes
                  </span>
                  <span className="px-2 bg-slate-200 rounded-sm cursor-pointer">
                    No
                  </span>
                </div>
              </div>
              <button className="bg-slate-200 rounded-sm px-2 py-1 mt-4 mb-2">
                Add another question +
              </button>
              <div className="flex items-center justify-between w-2/3 my-2">
                <li>Would you like applicants to apply with cover letter?</li>
                <div className="flex items-center gap-2">
                  <span className="px-2 bg-slate-200 rounded-sm cursor-pointer">
                    Yes
                  </span>
                  <span className="px-2 bg-slate-200 rounded-sm cursor-pointer">
                    No
                  </span>
                  <span className="px-2 bg-slate-200 rounded-sm cursor-pointer">
                    Optional
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between w-2/3">
                <li> Should applicant upload other documents?</li>
                <div className="flex items-center gap-2">
                  <span className="px-2 bg-slate-200 rounded-sm cursor-pointer">
                    Yes
                  </span>
                  <span className="px-2 bg-slate-200 rounded-sm cursor-pointer">
                    No
                  </span>
                  <span className="px-2 bg-slate-200 rounded-sm cursor-pointer">
                    Optional
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col justify-start w-2/3 px-1 py-1 mb-2">
              <label htmlFor="">Add required skills</label>
              <select className="outline-none border-2 border-slate-300 mt-1 p-2 w-2/3">
                <option selected={true}>Select</option>
                <option value="Entry Level">MS Office</option>
                <option value="Intermediate">Multi tasking</option>
                <option value="Experienced">Soft skills</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start flex-col justify-start w-2/3 px-1 py-1 mb-2">
                <label htmlFor="">Add required skills</label>
                <select className="outline-none border-2 border-slate-300 mt-1 p-2 w-2/3">
                  <option selected={true}>Select</option>
                  <option value="Entry Level">MS Office</option>
                  <option value="Intermediate">Multi tasking</option>
                  <option value="Experienced">Soft skills</option>
                </select>
              </div>
              <div className="flex items-start flex-col justify-start w-2/3 px-1 py-1 mb-2">
                <label htmlFor="">Work Location</label>
                <select className="outline-none border-2 border-slate-300 mt-1 p-2 w-2/3">
                  <option selected={true}>Lagos</option>
                  <option value="accounting">Abuja</option>
                  <option value="graphic design">Ibadan</option>
                  <option value="web development">Portharcourt</option>
                </select>
              </div>
            </div>
          </div>
          {/* -------Social media area------- */}
          <div className="w-full flex iems-center justify-center gap-4 my-4">
            <button className="px-4 py-1 bg-orange-500 text-slate-50">
              Send for approval
            </button>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default JobFromEja;
