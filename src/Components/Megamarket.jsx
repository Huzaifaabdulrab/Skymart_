import React, { useEffect, useState } from 'react';
import axios from 'axios';
import braslet from '../assets/main/braslet.png';

const Megamarket = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data.slice(0, 8)); // Show 8 products
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-8 flex flex-col lg:flex-row items-center h-[100%]">
      {/* Product Cards Section (Left Side) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full lg:w-2/3">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-40 object-contain mb-2 rounded-lg" 
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 font-medium">${product.price}</p>
            {/* Icon container (hidden initially) */}
            <div className="absolute h-full w-full pb-24 inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Like Icon */}
              <button className="bg-white p-2 rounded-full shadow-md mr-4 hover:bg-gray-100 transition">
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
              <button className="bg-white p-2 rounded-full shadow-md mr-4 hover:bg-gray-100 transition">
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
        ))}
      </div>

      <div className="relative w-full lg:w-[90vh] h-[110vh] overflow-hidden group">

  <div className="scaltext absolute h-full w-full z-30 flex flex-col justify-center items-center text-white rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Add the Perfect Touch!</h2>
    <button className="px-6 py-2 text-white font-semibold rounded-lg bg-[#Ac6236] transition">
      Explore More
    </button>
  </div>

  {/* Image */}
  <img 
    src={braslet} 
    alt="Bracelet" 
    className="zoom w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300" 
  />
</div>

    </div>
  );
}

export default Megamarket;