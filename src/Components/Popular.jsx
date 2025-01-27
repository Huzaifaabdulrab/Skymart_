import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/Styles/ArivalProducts.css";
import { useNavigate } from "react-router-dom";

const Popular = (props) => {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    console.log("Navigating with product:", product);
    navigate(`/hotProduct`, { state: { product } });
  };

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
          <span className="text-[#AD6237]">{props.popular}</span>{" "}
          {props.Catogeries}
        </h1>

        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div
              className="px-5 mt-2 hover:cursor-pointer"
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <div className="bg-white p-5 rounded-lg shadow-xl card-container">
                <div className="relative group">
                  <img
                    className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer card-image rounded-lg"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="px-2 text-center">
                  <h3 className="font-semibold py-2">{product.title}</h3>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Popular;
