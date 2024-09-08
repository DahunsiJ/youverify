import React from 'react';

function CategoryComponent({ categoryImage, categoryTitle, categoryMember, categoryPost }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <img src={categoryImage} alt="category image" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">{categoryTitle}</h1>
        <div className="text-gray-600 text-sm mb-4">
          <span className="mr-4">{categoryMember} Members</span>
          <span>{categoryPost} Posts Today</span>
        </div>
        <button className="py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300">
          Join
        </button>
      </div>
    </div>
  );
}

export default CategoryComponent;
