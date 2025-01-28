import React, { useState } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Blog from "../Blog";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import ArivalProducts from "../ArivalProducts";

const Hotproduct = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p>No product details found. Please go back and try again.</p>;
  }

  const image = [
    "https://sandxcity.com/wp-content/uploads/2024/10/6cfa991847cc9cc9e990f17db40a3de6.jpg",
    "https://sandxcity.com/wp-content/uploads/2024/10/3029f4e077293bd4855fad51138e421b-150x150.jpg",
    "https://sandxcity.com/wp-content/uploads/2024/10/0c60dfc17172b97eb43165e75353dbb8-150x150.jpg",
    "https://sandxcity.com/wp-content/uploads/2024/10/934451b579fc95e5ee188e21e1e7b7bc-150x150.jpg",
    "https://sandxcity.com/wp-content/uploads/2024/10/6cfa991847cc9cc9e990f17db40a3de6.jpg",
    "https://sandxcity.com/wp-content/uploads/2024/10/6cfa991847cc9cc9e990f17db40a3de6.jpg",
    "https://sandxcity.com/wp-content/uploads/2024/10/6cfa991847cc9cc9e990f17db40a3de6.jpg",
    "https://sandxcity.com/wp-content/uploads/2024/10/6cfa991847cc9cc9e990f17db40a3de6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "up" && currentIndex + 4 < image.length) {
      setCurrentIndex((prev) => prev + 1);
    } else if (direction === "down" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col md:flex-row mt-10 w-[90%] m-auto min-h-screen">
        <div className="relative h-[90vh] w-48 overflow-hidden border rounded-lg shadow-lg mr-8 group">
          <div
            className="transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateY(-${currentIndex * 25}%)`,
            }}
          >
            {image.map((img, index) => (
              <img
                key={index}
                src={product.image}
                alt={`Slide ${index}`}
                className="w-full h-[25%] p-3"
              />
            ))}
          </div>

          <button
            onClick={() => handleScroll("down")}
            disabled={currentIndex === 0}
            className="absolute top-2 left-1/2 transform -translate-x-1/2 text-black bg-white px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
            aria-label="Scroll Up"
          >
            <i className="fas fa-arrow-up"></i>
          </button>

          <button
            onClick={() => handleScroll("up")}
            disabled={currentIndex + 4 >= image.length}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-black bg-white px-2 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
            aria-label="Scroll Down"
          >
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>

        <div className="flex gap-10 items-start text-left">
          <div className="flex justify-center items-center mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-[40vw] h-[40%] object-cover border rounded-lg"
            />
          </div>

          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <span className="text-gray-600">Brand:</span>
            <div className="mt-2 flex items-center justify-start gap-10">
              <p className="cursor-pointer flex items-center">
                <i className="fas fa-heart mr-2"></i> Add to Wishlist
              </p>
              <p className="cursor-pointer flex items-center">
                <i className="fas fa-exchange-alt mr-2"></i> Compare
              </p>
            </div>
            <p className="text-sm mt-4">
              11 people are viewing this product right now
            </p>
            <hr className="my-4" />
            <h2 className="text-3xl font-semibold">{product.price}</h2>
            <p className="text-gray-700 mt-2">
              <a href="#" className="underline">
                Shipping
              </a>{" "}
              calculated at checkout.
            </p>

            <div className="mt-10">
              <p>Color</p>
              <select
                className="mt-2 outline-black px-3 py-3 border rounded-xl"
                name="color"
                id="color"
              >
                <option value="">Choose an option</option>
                <option value="802">802</option>
                <option value="803">803</option>
                <option value="804">804</option>
              </select>
            </div>

            <div className="mt-20 gap-10 flex">
              <select
                className="px-4 py-2 border rounded-xl"
                name="quantity"
                id="quantity"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button className="w-full bg-slate-700 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center">
                <i className="fas fa-cart-plus mr-2"></i> Add to cart
              </button>
            </div>
            <div className="mt-5">
              <button className="w-full bg-slate-900 px-10 py-3 rounded-xl shadow-lg text-white font-semibold flex items-center justify-center">
                <i className="fas fa-credit-card mr-2"></i> Buy Now
              </button>
            </div>

            <div className="mt-10 mb-3">
              <p className="font-semibold">
                Estimated delivery: <span className="font-normal">4 days</span>
              </p>
              <p className="mt-2 font-semibold">
                SKU:{" "}
                <span className="font-normal">
                  9098538811689-2-pc-matte-lip-kit
                </span>
              </p>
              <p className="mt-2 font-semibold">
                Tags: <span className="font-normal">Beauty, Makeup</span>
              </p>
              <p className="mt-2 font-semibold">
                Categories: <span className="font-normal">Makeup</span>
              </p>
            </div>
            <hr />

            <div className="mt-5 flex gap-10 items-center justify-center">
              <div>
                <p>Have any Questions?</p>
                <p>
                  Feel free to{" "}
                  <a href="#" className="font-semibold underline">
                    Get in touch
                  </a>
                </p>
              </div>
              <div className="flex mt-5 gap-4 text-2xl">
                <a href="#" className="text-blue-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-pink-500">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-red-600">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-blue-700">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog />
      <ArivalProducts Feature="Related" Product="Products" />
      <Footer />
    </>
  );
};

export default Hotproduct;
