
function ProfileInput({text, input, placeholder, update, name}) {
  return (
    <div className="sm:mb-8 mb-6 rounded-md relative w-full border-2 border-slate-300">
      <label htmlFor={name} className="absolute -top-4 bg-white">{text}</label>
      <input
        className="w-full border-none p-2 outline-none bg-white"
        type={input}
        placeholder={placeholder}
        id={name}
        onChange={update}
        name={name}
      />
    </div>
  );
}

export default ProfileInput;
