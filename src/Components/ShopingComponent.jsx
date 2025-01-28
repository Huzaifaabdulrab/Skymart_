import React, { useContext } from 'react';
import { ShoppingComponentContext } from '../Context';
import { Link } from 'react-router-dom';

const ShopingComponent = () => {
  const [shoppingSteps] = useContext(ShoppingComponentContext);
  return (

    <div className='flex flex-col sm:flex-row justify-between items-center w-full sm:w-[60%] m-auto mt-10 relative'>

      <div className='flex items-center relative mb-6 sm:mb-0'>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${shoppingSteps == 1 ? 'bg-black text-white' : 'border-2 border-gray-200 text-gray-900'} font-bold`}>
          1
        </div>
        <Link to="/" className='ml-3 font-semibold text-black'>SHOPPING CART</Link>   </div>

      <div className='  hidden sm:flex items-center relative'>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${shoppingSteps == 2 ? 'bg-black text-white' : 'border-2 border-gray-200 text-gray-900'} font-bold`}>
          2
        </div>
        <Link to="/chekout" className='ml-3 font-semibold text-gray-400'>CHECKOUT</Link>   </div>

      <div className=' hidden sm:flex items-center'>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full ${shoppingSteps == 3    ? 'bg-black text-white' : 'border-2 border-gray-200 text-gray-900'} font-bold`}>
          3
        </div>
        <Link to="/chekout" className='ml-3 font-semibold text-gray-400'>ORDER STATUS</Link>   </div>

    </div>
  );
}

export default ShopingComponent;
