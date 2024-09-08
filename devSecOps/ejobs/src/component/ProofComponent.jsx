import React from 'react'

const ProofComponent = (proofData) => {
  return (
    <div className="w-1/4 group cursor-pointer h-auto relative rounded-md overflow-hidden">
        <img className="w-full h-72 object-cover" src={proofData.image} alt="organization premises 1" />
        <div className="hidden group-hover:transition-all group-hover:ease-in-out group-hover:delay-100 group-hover:inline-block w-full absolute bottom-0 left-0 bg-black text-white p-2 bg-opacity-70">
            <h2 className="text-xl">{proofData.title}</h2>
            <p className="text-sm">{proofData.description}</p>
        </div>
    </div>
  )
}

export default ProofComponent