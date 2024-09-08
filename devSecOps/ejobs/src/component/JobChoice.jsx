import { useState } from "react"

function JobChoice({label, placeholder, setUserChoice}) {

  const handleInterest = (e)=>{
    setUserChoice(e.target.value)
  }
  return (
    <div className="flex flex-col items-start justify-start">
        <label htmlFor="choice">{label}</label>
        <input id="choice" name="choice" onChange={handleInterest} className="px-4 p-1 border-2 border-slate-400 outline-none" type="text" placeholder={placeholder}/>
    </div>
  )
}

export default JobChoice