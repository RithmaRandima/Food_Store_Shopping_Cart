import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-10">
      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* left */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-bold tracking-wide">
            <span className="text-green-500">FRESHMET</span>
          </h1>
          <p className="text-[11px] text-gray-400 tracking-[2px] mt-1">
            © 2024 ALL RIGHTS RESERVED
          </p>
        </div>

        {/* middle text */}
        <p className="text-[11px] md:text-[12px] text-gray-300 tracking-[3px] text-center">
          Buy Healthy & Fresh Organic Products
        </p>

        {/* social icons */}
        <div className="flex gap-4 text-gray-400">
          <FaFacebook className="hover:text-green-500 cursor-pointer transition" />
          <FaInstagram className="hover:text-green-500 cursor-pointer transition" />
          <FaTwitter className="hover:text-green-500 cursor-pointer transition" />
          <FaGooglePlusG className="hover:text-green-500 cursor-pointer transition" />
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-gray-800 py-3 text-center text-[10px] text-gray-500 tracking-[2px]">
        Made with ❤️ for fresh grocery experience
      </div>
    </footer>
  );
};

export default Footer;
