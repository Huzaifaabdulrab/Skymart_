import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


 

const Services = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false,
      });
    }, []);
  return (
    <div className="w-[90%] flex flex-col md:flex-row gap-10 md:gap-20 m-auto items-center justify-center mt-16 mb-20">
      <div className="w-full md:w-auto flex justify-center" data-aos="fade-right">
        <img
          src="/assets/customer.jpeg"
          alt="Customer"
          className="w-full md:w-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold mb-5">
          Customer Service Team
        </h1>
        <p className="text-base md:text-[18px] mb-5">
          Our customer service team is available and is dedicated to providing
          you with prompt and friendly assistance.
        </p>
        <p className="text-base md:text-[18px] mb-5">
          We’d love to hear from you! Whether you have questions about our
          products, need assistance with an order, or simply want to share
          feedback, our team is here to help.
        </p>
        <button className="bg-[#AD6237] px-4 py-3 text-white font-semibold rounded-xl">
          <Link to="/Contact">Contact Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;
