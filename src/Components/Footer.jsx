import React from "react";
import { Link } from "react-router-dom";
// import img from "../"

const Footer = () => {
  return (
    <footer class="text-gray-600 mt-5 body-font bg-[#AD6237]">
    <div class="container px-6 md:px-20 py-10 md:py-24 mx-auto flex flex-wrap md:justify-between">
     
      <div class="w-full md:w-1/3 mb-10 md:mb-0 text-center md:text-left">
        <a class="flex title-font font-medium items-center justify-center md:justify-start">
          <div class="text-3xl md:text-4xl font-bold text-[#A52A2A]">
            <img className="h-20" src="\assets\navbarlogo-removebg-preview.png" alt="" />
          </div>
        </a>
        <p class="mt-4 text-lg text-white">
          Shop the latest and greatest products online – unique items that bring
          value to your everyday life.
        </p>
      </div>
      
 
      <div class="w-full md:w-1/4 px-4 md:px-0 text-center md:text-left">
        <h2 class="title-font font-semibold text-white tracking-widest text-xl mb-4">Categories</h2>
        <nav class="list-none space-y-2">
          <li><Link to="/" class="text-white text-lg hover:cursor-pointer">Home</Link></li>
          <li><Link to="/Productlist" class="text-white text-lg hover:cursor-pointer">Products</Link></li>
          <li><Link to="/OurStory" class="text-white text-lg hover:cursor-pointer">Our Story</Link></li>
          <li><Link to="/Contact" class="text-white text-lg hover:cursor-pointer">Contact Us</Link></li>
          <li><Link to="/Privacy" class="text-white  text-lg hover:cursor-pointer hover:underline">Privacy Policy</Link></li>
          {/* <li><Link to="/" class="text-white text-lg  hover:cursor-pointer hover:underline">Terms of Services</Link></li> */}
        </nav>
      </div>
      
      
      <div class="w-full md:w-1/3 mt-10 md:mt-0 px-4 md:px-0 text-center md:text-left">
        <h2 class="title-font font-semibold text-white tracking-widest text-xl mb-4">Contact Us</h2>
        <nav class="list-none space-y-3">
          <li>
            <a class="text-white">Phone : +974 3121 4373</a>
          </li>
          <li>
            <a class="text-white">
              Office No- 50, 2nd Floor, Building No: 32, Street: 205. Zone: 56, PO Box: 212203 Ain Khaled, Salwa Road, Doha, Qatar
            </a>
          </li>
        </nav>
        <div class="flex justify-center md:justify-start space-x-10 mt-2">
          <a href="#" class="text-white text-2xl hover:text-blue-800"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white text-2xl hover:text-blue-800"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white text-2xl hover:text-red-800"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white text-2xl hover:text-red-800"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    

    <div class="bg-[#AD6237] border-t border-white">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
        <p class="text-white text-xl text-center sm:text-left">
        © Copyright 2024 Sandxcity. All Right Reserved.
        </p>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
