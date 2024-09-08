function ProfileData(props) {
  const {data, placeholder, tagName, handleChange} = props

  return (
    <div className="mb-4 rounded-sm relative w-full border-2 border-gray-300 p-1">
      <label htmlFor={data} className="absolute -top-4 bg-white">{tagName}</label>
      <input onChange={handleChange} id={data} name={data} className="w-full border-none outline-none" type="text" placeholder={placeholder} />
    </div>
  );
}

export default ProfileData;