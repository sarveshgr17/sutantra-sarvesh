import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full flex items-center justify-between py-3 px-10 shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img
          src={assets.Logo}
          alt="Su-Tantra Logo"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <ul className="flex space-x-8 font-semibold text-sm tracking-wide">
        <li
          onClick={() => navigate("/")}
          className="hover:text-blue-500 cursor-pointer"
        >
          HOME
        </li>
        <li
          onClick={() => navigate("/about")}
          className="hover:text-blue-500 cursor-pointer"
        >
          ABOUT
        </li>
        <li
          onClick={() => navigate("/products")}
          className="hover:text-blue-500 cursor-pointer"
        >
          PRODUCTS
        </li>
        <li
          onClick={() => navigate("/contact")}
          className="hover:text-blue-500 cursor-pointer"
        >
          CONTACT
        </li>
      </ul>
      <div className="flex space-x-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <FaFacebookF size={22} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
        >
          <FaLinkedinIn size={24} />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
        >
          <FaTwitter size={24} />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
        >
          <FaYoutube size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
