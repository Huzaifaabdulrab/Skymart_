import React from "react";
import Home from './Components/Home'
import OurStory from './Components/Pages/OurStory'
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Hotproduct from "./Components/Pages/Hotproduct";
import Productlist from "./Components/Productlist";


function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/OurStory" element={<OurStory/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/HotProduct" element={<Hotproduct/>}/>
      <Route path="/Productlist" element={<Productlist/>}/>
    </Routes>

    </>
  );
};

export default App;
