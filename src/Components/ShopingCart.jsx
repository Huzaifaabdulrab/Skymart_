import { useContext, useState } from "react";
import ShopingComponent from "./ShopingComponent";
import Softgow from "../assets/main/softglow.jpg";
import { useCallback } from "react";
import { ShoppingComponentContext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(5);
  const pricePerItem = 118.73;
  const subtotal = (pricePerItem * quantity);

  const [, setShoppingSteps] = useContext(ShoppingComponentContext);

  const navigate = useNavigate();

  return (
    <>
      <ShopingComponent />
      <div className="mt-4 rounded-lg flex flex-col md:flex-row m-auto w-[90%] h-auto gap-8">
        {/* Left side: */}
        <div className="w-[100%] md:w-2/3">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

          <div className="hidden md:grid border-b pb-4 text-gray-600 font-semibold grid-cols-5 gap-4 text-sm">
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>SKU</span>
            <span>QUANTITY</span>
            <span className="text-right">SUBTOTAL</span>
          </div>

          <div className="border-b py-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="flex items-center space-x-4">
              <img src={Softgow} alt="Product" className="w-16 rounded" />
              <p className="font-semibold text-center md:text-left">Beverly Hills 5Pc Set</p>
            </div>

            <div>
              <p className="text-gray-600 font-semibold md:hidden">PRICE</p>
              <p className="text-gray-700 font-medium">${pricePerItem}</p>
            </div>

            <div>
              <p className="text-gray-600 font-semibold md:hidden">SKU</p>
              <p className="text-gray-500 text-sm break-words">
                eaa444ce-504c-4570-8d35-bca963e9b616
              </p>
            </div>

            <div>
              <p className="text-gray-600 font-semibold md:hidden">QUANTITY</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
                  className="px-2 py-1 border rounded bg-gray-200"
                >
                  −
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 border rounded bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="text-gray-600 font-semibold md:hidden">SUBTOTAL</p>
              <p className="font-bold text-right">${subtotal}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-3">
            <input
              type="text"
              placeholder="Coupon code"
              className="border p-2 rounded w-full md:w-1/2"
            />
            <button className="bg-orange-600 text-white px-4 py-2 rounded mt-2 md:mt-0 w-full md:w-auto">
              OK
            </button>
          </div>

          <div className="flex justify-end items-center mt-6">
            <button
              onClick={() => setQuantity(0)}
              className="border px-4 py-2 rounded text-red-500 flex items-center"
            >
              Clear Shopping Cart
            </button>
          </div>
        </div>


        {/* rith  */}
        <div className="border p-4 rounded mt-6 md:mt-0">
          <h3 className="text-lg font-bold">CART TOTALS</h3>
          <div className="flex justify-between mt-2">
            <span>Subtotal</span> <span>${subtotal}</span>
          </div>
          <div className="flex justify-between font-bold text-xl mt-2">
            <span>TOTAL</span> <span>${subtotal}</span>
          </div>
          <button onClick={()=> {setShoppingSteps(2); navigate('/chekout')}} className="bg-black text-white w-full py-2 mt-4 rounded">
            Proceed To Checkout
          </button>
          <button className="border w-full py-2 mt-2 rounded">
            Continue Shopping
          </button>

          <div className="flex justify-center gap-4 mt-6">
            <img src="../src/assets/icons/visa.png"
              className='w-20'
              alt="Visa" />
            <img
              src="../src/assets/icons/mastercard.png"
              className='w-20'
              alt="MasterCard"
            />
            <img src="src/assets/icons/paypal.png"
              className='w-20'
              alt="PayPal" />
          </div>
        </div>
      </div>
    </>
  );
}
