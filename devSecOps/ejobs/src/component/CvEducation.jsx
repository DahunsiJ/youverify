import React from "react";

function CvEducation({school, course, year}) {
  return (
    <li className="flex items-start justify-between my-2">
      <div className="flex items-start">
        <h3 className="font-medium capitalize">
          {school}
        </h3>
        <span className="text-gray-700 ml-2 capitalize">
          {course}
        </span>
      </div>
      <div className="font-medium text-sm">{year}</div>
    </li>
  );
}

export default CvEducation;
