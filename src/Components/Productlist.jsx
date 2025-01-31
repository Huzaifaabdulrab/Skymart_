import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { SearchContext } from "../Context";

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [customMin, setCustomMin] = useState(0);
  const [customMax, setCustomMax] = useState(Infinity);
  const [searchTerm] = useContext(SearchContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/hotProduct`, { state: { product } });
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleFilter = (filterName) => {
    setFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((filter) => filter !== filterName)
        : [...prev, filterName]
    );
  };

  const filteredProducts = products
    .filter((product) => {
      if (
        filters.includes("accessories") &&
        product.category === "accessories"
      ) {
        return true;
      }
      if (filters.includes("freeShipping") && product.price < 50) {
        return true;
      }
      if (filters.includes("bestSellers") && product.rating.rate > 4) {
        return true;
      }
      if (filters.includes("hairProduct") && product.category === "hair care") {
        return true;
      }
      if (filters.includes("makeup") && product.category === "beauty") {
        return true;
      }
      return filters.length === 0;
    })
    .filter((product) => {
      const min = parseFloat(customMin) || 0;
      const max = parseFloat(customMax) || Infinity;
      return product.price >= min && product.price <= max;
    }).filter((product) => {
      if (searchTerm) {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-wrap items-center w-[90%] m-auto justify-around gap-6 mt-5 cursor-pointer">
        <div className="flex flex-col items-center">
          <p className="font-semibold rounded-full w-16 h-16 flex items-center justify-center bg-gray-200 text-center">
            ALL
          </p>
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            Shop All
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p className="rounded-full font-semibold w-16 h-16 flex items-center justify-center bg-gray-200 text-center">
            NEW
          </p>
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            New Arrival
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p className="rounded-full w-16 h-16 flex font-semibold items-center justify-center bg-gray-200 text-center">
            SALE
          </p>
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            Sale
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-contain rounded-full w-16 h-16 bg-gray-200"
            src="https://sandxcity.com/wp-content/uploads/2024/11/model-career-kit-still-life_23-2150218026-300x300.jpg"
            alt=""
          />
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            Accessories
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-contain rounded-full w-16 h-16 bg-gray-200"
            src="https://sandxcity.com/wp-content/uploads/2024/11/best-seller-banner_175838-470-300x300.avif"
            alt=""
          />
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            Best Seller
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-contain rounded-full w-16 h-16 bg-gray-200"
            src="https://sandxcity.com/wp-content/uploads/2024/11/rb_2308-300x300.png"
            alt=""
          />
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            Free Shipping
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-contain rounded-full w-16 h-16 bg-gray-200"
            src="https://sandxcity.com/wp-content/uploads/2024/11/fashion-woman-profile-logo_23-2147492644-300x300.jpg"
            alt=""
          />
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            Hair Products
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-contain rounded-full w-16 h-16 bg-gray-200"
            src="https://sandxcity.com/wp-content/uploads/2024/11/white-round-copy-space-set-beauty-products-flat-laytop-view_279659-995-300x300.avif"
            alt=""
          />
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            Makeup
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-contain rounded-full w-16 h-16 bg-gray-200"
            src="https://sandxcity.com/wp-content/uploads/2024/11/rb_9-300x300.png"
            alt=""
          />
          <a
            href="#"
            className="font-semibold underline mt-2 text-sm text-gray-700"
          >
            Multiple Products
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-[90%] m-auto mt-10 mb-10">
        {/* Sidebar (Category Filter) */}
        <div className="categoryFilter w-full md:w-64 rounded-lg p-4 sticky top-40 md:top-20">
          <h3 className="text-center font-semibold text-lg mb-4">Filters</h3>
          <input
            className="w-full p-2 border rounded mb-4"
            type="search"
            placeholder="Search categories"
          />
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="accessories"
                checked={filters.includes("accessories")}
                onChange={() => toggleFilter("accessories")}
              />
              <label htmlFor="accessories" className="ml-2">
                Accessories
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="freeShipping"
                checked={filters.includes("freeShipping")}
                onChange={() => toggleFilter("freeShipping")}
              />
              <label htmlFor="freeShipping" className="ml-2">
                Free Shipping
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="bestSellers"
                checked={filters.includes("bestSellers")}
                onChange={() => toggleFilter("bestSellers")}
              />
              <label htmlFor="bestSellers" className="ml-2">
                Best Sellers
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hairProduct"
                checked={filters.includes("hairProduct")}
                onChange={() => toggleFilter("hairProduct")}
              />
              <label htmlFor="hairProduct" className="ml-2">
                Hair Products
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="makeup"
                checked={filters.includes("makeup")}
                onChange={() => toggleFilter("makeup")}
              />
              <label htmlFor="makeup" className="ml-2">
                Makeup
              </label>
            </div>
          </div>

          <div className="mt-10 mb-10">
            <h3 className="font-semibold mb-4">Filter by Price</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2"
                  onChange={() => {
                    setCustomMin(0);
                    setCustomMax(500);
                  }}
                />
                $0 - $500.00
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2"
                  onChange={() => {
                    setCustomMin(500);
                    setCustomMax(1000);
                  }}
                />
                $500.00 - $1,000.00
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2"
                  onChange={() => {
                    setCustomMin(1000);
                    setCustomMax(1500);
                  }}
                />
                $1,000.00 - $1,500.00
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2"
                  onChange={() => {
                    setCustomMin(1500);
                    setCustomMax(2000);
                  }}
                />
                $1,500.00 - $2,000.00
              </label>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-2 py-1 border rounded"
                  onChange={(e) => setCustomMin(e.target.value)}
                />
                -
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-2 py-1 border rounded"
                  onChange={(e) => setCustomMax(e.target.value)}
                />
              </div>
              <button
                className="bg-[#AD6237] text-white px-3 py-1 rounded mt-2 w-full"
                onClick={() => setCustomMax(customMax)}
              >
                Apply
              </button>
            </div>
            <hr />
          </div>

          <div className="mt-10 mb-10">
            <h3 className="font-semibold mb-4">Product Status</h3>
            <div className="space-y-2">
              <p>
                In Stock: <span className="font-semibold">0</span>
              </p>
              <p>
                Out of Stock: <span className="font-semibold">8</span>
              </p>
              <p>
                On Sale: <span className="font-semibold">0</span>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold mb-4">Social Links</h3>
            <div className="space-y-2 flex items-baseline gap-2 text-xl">
              <a href="#" className="flex items-center text-blue-500">
                <FaFacebook className="mr-2" />
              </a>
              <a href="#" className="flex items-center text-blue-400">
                <FaTwitter className="mr-2" />
              </a>
              <a href="#" className="flex items-center text-pink-500">
                <FaInstagram className="mr-2" />
              </a>
              <a href="#" className="flex items-center text-blue-700">
                <FaLinkedin className="mr-2" />
              </a>
              <a href="#" className="flex items-center text-red-500">
                <FaYoutube className="mr-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="cursor-pointer bg-white products z-20 w-full md:w-3/4 ml-0 md:ml-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                key={product.id}
              onClick={() => handleProductClick(product)}
              >
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    className="w-full h-48 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <h3 className="font-semibold text-center mt-2">
                  {product.title}
                </h3>
                <p className="text-center text-gray-600">${product.price}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Productlist;
