import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isAllPagesDropdownOpen, setIsAllPagesDropdownOpen] = useState(false);
  const [isHotProductsDropdownOpen, setIsHotProductsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#AD6237] p-2 flex justify-between items-center sticky top-0 z-50">

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between items-center gap-5">
          {/* All Pages Dropdown */}
          <div
            className="relative h-10 w-52 rounded-md py-2 px-3 bg-white text-amber-700 cursor-pointer"
            onMouseEnter={() => setIsAllPagesDropdownOpen(true)}
            onMouseLeave={() => setIsAllPagesDropdownOpen(false)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[#AD6237] font-medium">All Pages</span>
              <span>
                <i className="fa-solid fa-arrow-down text-[#AD6237]"></i>
              </span>
            </div>
            {isAllPagesDropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-full text-[#AD6237] z-10">
                <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  Home
                </li>
                <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  Shop
                </li>
                <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  Contact
                </li>
                <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  About
                </li>
              </ul>
            )}
          </div>

          {/* Menu Links */}
          <ul className="flex text-white font-semibold gap-5 justify-center items-center">
            <li>
              <Link
                className="hover:bg-white p-2 hover:text-[#AD6237] hover:rounded-md"
              to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <div
                className="relative"
                onMouseEnter={() => setIsHotProductsDropdownOpen(true)}
                onMouseLeave={() => setIsHotProductsDropdownOpen(false)}
              >
                <Link
                  to="/Productlist"
                  className="hover:bg-white hover:text-[#AD6237] p-2 hover:rounded-md flex items-center"
                >
                  Hot Products
                  <i className="fa-solid fa-arrow-down ml-3"></i>
                </Link>
                {isHotProductsDropdownOpen && (
                  <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md text-[#AD6237] z-10">
                    <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                      <Link to="/Productlist">
                      Services
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                      Blog
                    </li>
                    <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                      Careers
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link
                className="hover:bg-white hover:text-[#AD6237] p-2 hover:rounded-md"
                to="/OurStory"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-white hover:text-[#AD6237] p-2 hover:rounded-md"
                to="/Contact"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="hidden lg:flex gap-4">
          <div
            className="relative"
            onMouseEnter={() => setIsLanguageDropdownOpen(true)}
            onMouseLeave={() => setIsLanguageDropdownOpen(false)}
          >
            <a
              href="#"
              className="text-white font-semibold p-2 hover:rounded-md flex items-center"
            >
              English
              <i className="fa-solid fa-arrow-down ml-3"></i>
            </a>
            {isLanguageDropdownOpen && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md text-[#AD6237] z-10">
                <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  Arabic
                </li>
                {/* <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  Demo Language
                </li> */}
              </ul>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setIsCurrencyDropdownOpen(true)}
            onMouseLeave={() => setIsCurrencyDropdownOpen(false)}
          >
            <a
              href="#"
              className="text-white font-semibold p-2 hover:rounded-md flex items-center"
            >
              USD
              <i className="fa-solid fa-arrow-down ml-3"></i>
            </a>
            {isCurrencyDropdownOpen && (
              <ul
                className="absolute left-0 top-full w-auto mt-2 bg-white shadow-md rounded-md text-[#AD6237] z-10"
                style={{
                  overflowY: "auto",
                  maxHeight: "200px",
                }}
              >
                <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                 EUR
                </li>
                {/* <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  This is just for demo
                </li> */}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-end w-[100%]">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-xl"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#AD6237] p-4 text-white">
          <ul className="space-y-3">
            <li>
              <Link to="/" className="block">Home</Link>
            </li>
            <li>
              <a href="#" className="block">Hot Products</a>
            </li>
            <li>
              <Link to="/OurStory" className="block">Our Story</Link>
            </li>
            <li>
              <Link to="/Contact" className="block">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
