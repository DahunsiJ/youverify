import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

function InterviewQuestion({value, remove, currentQues, setQues}) {
    const [wordCount, setWordCount] = useState(0)
    const [firstPrequisite, setFirstPrerequisite] = useState(true)

    const handleRemoveQuest = ()=>{
      remove(value)
    }

    const handleChange = (e)=>{
      setQues(e.target.value)
    }

  return (
    <div>
      <div className="my-2 relative">
        <MdCancel onClick={handleRemoveQuest} className="absolute top-5 right-0 text-red-400 cursor-pointer"/>
        <h2>Add an interview question</h2>
        <textarea
          className="w-full p-1 border-slate-300 border-2 rounded-sm h-52"
          placeholder=" the Summary helps you attract the right candidate only include the most important information to grab the attention of the job seekers. Keep it as short as possible"
          onChange={handleChange}
          name="additionalQuestion"
        ></textarea>
        <span className="text-sm text-slate-400 mb-2">
          {wordCount}/100 character limit
        </span>
      </div>
      <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between justify-start w-2/3">
        <li>Set to prerequisite</li>
        <div className="flex gap-4 items-center">
          <span onClick={()=>{setFirstPrerequisite(true)}} className={`${firstPrequisite ? "bg-green-500 text-white" : "bg-slate-200"} px-4 py-1.5 rounded-sm cursor-pointer hover:bg-green-300 hover:text-white`}>
            Yes
          </span>
          <span onClick={()=>{setFirstPrerequisite(false)}} className={`${!firstPrequisite ? "bg-red-500 text-white" : "bg-slate-200"} px-4 py-1.5 rounded-sm cursor-pointer hover:bg-red-300 hover:text-white`}>
            No
          </span>
        </div>
      </div>
    </div>
  );
}

export default InterviewQuestion;
