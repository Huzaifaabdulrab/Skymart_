import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { CiHeart, CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between w-[95%] mx-auto py-4 gap-4">
      <div className="text-3xl md:text-4xl font-bold text-[#A52A2A]">
        <span className="text-[#FF6F50]">SAND</span>CITY
      </div>

      <div className="order-3 md:order-none w-full flex md:w-[60%] lg:w-[40%] border border-gray-300 rounded-lg h-12 overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 bg-white outline-none text-sm md:text-base"
          />
        <button className="bg-[#8B4513] p-3 md:p-4 flex justify-center items-center">
          <CiSearch className="text-white text-xl md:text-2xl" />
        </button>
      </div>

      <div className="hidden md:flex items-center border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
        <FaPhoneAlt className="text-[#8B4513] text-xl md:text-2xl mr-2" />
        <div className="text-xs md:text-sm">
          <p className="text-gray-500">Need help? Call us:</p>
          <p className="font-bold text-[#2F2F2F]">+974 3121 4373</p>
        </div>
      </div>

      <div className="flex justify-between w-full md:w-auto">
        <div className="relative flex flex-col items-center text-gray-700">
          <CiHeart className="text-2xl md:text-3xl" />
          <span className="absolute -top-1 -right-1 bg-[#8B4513] text-white text-xs rounded-full px-1">
            0
          </span>
          <p className="text-xs md:text-sm">Favorites</p>
        </div>

        <div className="relative flex flex-col items-center text-gray-700 ml-auto">
          <TiShoppingCart className="text-2xl md:text-3xl" />
          <span className="absolute -top-1 -right-1 bg-[#8B4513] text-white text-xs rounded-full px-1">
            0
          </span>
          <p className="text-xs md:text-sm">My Cart</p>
        </div>
      </div>
    </div>
          </>
  )
}

export default Header
