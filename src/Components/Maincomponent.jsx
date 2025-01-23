import React from 'react';
import braslet from '../assets/main/braslet.png';
import makup from '../assets/main/makup.jpg';
import softglow from '../assets/main/softglow.jpg';
import watch from '../assets/main/watch.jpeg';

const Maincomponent = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[98%] gap-4 m-[2%]">
      
      {/* First Image Section */}
      <div className="relative w-full lg:w-[55%] h-[60vh] md:h-[50vw] overflow-hidden rounded-3xl">
        <img className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" src={makup} alt="makup" />
        <div className="absolute bottom-8 p-4 md:p-6 text-white ">
          <h3 className="text-xl md:text-2xl font-bold">All Your Beauty & Fashion Needs Under One Roof</h3>
          <p className="mt-2 text-sm md:text-base">Explore the ultimate destination for cosmetics, skincare, and stylish apparel.</p>
          <button className="mt-4 bg-[#Ac6236] text-white py-2 px-4 rounded-lg">View Detail</button>
        </div>
      </div>

      {/* Second Image Section */}
      <div className="relative w-full lg:w-[35%] h-[70vh] md:h-[99vh] overflow-hidden rounded-3xl">
        <img className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" src={braslet} alt="braslet" />
        <div className="absolute bottom-8 p-4 md:p-6 text-white rounded-xl">
          <h3 className="text-xl md:text-2xl font-bold">Elegant Bracelets</h3>
          <p className="mt-2 text-sm md:text-base">Discover our unique collection of luxury bracelets.</p>
          <button className="mt-4 bg-[#Ac6236] text-white py-2 px-4 rounded-lg">View Detail</button>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full lg:w-[30%]">
        {/* Third Image Section */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-3xl">
          <img className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" src={softglow} alt="softglow" />
          <div className="absolute bottom-2 p-4 md:p-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold">Soft Glow Cosmetics</h3>
            <p className="mt-2 text-sm md:text-base">Get the perfect glow with our top-rated products.</p>
            <button className="mt-4 bg-[#Ac6236] text-white py-2 px-4 rounded-lg">View Detail</button>
          </div>
        </div>

        {/* Fourth Image Section */}
        <div className="relative h-[30vh] md:h-[40vh] overflow-hidden rounded-3xl">
          <img className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" src={watch} alt="watch" />
          <div className="absolute  top-16 p-4 md:p-6 text-white ">
            <h3 className="text-xl md:text-2xl font-bold">Stylish Watches</h3>
            <p className="mt-2 text-sm md:text-base">Elevate your style with our premium watches.</p>
            <button className="mt-4 bg-[#Ac6236] text-white py-2 px-4 rounded-lg">View Detail</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Maincomponent;
