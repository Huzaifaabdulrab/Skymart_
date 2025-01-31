
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { SearchContext } from "../Context";

const Dropdown = () => {
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
      
    

      <div id="drop" className="flex-col md:flex-row w-[90%] m-auto mb-10  h-full shadow-xl border hidden">
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
        </div>

        {/* Product Grid */}
        <div className="cursor-pointer bg-white products h-[74vh] z-20 w-full md:w-3/4 ml-0 md:ml-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                className="bg-white p-5 rounded-lg border"
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

      
    </>
  );
};

export default Dropdown;
