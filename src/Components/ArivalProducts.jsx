import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/Styles/ArivalProducts.css";
import axios from "axios";

const ArivalProducts = (props) => {
  const sliderRef = useRef(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("Fetched products:", res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 w-full mt-4">
      <div className="w-[95%] m-auto px-5">
        <h1 className="text-4xl font-bold text-center mb-10">
          <span className="text-[#AD6237]">{props.Feature}</span> {props.Product}
        </h1>

        <Slider ref={sliderRef} {...settings}>
          {products.map((da) => {
            return (
              <div className="px-5 mt-2 hover:cursor-pointer" key={da.id}>
                <div className="bg-white p-5 rounded-lg shadow-xl card-container">
                  <div className="relative group">
                    <img
                      className="hover:scale-105 cursor-pointer card-image rounded-lg transition-transform duration-300"
                      src={da.image}
                      alt={da.title}
                    />
                    <div className="absolute inset-0 flex justify-center items-center  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="flex space-x-4">
                        {/* Like Icon */}
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M3.172 5.172a4.004 4.004 0 015.656 0L10 6.343l1.172-1.171a4.004 4.004 0 015.656 5.656l-7.071 7.071a.999.999 0 01-1.414 0L3.172 10.828a4.004 4.004 0 010-5.656z" />
                          </svg>
                        </button>
                        {/* Eye Icon */}
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.124.468-.285.924-.482 1.364"
                            />
                          </svg>
                        </button>
                        {/* Reload Icon */}
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 10a7 7 0 1114 0 .75.75 0 01-1.5 0 5.5 5.5 0 10-1.816 3.89l.845-.744a.75.75 0 01.992 1.126l-2 1.75a.75.75 0 01-.992 0l-2-1.75a.75.75 0 01.992-1.126l.845.744A5.5 5.5 0 004.5 10a.75.75 0 01-1.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    {/* <p>Best Seller</p> */}
                    <h3 className="font-semibold py-2">{da.title}</h3>
                    <p>${da.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ArivalProducts;
