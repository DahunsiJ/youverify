import React from "react";

function CvCertificate({ title, year }) {
  return (
    <div className="font-semibold">
      <div className="flex items-center justify-between mb-4">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
    </div>
  );
}

export default CvCertificate;
