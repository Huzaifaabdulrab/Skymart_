import React, { useContext, useEffect } from "react";
import { ShoppingComponentContext } from "../Context";
import softglow from "../assets/main/braslet.png";
import { useNavigate } from "react-router-dom";
import ShopingComponent from "./ShopingComponent";

const OrderStatus = () => {
  const navigate = useNavigate();
  const order = {
    name: "Beverly Hills 5Pc Set",
    price: 118.73,
    sku: "eaa444ce-504c-4570-8d35-bca963e9b616",
    image: softglow,
    orderDate: new Date(),
    orderNumber: Math.floor(Math.random() * 1000000000),
    customerName: "John Doe",
    email: "johndoe@example.com",
    address: "123, Beverly Hills, Los Angeles, CA",
  };

  const deliveryDate = new Date(order.orderDate);
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const shoppingSteps = useContext(ShoppingComponentContext);

  useEffect(() => {
    if (shoppingSteps < 3) {
      navigate("/");
    }
  }, []);

  return (


    <>
    <ShopingComponent/>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-600"> Thank You for Your Order! </h2>
        <p className="text-center text-gray-600 mt-2">A confirmation email has been sent to {order.email}</p>

        <div className="mt-6 border rounded-lg p-4 bg-gray-50 shadow-sm">
          <h4 className="text-lg font-semibold">Order Details</h4>
          <p className="text-gray-700 mt-2">Order Number: <span className="font-semibold">{order.orderNumber}</span></p>
          <p className="text-gray-700">Order Date: {order.orderDate.toDateString()}</p>
          <p className="text-gray-700">Expected Delivery: <span className="text-blue-600 font-semibold">{deliveryDate.toDateString()}</span></p>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
          <img src={order.image} alt="Product" className="w-40 h-40 rounded-lg object-cover shadow-md" />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">{order.name}</h3>
            <p className="text-gray-600 mt-2">SKU: {order.sku}</p>
            <p className="text-gray-600 mt-2">Price: <span className="text-blue-600 font-bold">${order.price}</span></p>
          </div>
        </div>

        <div className="mt-6 border rounded-lg p-4 bg-gray-50 shadow-sm">
          <h4 className="text-lg font-semibold">Delivery Information</h4>
          <p className="text-gray-700 mt-2">Customer Name: {order.customerName}</p>
          <p className="text-gray-700">Delivery Address: {order.address}</p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
            Track Order
          </button>
          <button className="bg-gray-300 py-2 px-6 rounded-lg hover:bg-gray-400 transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default OrderStatus;
