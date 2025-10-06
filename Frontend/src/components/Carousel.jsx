import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { assets } from "../assets/assets";

const Carousel = () => {
  const images = [
    assets.Slider1,
    assets.Slider2,
    assets.Slider3,
    assets.Slider4,
    assets.Slider5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
