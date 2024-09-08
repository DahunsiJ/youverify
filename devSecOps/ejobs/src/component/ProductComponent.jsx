import React from 'react';

function ProductComponent({ productImage, productTitle }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-white">
      <img 
        className="w-52 sm:w-56 h-52 object-cover"
        src={productImage} 
        alt="Product Image" 
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black to-transparent text-center text-white">
        <h3 className="text-xl font-semibold mb-2">{productTitle}</h3>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300">
          Read More
        </button>
      </div>
    </div>
  );
}

export default ProductComponent;
