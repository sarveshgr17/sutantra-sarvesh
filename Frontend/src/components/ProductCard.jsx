import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const ProductCard = ({ image, title, price, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-72 h-96 perspective">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >

        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg backface-hidden overflow-hidden flex flex-col">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover rounded-t-xl"
          />
          <div className="p-4">
            <div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-gray-600 mt-1">{price}</p>
            </div>
            <button
              onClick={() => setFlipped(true)}
              className="absolute bottom-4 right-4 w-6 h-6 bg-[#0367B0] hover:bg-[#024E80] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
        
        <div className="absolute w-full h-full bg-gray-50 rounded-xl shadow-lg backface-hidden rotate-y-180 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {description}
            </p>
          </div>
          <button
            onClick={() => setFlipped(false)}
            className="absolute bottom-4 right-4 w-6 h-6 bg-[#0367B0] hover:bg-[#024E80] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
