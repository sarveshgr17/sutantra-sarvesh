import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div><footer className="bg-[#0367B0] text-white py-12 px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* CONTACT US */}
      <div>
        <h3 className="text-lg font-semibold tracking-wide mb-4">CONTACT US</h3>
        <p className="font-bold text-white mb-2">SU-TANTRA EQUIPMENTS PVT. LTD.</p>
        <div className="space-y-2 text-gray-200 text-sm leading-relaxed">
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-0.5" />
            <span>
              G-54, MIDC, Chikalthana,
              <br />
              Aurangabad-431 006 (MS).
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+91 98234 35904, +91 93261 93913</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>sutantraequipments@gmail.com</span>
          </div>
        </div>
      </div>

      {/* OUR PRODUCTS */}
      <div>
        <h3 className="text-lg font-semibold tracking-wide mb-4">OUR PRODUCTS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 text-sm text-gray-200 space-y-1">
          <ul className="space-y-2">
            <li>› Pulpers</li>
            <li>› Pulping Equipments</li>
            <li>› Cleaning Equipments</li>
            <li>› Screening Equipments</li>
            <li>› Thickening Equipments</li>
          </ul>
          <ul className="space-y-2">
            <li>› Refining Equipments</li>
            <li>› De-Inking System</li>
            <li>› Dispersion System</li>
            <li>› Chest & Towers</li>
            <li>› Spares</li>
          </ul>
        </div>
      </div>

      {/* FOLLOW US */}
      <div>
        <h3 className="text-lg font-semibold tracking-wide mb-4">FOLLOW US</h3>
        <div className="flex items-center gap-4">
          <a href="#" className="bg-[#5879AF] p-3 rounded-full hover:bg-[#3b5998] transition">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="bg-[#5879AF] p-3 rounded-full hover:bg-[#0077B5] transition">
            <FaLinkedinIn size={18} />
          </a>
          <a href="#" className="bg-[#5879AF] p-3 rounded-full hover:bg-[#1DA1F2] transition">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="bg-[#5879AF] p-3 rounded-full hover:bg-[#FF0000] transition">
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </footer></div>
  )
}

export default ContactUs