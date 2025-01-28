import React, { useEffect } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import { MapPin, HelpCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <section className="text-gray-600 body-font relative w-full m-auto">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
            data-aos="fade-right"
          >
            <iframe
              width="100%"
              height="600px"
              className="absolute inset-0 mt-40"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14476.447944025806!2d67.17869549989703!3d24.894161496935354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33700751688c7%3A0xcf5db95db93aca97!2sSKY%20Tech%20Dot!5e0!3m2!1sen!2s!4v1736344051110!5m2!1sen!2s"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.6)" }}
            />
          </div>

          <div className="lg:w-1/2 md:w-1/2 bg-white text-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" data-aos="fade-up">
            <div className="flex mb-10 gap-5" >
              <div className="w-80">
                <h2 className="text-3xl font-semibold flex items-center gap-2">
                  <MapPin className="text-[#AD6237]" size={24} /> Our Office
                </h2>
                <p className="py-2">
                  Office No- 50, 2nd Floor, Building No: 32, Street: 205. Zone:
                  56, PO Box: 212203 Ain Khaled, Salwa Road, Doha, Qatar
                </p>
                <p className="py-3">+974 3121 4373</p>
              </div>
              <div className="w-80">
                <h2 className="text-3xl font-semibold flex items-center gap-2">
                  <HelpCircle className="text-[#AD6237]" size={24} /> Quick Help
                </h2>
                <p className="py-2">
                  Our customer service team is available and is dedicated to
                  providing you with prompt and friendly assistance.
                </p>
                <p className="py-3">support@sandxcity.com</p>
              </div>
            </div>

            <h2 className="text-3xl mb-1 font-semibold title-font">
              Send a Message
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-black">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:outline-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-black">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:outline-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="subject" className="leading-7 text-sm text-black">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-white rounded border border-gray-300 focus:outline-none text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-black">
                Your message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:outline-none h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-[#AD6237] border-0 py-2 px-6 mx-2 focus:outline-none rounded-xl text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
