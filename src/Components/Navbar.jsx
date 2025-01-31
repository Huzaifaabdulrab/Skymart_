import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import axios from "axios";

const Navbar = () => {
  const [isAllPagesDropdownOpen, setIsAllPagesDropdownOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [customMin, setCustomMin] = useState(0);
  const [customMax, setCustomMax] = useState(Infinity);
  // const [searchTerm] = useContext(SearchContext);
  // const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  let clickTimeout = null;
  const handleHotProductsClick = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      clickTimeout = null;
      // Double-click detected
      navigate("/Productlist");
    } else {
      // Start single click timer
      clickTimeout = setTimeout(() => {
        setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown on single click
        clickTimeout = null;
        // navigate("/Dropdown")
      }, 300); // 300ms delay for double click detection
    }
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
  const handleProductClick = (product) => {
    navigate(`/hotProduct`, { state: { product } });
  };

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
    })
    .filter((product) => {
      // if (searchTerm) {
      //   return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      // }
      return true;
    });

  return (
    <>
      <nav className="bg-[#AD6237] p-2 flex justify-between items-center sticky top-0 z-50">
        <div className="hidden lg:flex justify-between items-center gap-5">
          <div
            className="relative h-10 w-52 rounded-md py-2 px-3 bg-white text-amber-700 cursor-pointer"
            onMouseEnter={() => setIsAllPagesDropdownOpen(true)}
            onMouseLeave={() => setIsAllPagesDropdownOpen(false)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[#AD6237] font-medium">All Pages</span>
              <span>
                <i className="fa-solid fa-angle-down text-[#AD6237]"></i>
              </span>
            </div>
            {isAllPagesDropdownOpen && (
              <ul className="absolute left-0 top-full bg-white shadow-md rounded-md w-full text-[#AD6237] z-10">
                <Link to="/">
                  <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                    Home
                  </li>
                </Link>

                <Link to="/Productlist">
                  <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                    Shop
                  </li>
                </Link>

                <Link to="/OurStory">
                  <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                    Our Story
                  </li>
                </Link>

                <Link to="/Contact">
                  <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                    Contact
                  </li>
                </Link>
              </ul>
            )}
          </div>

          {/* Menu Links */}
          <ul className="flex text-white font-semibold gap-5 justify-center items-center">
            <li>
              <Link
                className="hover:bg-white p-2 hover:text-[#AD6237] hover:rounded-md"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="relative" onClick={handleHotProductsClick}>
                <button className="hover:bg-white hover:text-[#AD6237] p-2 hover:rounded-md flex items-center">
                  Hot Products
                  <i className="fa-solid fa-angle-down ml-3"></i>
                </button>
              </div>
              {isDropdownVisible && (
                <div className="flex absolute left-0 top-full w-full justify-center h-[77vh] bg-white shadow-md rounded-md text-[black] z-10">
                  {/* Sidebar (Category Filter) */}
                  <div className="categoryFilter w-full md:w-64 rounded-lg p-4 sticky top-40 md:top-20">
                    <h3 className="text-center font-semibold text-lg mb-4">
                      Filters
                    </h3>
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
                  <div className="cursor-pointer mt-5 bg-white products h-[74vh] z-20 w-full md:w-3/4 ml-0 md:ml-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto">
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
                          <p className="text-center text-gray-600">
                            ${product.price}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="col-span-full text-center text-gray-500">
                        No products found.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                className="hover:bg-white hover:text-[#AD6237] p-2 hover:rounded-md"
                to="/OurStory"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-white hover:text-[#AD6237] p-2 hover:rounded-md"
                to="/Contact"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex gap-4">
          <div
            className="relative"
            onMouseEnter={() => setIsLanguageDropdownOpen(true)}
            onMouseLeave={() => setIsLanguageDropdownOpen(false)}
          >
            <a
              href="#"
              className="text-white font-semibold p-2 hover:rounded-md flex items-center"
            >
              English
              <i className="fa-solid fa-angle-down ml-3"></i>
            </a>
            {isLanguageDropdownOpen && (
              <ul className="absolute left-0 top-full bg-white shadow-md rounded-md text-[#AD6237] z-10">
                <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  Arabic
                </li>
              </ul>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsCurrencyDropdownOpen(true)}
            onMouseLeave={() => setIsCurrencyDropdownOpen(false)}
          >
            <a
              href="#"
              className="text-white font-semibold p-2 hover:rounded-md flex items-center"
            >
              USD
              <i className="fa-solid fa-angle-down ml-3"></i>
            </a>
            {isCurrencyDropdownOpen && (
              <ul className="absolute left-0 top-full bg-white shadow-md rounded-md text-[#AD6237] z-10">
                <li className="px-4 py-2 hover:bg-[#AD6237] hover:text-white">
                  EUR
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        

        <div
          className="lg:hidden text-white w-full flex justify-end text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full right-0 w-full bg-[#139af3] shadow-md z-50">
            <ul className="flex flex-col text-white font-semibold gap-2 p-4">
              <li>
                <Link
                  className="hover:bg-white hover:text-[#139af3] p-2 hover:rounded-md"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-white hover:text-[#139af3] p-2 hover:rounded-md"
                  to="/Productlist"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-white hover:text-[#139af3] p-2 hover:rounded-md"
                  to="/OurStory"
                  >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-white hover:text-[#139af3] p-2 hover:rounded-md"
                  to="/Contact"
                  >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
