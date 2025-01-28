import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./Components/ShopingCart.jsx";
import Chekout from "./Components/Chekout.jsx";
import OrderStatus from "./Components/OrderStatus.jsx";
import Home from "./Components/Home";
import OurStory from "./Components/Pages/OurStory";
import Contact from "./Components/Pages/Contact";
import Hotproduct from "./Components/Pages/Hotproduct";
import Productlist from "./Components/Productlist";
import { ShoppingComponentContext, LikesContext } from "./Context.jsx";

function App() {
  const [shoppingSteps, setShoppingSteps] = useState(1);
  const [likes, setLikes] = useState([]);

  return (
    <>
      
      <ShoppingComponentContext.Provider value={[shoppingSteps, setShoppingSteps]}>
        <LikesContext.Provider value={[likes, setLikes]}>
          <BrowserRouter>
            <Routes>
              
              <Route path="/shopingcard" element={<ShoppingCart />} />
              <Route path="/chekout" element={<Chekout />} />
              <Route path="/OrderStatus" element={<OrderStatus />} />

              
              <Route path="/" element={<Home />} />
              <Route path="/OurStory" element={<OurStory />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/HotProduct" element={<Hotproduct />} />
              <Route path="/Productlist" element={<Productlist />} />
            </Routes>
          </BrowserRouter>
        </LikesContext.Provider>
      </ShoppingComponentContext.Provider>
    </>
  );
}

export default App;
