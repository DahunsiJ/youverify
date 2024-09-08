
function JobProfile({handlePayment ,logo, jobType, typeDescription, profile, setProfile, price, type, mainType, currentType, category}) {

  return (
    <div className={`hover:bg-orange-200 border-2 p-4 rounded-lg border-slate-300 flex flex-col items-center justify-center w-52 shadow-lg ${category === '0' ? 'bg-red-100' : 'bg-white'}`}>
        {logo}
        <h2 className="font-semibold text-md my-2">{jobType}</h2>
        <p className="text-sm text-slate-500">{typeDescription}</p>
        <h4 className="mt-2 font-bold">{price}</h4>
        <button onClick={handlePayment} className="w-full py-1 px-2 bg-red-500 text-slate-50 my-2 rounded-sm">Continue</button>
    </div>
  )
}

export default JobProfile