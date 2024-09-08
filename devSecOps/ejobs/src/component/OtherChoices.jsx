// ------------version-------------
import { useState } from "react";

function OtherChoices({ choiceImage, title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMore = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="relative transition-all bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={choiceImage}
        alt={title}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p
          className={`text-sm text-gray-600 transition-all duration-700 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-96" : "max-h-16"
          }`}
        >
          {content}
        </p>
        <button
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium focus:outline-none"
          onClick={handleMore}
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default OtherChoices;
