import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100%] text-white bg-green-500 ">
      <div className="flex flex-col md:flex-row md:justify-between px-10 justify-center items-center py-4 gap-7 pb-[17px] bg-black text-white">
        <p className="text-[10px] md:text-[8px] tracking-[4px]">
          © 2024 <span className="text-green-500 font-bold">FRESHMET</span> ALL
          RIGHTS RESERVED.
        </p>
        {/* logo Section */}

        <p className="hidden md:block text-[10px] tracking-[4px]">
          Buy Helthy and Good Products
        </p>
      </div>
    </div>
  );
};

export default Footer;
