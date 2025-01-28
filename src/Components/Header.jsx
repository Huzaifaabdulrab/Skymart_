import React, { useContext, useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiHeart, CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { LikesContext } from "../Context";
import axios from "axios";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState(""); // To determine what content to show in the sidebar

  const [likes] = useContext(LikesContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      const filtered = res.data.filter((item) => likes.includes(item.id));
      setData(filtered);
    };
    fetchData();
  }, [likes]);

  const toggleSidebar = (content) => {
    setSidebarContent(content);
    setIsSidebarOpen(true);
    console.log(data);
    console.log(data.length);
  };

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
          <div
            className="relative flex flex-col items-center text-gray-700 cursor-pointer"
            onClick={() => toggleSidebar("favorites")}
          >
            <CiHeart className="text-2xl md:text-3xl" />
            <span className="absolute -top-1 -right-1 bg-[#8B4513] text-white text-xs rounded-full px-1">
              {likes.length}
            </span>
            <p className="text-xs md:text-sm">Favorites</p>
          </div>

          <div
            className="relative flex flex-col items-center text-gray-700 ml-auto cursor-pointer"
            onClick={() => toggleSidebar("cart")}
          >
            <TiShoppingCart className="text-2xl md:text-3xl" />
            <span className="absolute -top-1 -right-1 bg-[#8B4513] text-white text-xs rounded-full px-1">
              
            </span>
            <p className="text-xs md:text-sm">My Cart</p>
          </div>
        </div>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-full w-[300px] z-[100] bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-xl text-gray-600"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✖
        </button>
        <div className="p-4">
          {sidebarContent === "favorites" && (
            <div>
              <h3 className="font-bold text-lg mb-4">Your Favorites</h3>
              {data.length != 0 ? (
                <div>
                  {data.map((data) => {
                    return (
                      <>
                        <div className="mt-10 p-2 items-center justify-between shadow-xl">
                          <div className="flex justify-start items-center">
                            <img className="h-16" src={data.image} alt="" />
                            <div className="justify-start">
                            <p className="px-3">{data.title}</p>
                            <p className="font-semibold px-3">${data.price}</p>
                            </div>
                          </div>
                          
                        </div>
                      </>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-600">You have no favorite items yet.</p>
              )}
            </div>
          )}
          {sidebarContent === "cart" && (
            <div>
              <h3 className="font-bold text-lg mb-4">Your Cart</h3>
              <p className="text-gray-600">Your cart is currently empty.</p>
            </div>
          )}
        </div>
      </div>

     
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;
