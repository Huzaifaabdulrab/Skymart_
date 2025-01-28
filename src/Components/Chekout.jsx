import React, { useContext, useEffect, useState } from "react";
import Softgow from "../assets/main/softglow.jpg"; // Ensure correct image path
import ShopingComponent from "./ShopingComponent";
import { useNavigate } from "react-router-dom";
import { ShoppingComponentContext } from "../Context";
import { useForm } from "react-hook-form";

const Chekout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [shoppingSteps, setShoppingSteps] = useContext(ShoppingComponentContext);
  const [quantity, setQuantity] = useState(5);
  const pricePerItem = 118.73;
  const [subtotal, setSubtotal] = useState(pricePerItem * quantity);

  // Update subtotal whenever quantity changes
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      setSubtotal(pricePerItem * newQuantity);
    }
  };

  const onSubmit = (data) => {
    console.log(data); // Process form data
    setShoppingSteps(3);
    navigate("/OrderStatus");
  };

  useEffect(()=>{
    if (shoppingSteps < 2){
      navigate('/')
    }
  },[]);

  return (
    <>
      <ShopingComponent />
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="font-semibold">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="border rounded-lg p-2"
                    {...register("fname", { required: "First name is required" })}
                  />
                  {errors.fname && <p className="text-red-500 text-sm">{errors.fname.message}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="border rounded-lg p-2"
                    {...register("lname", { required: "Last name is required" })}
                  />
                  {errors.lname && <p className="text-red-500 text-sm">{errors.lname.message}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label className="font-semibold">Company Name (optional)</label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="border rounded-lg p-2 w-full"
                  {...register("company")}
                />
              </div>

              <div className="mt-4">
                <label className="font-semibold">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your country"
                  className="border rounded-lg p-2 w-full"
                  {...register("country", { required: "Country is required" })}
                />
                {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
              </div>

              <div className="mt-4">
                <label className="font-semibold">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className="border rounded-lg p-2 w-full"
                  {...register("street", { required: "Street address is required" })}
                />
                {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="border rounded-lg p-2 w-full mt-2"
                  {...register("apartment")}
                />
              </div>

              <div className="mt-4">
                <label className="font-semibold">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your state"
                  className="border rounded-lg p-2 w-full"
                  {...register("state", { required: "State is required" })}
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
              </div>

              <div className="mt-4">
                <label className="font-semibold">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="border rounded-lg p-2 w-full"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div className="mt-4">
                <label className="font-semibold">
                  ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your ZIP code"
                  className="border rounded-lg p-2 w-full"
                  {...register("zip", { required: "ZIP code is required" })}
                />
                {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
              </div>

              <div className="mt-4">
                <label className="font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border rounded-lg p-2 w-full"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                  onClick={() => navigate("/shop")}
                >
                  Return to Shop
                </button>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                  Continue to Order
                </button>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="mt-12 sticky top-12 border p-6 rounded-lg shadow-md bg-gray-50 md:h-[60%]">
              <h3 className="text-xl font-bold">CART TOTALS</h3>
              <div className="border-b py-4 flex items-center gap-4">
                <img src={Softgow} alt="Product" className="w-28" />
                <p className="font-semibold">Beverly Hills 5Pc Set</p>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-2 py-1 border rounded bg-gray-200"
                >
                  −
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-2 py-1 border rounded bg-gray-200"
                >
                  +
                </button>
              </div>

              <div className="flex justify-between mt-4">
                <span>Subtotal</span> <span>${subtotal}</span>
              </div>
              <div className="flex justify-between font-bold text-xl mt-4">
                <span>TOTAL</span> <span>${subtotal}</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chekout;
