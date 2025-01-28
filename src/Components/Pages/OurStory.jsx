import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Numbers from "../Numbers";
import Services from "../Services";
import Footer from '../Footer'


const OurStory = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-[#AD6237] flex flex-col items-center justify-center mx-5 md:mx-10 lg:mx-20 my-10 p-5 rounded-lg text-center">
        <div className="w-full md:w-[90%] lg:w-[75%] xl:w-[65%] mt-10 flex justify-center items-center">
          <h3 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
            Welcome to Sandxcity — Your ultimate destination for beauty,
            fashion, and accessories in the heart of the Middle East.
          </h3>
        </div>
        <p className="text-white mt-5 md:mt-10 w-full md:w-[90%] lg:w-[75%] xl:w-[65%] text-sm md:text-base lg:text-lg text-center">
          At Sandxcity, we believe in offering high-quality, niche products that
          cater to your unique style and preferences—all at competitive prices.
          Our curated collection spans global trends while emphasizing the
          richness of Middle Eastern fashion and beauty standards, giving you
          access to exceptional items that blend tradition with modern elegance.
        </p>
        <p className="text-white mt-5 md:mt-10 mb-10 md:mb-20 w-full md:w-[90%] lg:w-[75%] xl:w-[65%] text-sm md:text-base lg:text-lg text-center">
          Our team is dedicated to making your shopping experience smooth,
          reliable, and enjoyable, no matter where you are in the world.
          Discover products tailored for every season, occasion, and style, and
          allow Sandxcity to become your go-to brand for luxurious yet
          affordable beauty and fashion solutions.
        </p>
      </div>
      <Numbers/>
      <Services/>
      <Footer/>
    </>
  );
};

export default OurStory;
