import React from "react";
import hair from "../assets/Catagri/hair.jpg";
import jewearlry from "../assets/Catagri/jewealry.jpg";
import makup from "../assets/Catagri/makup.avif";
import multi from "../assets/Catagri/multi.png";
import nails from "../assets/Catagri/nails.jpg";
import { Link } from "react-router-dom";

const Catagri = (props) => {
  return (
    <>
      <h1 className="mt-10 mb-20 text-center text-4xl font-bold text-[#AD6237]">
        {props.popular} <span className="text-black">{props.Catogeries}</span>
      </h1>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 h-full container-md px-6 md:px-16 lg:px-24 mx-auto">
        <div className="relative h-full w-full mx-auto">
          <h3 className="absolute top-1/2 left-1/2 w-44 -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl font-bold text-[#Ac6236] z-10 text-center">
            <Link to="/Productlist">Hair Products</Link>
          </h3>
          <p className="absolute p-4 top-1/2 left-1/2 h-36 w-56 cursor-pointer -translate-x-1/2 translate-y-4 text-lg md:text-2xl font-semibold opacity-0 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0 z-10 text-center">
            4 products
          </p>
          <img
            src={nails}
            alt="nails"
            className="w-full h-full object-cover aspect-square"
          />
        </div>

        <div className="h-auto md:h-[100vh] grid grid-cols-1 sm:grid-cols-2 w-full gap-5">
          <div className="w-full relative overflow-hidden mt-0 md:mt-0 cursor-pointer">
            <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] w-44 translate-y-[-50%] text-xl md:text-2xl font-bold text-[#Ac6236] z-10 text-center">
              <Link to="/Productlist">Hair Products</Link>
            </h3>
            <p className="absolute p-4 top-[50%] left-[50%] translate-x-[-50%] h-36 w-56  text-lg md:text-2xl font-semibold opacity-0 translate-y-4 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0 z-10 text-center">
              4 products
            </p>
            <img
              src={hair}
              alt="hair"
              className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <div className="w-full flex justify-center items-center mt-5 md:mt-10 relative overflow-hidden cursor-pointer">
            <h3 className="absolute top-[50%] left-[50%] w-44 translate-x-[-50%] translate-y-[-50%] text-xl md:text-2xl font-bold text-[#Ac6236] z-10 text-center">
              
              <Link to="/Productlist">Accessories</Link>
            </h3>
            <p className="absolute p-4 top-[50%] left-[50%] h-36 w-56 translate-x-[-50%] text-lg md:text-2xl font-semibold opacity-0 translate-y-4 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0 z-10 text-center">
              3 products
            </p>
            <img
              src={jewearlry}
              alt="jewearlry"
              className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <div className="w-full relative mt-5 md:mt-10 overflow-hidden cursor-pointer">
            <h3 className="absolute top-[50%] w-44 left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl md:text-[25px] font-bold text-[#Ac6236] z-10 text-center">
             
              <Link to="/Productlist">Makeup</Link>
            </h3>
            <p className="absolute p-4 top-[50%] h-36 w-56 left-[50%] translate-x-[-50%] text-lg md:text-[20px] font-semibold opacity-0 translate-y-4 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0 z-10 text-center">
              1 product
            </p>
            <img
              src={makup}
              alt="makup"
              className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <div className="w-full relative mt-5 md:mt-10 overflow-hidden cursor-pointer">
            <h3 className="absolute top-[50%] w-56 left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl md:text-2xl font-bold text-[#Ac6236] z-10 text-center">
              
              <Link to="/Productlist">Multiple Products</Link>
            </h3>
            <p className="absolute p-4 top-[50%] h-36 w-56 left-[50%] translate-x-[-50%] text-lg md:text-2xl font-semibold opacity-0 translate-y-4 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0 z-10 text-center">
              7 products
            </p>
            <img
              src={multi}
              alt="multi"
              className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catagri;
