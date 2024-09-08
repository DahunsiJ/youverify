function ApplicationSteps({ logo, title, content }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg text-gray-800 max-w-xs mx-auto">
      <div className="p-4 bg-orange-100 rounded-full mb-4">
        {logo}
      </div>
      <h2 className="text-xl font-semibold text-center mb-2">{title}</h2>
      <p className="text-center text-gray-600">{content}</p>
    </div>
  );
}

export default ApplicationSteps;
